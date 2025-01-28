import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

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

window.addEventListener('load', renderTasks);

async function getTasksFromFirestore() {
    var data = await getDocs(collection(db, "tasks"));
    let userData = [];
    data.forEach((doc) => {
        userData.push(doc);
    });
    return userData;
}


const sw = new URL('service-worker.js', import.meta.url)
if ('serviceWorker' in navigator) {
    const s = navigator.serviceWorker;
    s.register(sw.href, {
        scope: '/WebDevTrends/'
    })
        .then(_ => console.log('Service Worker Registered for scope:', sw.href,
            'with', import.meta.url))
        .catch(err => console.error('Service Worker Error:', err));
}

