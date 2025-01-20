const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

// Add Task
// addTaskBtn.addEventListener('click', () => {
//     const task = taskInput.value.trim();
//     if (task) {
//         const li = document.createElement('li');
//         li.textContent = task;
//         taskList.appendChild(li);
//         taskInput.value = '';
//     }
// });

addTaskBtn.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task) {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();
        if (taskText) {
            await addTaskToFirestore(taskText);
            renderTasks();
            taskInput.value = "";
        }
        renderTasks();
    }
    console.log("Task Added");
});
async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "tasks"), {
        text: taskText,
        completed: false
    });
    console.log("Task Added to Firestore");
}


// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

const sw = new URL('service-worker.js', import.meta.url)
if ('serviceWorker' in navigator) {
    const s = navigator.serviceWorker;
    s.register(sw.href, {
        scope: '/YOUR_REPOSITORY_NAME_HERE/'
    })
        .then(_ => console.log('Service Worker Registered for scope:', sw.href,
            'with', import.meta.url))
        .catch(err => console.error('Service Worker Error:', err));
}

