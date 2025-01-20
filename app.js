const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
import { db } from "./firebaseconfig";

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

