import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";
import { GoogleGenerativeAI } from '@google/generative-ai';

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const deleteAll = document.getElementById('deleteAll');
const aiInput = document.getElementById('chat-input');
const aiButton = document.getElementById('send-btn');
const chatHistory = document.getElementById('chat-history');

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


addTaskBtn.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task) {
        const taskInput = document.getElementById("taskInput");
        const taskText = sanitizeInput(taskInput.value.trim());
        if (taskText) {
            await addTaskToFirestore(taskText);
            renderTasks();
            taskInput.value = "";
            liveRegion.textContent = `New task added: ${taskText}`;
        }
        renderTasks();
    }
});

taskList.addEventListener('click', async (e) => {
    if (e.target.tagName === 'LI') {
        await updateDoc(doc(db, "tasks", e.target.id), {
            completed: true
        });
        liveRegion.textContent = `Completed.`;
        setTimeout(() => {
            renderTasks();
            liveRegion.textContent = `Ready.`;
            console.log(liveRegion.textContent);
        }, 1000);
    }
});

deleteAll.addEventListener('click', async () => {
    await deleteAllTasks();
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

async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "tasks"), {
        text: taskText,
        completed: false
    });
    console.log("Task Added to Firestore");
}


async function renderTasks() {
    var tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (!task.data().completed) {
            const taskItem = document.createElement("li");
            taskItem.id = task.id;
            taskItem.textContent = task.data().text;
            taskItem.setAttribute('tabindex', '0');
            taskItem.setAttribute('role', 'option');
            taskItem.setAttribute('aria-selected', 'false');
            taskItem.addEventListener('focus', () => {
                taskItem.setAttribute('aria-selected', 'true');
            });

            taskItem.addEventListener('blur', () => {
                taskItem.setAttribute('aria-selected', 'false');
            });
            taskList.appendChild(taskItem);
        }
    });
}

window.addEventListener('load',
    () => {
        renderTasks();
        getApiKey();
    }
);

async function getTasksFromFirestore() {
    var data = await getDocs(collection(db, "tasks"));
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

async function deleteAllTasks() {
    const tasksSnapshot = await getDocs(collection(db, "tasks"));
    const deletePromises = tasksSnapshot.docs.map((task) =>
        deleteDoc(doc(db, "tasks", task.id))
    );

    await Promise.all(deletePromises);

    console.log("All tasks deleted from Firestore");
    renderTasks();
}


function ruleChatBot(request) {
    if (request.startsWith("add task")) {
        let task = request.replace("add task", "").trim();
        if (task) {
            addTaskToFirestore(task);
            appendMessage('Task ' + task + ' added!');
            renderTasks();
        } else {
            appendMessage("Please specify a task to add.");
        }
        return true;
    } else if (request.startsWith("complete")) {
        let taskName = request.replace("complete", "").trim();
        if (taskName) {
            if (removeFromTaskName(taskName)) {
                appendMessage('Task ' + taskName + ' marked as complete.');
            } else {
                appendMessage("Task not found!");
            }

        } else {
            appendMessage("Please specify a task to complete.");
        }
        return true;
    }

    return false;
}

aiButton.addEventListener('click', async () => {
    console.log("Send button clicked!");
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

async function removeFromTaskName(taskName) {
    const q = query(collection(db, "tasks"), where("text", "==", taskName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        querySnapshot.forEach(async (taskDoc) => {
            try {
                await updateDoc(taskDoc.ref, { completed: true });
                console.log('Task marked as complete in Firestore:', taskName);

                let ele = document.getElementsByName(taskName);
                if (ele.length > 0) {
                    ele.forEach(e => {
                        removeTask(e.id);
                        removeVisualTask(e.id);
                    });
                }
                renderTasks();
                appendMessage('Task ' + taskName + ' has been marked as complete.');
            } catch (error) {
                console.error("Error marking task as complete: ", error);
                appendMessage("Error marking task as complete: " + error.message);
            }
        });
    } else {
        appendMessage("Task not found!");
        return false;
    }

    return true;
}
