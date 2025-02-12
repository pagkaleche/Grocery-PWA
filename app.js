import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";
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

const listInput = document.getElementById('listInput');
const addListBtn = document.getElementById('addListBtn');
const deleteAll = document.getElementById('deleteAll');
const aiInput = document.getElementById('chat-input');
const aiButton = document.getElementById('send-btn');
const chatHistory = document.getElementById('chat-history');
const chatbotToggle = document.getElementById('chatbot-toggle');

const firebaseConfig = {
    apiKey: "AIzaSyDo9nRtzMTFaGFfGWgqlcksi5Y9h7x46x0",
    authDomain: "webdevtrends-59dcf.firebaseapp.com",
    projectId: "webdevtrends-59dcf",
    storageBucket: "webdevtrends-59dcf.firebasestorage.app",
    messagingSenderId: "711058905449",
    appId: "1:711058905449:web:b29e4821f76656e45cc5f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}


addListBtn.addEventListener('click', async () => {
    const list = listInput.value.trim();
    if (list) {
        const listInput = document.getElementById("listInput");
        const listCategory = document.getElementById("category").value;
        const listText = sanitizeInput(listInput.value.trim());
        if (listText) {
            await addListToFirestore(listText, listCategory);
            renderList();
            listInput.value = "";
            liveRegion.textContent = `New list added: ${listText}`;
        }
        renderList();
    }
});

Object.values(lists).forEach(list => {
    list.addEventListener('click', async (e) => {
        if (e.target.tagName === 'LI') {
            await updateDoc(doc(db, "grocery", e.target.id), {
                completed: true
            });
            liveRegion.textContent = `Completed.`;
            setTimeout(() => {
                renderList();
                liveRegion.textContent = `Ready.`;
                console.log(liveRegion.textContent);
            }, 1000);
        }
    });
});

deleteAll.addEventListener('click', async () => {
    await deleteAlllist();
});

async function getApiKey() {
    let snapshot = await getDocs(doc(db, "apikey", "googlegenai"));
    apiKey = snapshot.data().key;
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

async function askChatBot(request) {
    return await model.generateContent(request);
}

async function addListToFirestore(listText, listCategory) {
    await addDoc(collection(db, "grocery"), {
        text: listText,
        category: listCategory,
        completed: false
    });
    console.log("list Added to Firestore");
}


async function renderList() {
    var list = await getListFromFirestore();
    Object.values(lists).forEach(listElement => {
        listElement.innerHTML = "";
    });

    list.forEach((list, index) => {
        if (!list.data().completed) {
            const listItem = document.createElement("li");
            listItem.id = list.id;
            listItem.textContent = list.data().text;
            listItem.setAttribute('tabindex', '0');
            listItem.setAttribute('role', 'option');
            listItem.setAttribute('aria-selected', 'false');
            listItem.addEventListener('focus', () => {
                listItem.setAttribute('aria-selected', 'true');
            });

            listItem.addEventListener('blur', () => {
                listItem.setAttribute('aria-selected', 'false');
            });

            const category = list.data().category + "List";
            if (lists[category]) {
                lists[category].appendChild(listItem);
            }
        }
    });
    listIds.forEach(hideCategory);
}

window.addEventListener('DOMContentLoaded', () => {
    renderList();
    getApiKey();
});


async function getListFromFirestore() {
    var data = await getDocs(collection(db, "grocery"));
    let userData = [];
    data.forEach((doc) => {
        userData.push(doc);
    });
    return userData;
}


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

async function deleteAlllist() {
    const listSnapshot = await getDocs(collection(db, "list"));
    const deletePromises = listSnapshot.docs.map((list) =>
        deleteDoc(doc(db, "list", list.id))
    );

    await Promise.all(deletePromises);

    console.log("All list deleted from Firestore");
    renderList();
}


function ruleChatBot(request) {
    if (request.startsWith("add list")) {
        let list = request.replace("add list", "").trim();
        if (list) {
            addListToFirestore(list);
            appendMessage('list ' + list + ' added!');
            renderList();
        } else {
            appendMessage("Please specify a list to add.");
        }
        return true;
    } else if (request.startsWith("complete")) {
        let listName = request.replace("complete", "").trim();
        if (listName) {
            if (removeFromlistName(listName)) {
                appendMessage('list ' + listName + ' marked as complete.');
            } else {
                appendMessage("list not found!");
            }

        } else {
            appendMessage("Please specify a list to complete.");
        }
        return true;
    }

    return false;
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

function appendMessage(message) {
    let history = document.createElement("div");
    history.textContent = message;
    history.className = 'history';
    chatHistory.appendChild(history);
    aiInput.value = "";
}

async function removeFromlistName(listName) {
    const q = query(collection(db, "list"), where("text", "==", listName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        querySnapshot.forEach(async (listDoc) => {
            try {
                await updateDoc(listDoc.ref, { completed: true });
                console.log('list marked as complete in Firestore:', listName);

                let ele = document.getElementsByName(listName);
                if (ele.length > 0) {
                    ele.forEach(e => {
                        removelist(e.id);
                        removeVisuallist(e.id);
                    });
                }
                renderList();
                appendMessage('list ' + listName + ' has been marked as complete.');
            } catch (error) {
                console.error("Error marking list as complete: ", error);
                appendMessage("Error marking list as complete: " + error.message);
            }
        });
    } else {
        appendMessage("list not found!");
        return false;
    }

    return true;
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



