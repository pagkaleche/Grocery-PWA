import { db, auth } from "./firebase.js";
import { onSnapshot, collection, addDoc, getDocs, setDoc, updateDoc, doc, getDoc, } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleGenerativeAI } from '@google/generative-ai';

const listIds = ['meatList', 'dairyList', 'vegetablesList', 'fruitList', 'snacksList'];
const lists = {};

listIds.forEach((id) => {
    lists[id] = document.getElementById(id);
});

const meat = lists['meatList'];
const dairy = lists['dairyList'];
const vegetable = lists['vegetablesList'];
const fruit = lists['fruitList'];
const snacks = lists['snacksList'];

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById('login-form');
const mainContainer = document.getElementById('main-container');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');

const listInput = document.getElementById('listInput');
const addListBtn = document.getElementById('addListBtn');
const aiInput = document.getElementById('chat-input');
const aiButton = document.getElementById('send-btn');
const chatHistory = document.getElementById('chat-history');
const chatbotToggle = document.getElementById('chatbot-toggle');
const emptyList = document.getElementById('emptyList');


const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await addUserToFirestore(user.uid, user.email);
    } catch (error) {
        console.error("Error during registration: ", error.message);
    }
};

const addUserToFirestore = async (userId, email) => {
    try {
        const userDocRef = doc(db, "users", userId);
        await setDoc(userDocRef, {
            email: email,
            createdAt: new Date(),
        });
    } catch (error) {
        console.error("Error adding user to Firestore: ", error.message);
    }
};

const loginUser = async (email, password) => {
    if (!email || !password) {
        console.error("Email and password are required.");
        return;
    }
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
    } catch (error) {
        console.error("Login error:", error.message);
        alert("Login failed: " + error.message);
    }
};

loginBtn.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log("Logging in with email:", email, "and password", password
    );
    await loginUser(email, password);
});

registerBtn.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    await registerUser(email, password);
});

logoutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.reload();
        console.log("User signed out.");
    } catch (error) {
        console.error("Error signing out:", error);
    }
});

function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}

