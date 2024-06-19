document.addEventListener('DOMContentLoaded',()=>{

    // Selecting the Elements

    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    //event listners for adding tasks

    addTaskButton.addEventListener('click',addTask());
    taskInput.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            addTask();
        }
    });
function addTask() {
    const taskText = taskInput.value.trim();//trim remove spaces from inputed string
    if (taskText === '') 
        return;

    const listItem = document.createElement('li');
    listItem.className = 'task';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', toggleTaskCompletion);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

function toggleTaskCompletion() {
    this.classList.toggle('completed');
}

function deleteTask() {
    this.parentElement.remove();
}
});