auth.onAuthStateChanged((user) => {
    if (user) {
        logoutBtn.style.display = 'block';
        loginForm.style.display = 'none';
        mainContainer.style.display = 'block';
        const userId = user.uid;
        const listRef = collection(db, "groceries", userId, "list");

        const unsubscribe = onSnapshot(listRef, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("New data available offline:", change.doc.data());
                }
            });
        });

        window.addEventListener("online", () => {
            console.log("Syncing data...");
            onSnapshot(listRef, (snapshot) => {
                snapshot.docs.forEach((doc) => console.log("Synced:", doc.data()));
            });
        });

        // const unsubscribe = onSnapshot(listRef, (snapshot) => {
        //     snapshot.docChanges().forEach((change) => {
        //         if (change.type === "added") {
        //             console.log("New data available offline:", change.doc.data());
        //         }
        //     });
        // });

        // window.addEventListener("online", () => {
        //     console.log("Syncing data...");
        //     onSnapshot(listRef, (snapshot) => {
        //         snapshot.docs.forEach((doc) => console.log("Synced:", doc.data()));
        //     });
        // });

        const createGroceryList = async (userId, groceryItems) => {
            try {
                const groceryRef = collection(db, "groceries", userId, "list");
                for (const item of groceryItems) {
                    await addDoc(groceryRef, item);
                }
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        };

        addListBtn.addEventListener('click', async () => {
            const listInput = document.getElementById("listInput");
            const listCategory = document.getElementById("category").value;
            const listText = sanitizeInput(listInput.value.trim());

            if (listText) {
                await createGroceryList(userId, [
                    { name: listText, category: listCategory, completed: false }
                ]);
                await renderList();
                listInput.value = "";
                liveRegion.textContent = `New list added: ${listText}`;
            }
        });

        Object.values(lists).forEach(list => {
            list.addEventListener('click', async (e) => {
                if (e.target.tagName === 'LI') {
                    const itemId = e.target.id;

                    if (!itemId) {
                        console.error("No item ID found on the clicked element");
                        return;
                    }

                    try {
                        await updateDoc(doc(db, "groceries", userId, "list", itemId), { completed: true });
                        liveRegion.textContent = `Completed.`;

                        setTimeout(async () => {
                            await renderList();
                            liveRegion.textContent = `Ready.`;
                            console.log(liveRegion.textContent);
                        }, 1000);
                    } catch (error) {
                        console.error("Error updating document: ", error);
                        liveRegion.textContent = `Error: Could not complete the item.`;
                    }
                }
            });
        });

        const fetchUserGroceryList = async (userId) => {
            try {
                const groceryRef = collection(db, "groceries", userId, "list");
                const querySnapshot = await getDocs(groceryRef);

                const groceryLists = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                return groceryLists;
            } catch (e) {
                console.error("Error fetching grocery list: ", e);
                return [];
            }
        };

        const renderList = async () => {
            const groceryList = await fetchUserGroceryList(userId);

            meat.innerHTML = "";
            dairy.innerHTML = "";
            vegetable.innerHTML = "";
            fruit.innerHTML = "";
            snacks.innerHTML = "";

            groceryList.forEach((item) => {
                if (!item.completed) {
                    let listItem = document.createElement("li");
                    listItem.textContent = item.name;
                    listItem.id = item.id;
                    listItem.setAttribute('tabindex', '0');

                    if (item.completed) {
                        listItem.style.textDecoration = "line-through";
                    }

                    switch (item.category) {
                        case 'meat':
                            meat.appendChild(listItem);
                            break;
                        case 'dairy':
                            dairy.appendChild(listItem);
                            break;
                        case 'vegetables':
                            vegetable.appendChild(listItem);
                            break;
                        case 'fruits':
                            fruit.appendChild(listItem);
                            break;
                        case 'snacks':
                            snacks.appendChild(listItem);
                            break;
                        default:
                            break;
                    }
                }
            });
            hideCategory('meatList');
            hideCategory('dairyList');
            hideCategory('vegetablesList');
            hideCategory('fruitList');
            hideCategory('snacksList');
        }
        renderList();
        getApiKey();

        let model
        async function getApiKey() {
            let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
            const apiKey = snapshot.data().key;
            const genAI = new GoogleGenerativeAI(apiKey);
            model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        }

        async function askChatBot(request) {
            return await model.generateContent(request);
        }

        aiButton.addEventListener('click', async () => {
            let prompt = aiInput.value.trim().toLowerCase();
            if (prompt) {
                console.log("Prompt: ", prompt);
                if (!ruleChatBot(prompt)) {
                    askChatBot(prompt);
                }
            } else {
                appendMessage("Please enter a prompt")
            }
        });

        async function ruleChatBot(request) {
            const regex = /add\s+(.+?)\s+(?:to|in)\s+(\w+)/i;
            const match = request.match(regex);
            console.log("Match: ", match);

            if (match) {
                const listText = match[1].trim();
                const listCategory = match[2].trim();

                if (listText && listCategory) {
                    try {
                        await createGroceryList(userId, [
                            { name: listText, category: listCategory, completed: false }
                        ]);
                        appendMessage(`${listText} added to ${listCategory} category.`);
                        await renderList();
                    } catch (error) {
                        appendMessage("Error adding to Firestore: " + error.message);
                    }
                } else {
                    appendMessage("Please provide both the item and category.");
                }
                return true;
            } else if (request.startsWith("complete")) {
                let listName = request.replace("complete", "").trim();
                if (listName) {
                    try {
                        if (result) {
                            appendMessage('List ' + listName + ' marked as complete.');
                        } else {
                            appendMessage("List not found!");
                        }
                    } catch (error) {
                        appendMessage("Error marking list as complete: " + error.message);
                    }
                } else {
                    appendMessage("Please specify a list to complete.");
                }
                return true;
            }
            return false;
        }
    } else {
        loginForm.style.display = 'flex';
        mainContainer.style.display = 'none';
    }
});

// const sw = new URL('service-worker.js', import.meta.url); problem
const sw = '/WebDevTrends/service-worker.js'
if ('serviceWorker' in navigator) {
    const s = navigator.serviceWorker;
    s.register(sw, {
        scope: '/WebDevTrends/'
    })
        .then(_ => console.log('Service Worker Registered for scope:', sw,
            'with', import.meta.url))
        .catch(err => console.error('Service Worker Error:', err));
}

function appendMessage(message) {
    let history = document.createElement("div");
    history.textContent = message;
    history.className = 'history';
    chatHistory.appendChild(history);
    aiInput.value = "";
}

function hideCategory(categoryId) {
    let categoryDiv = document.querySelector(`#${categoryId}`).closest('.list-category');

    if (categoryDiv) {
        const list = categoryDiv.querySelector('ul');

        if (list && list.children.length === 0) {
            categoryDiv.style.display = 'none';
        } else {
            categoryDiv.style.display = 'block';
        }
    }

    const allListsEmpty = listIds.every(id => {
        const listItems = document.querySelectorAll(`#${id} li`);
        return listItems.length === 0;
    });

    emptyList.style.display = allListsEmpty ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const hideChat = document.getElementById('hide-chat');

    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.style.display = 'block';
        chatbotToggle.style.display = 'none';
    });

    hideChat.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
        chatbotToggle.style.display = 'inline-block';
    });
});



