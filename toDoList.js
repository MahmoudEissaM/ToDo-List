window.addEventListener('load', () => {
    const taskInput = document.getElementById('task');
    const taskTable = document.querySelector('table');
    const addButton = document.getElementById('myButton');

    addButton.addEventListener('click', () => {
        createTask(taskInput, taskTable);
    });

    taskTable.addEventListener('click', (e) => {
        if (e.target.closest('.delete-icon')) {
            console.log(e.target.parentElement)
            deleteTask(e.target.closest('.delete-icon'));
        } else if (e.target.classList.contains('complete-checkbox')) {
            toggleTaskCompletion(e.target);
        }
    });
});

const createTask = (taskInput, taskTable) => {
    if (!taskInput.value.trim()) {
        alert('Please enter a task.');
        return;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="checkbox" class="complete-checkbox" /></td>
        <td>${taskInput.value.trim()}</td>
        <td><i class="fa-solid fa-calendar-xmark delete-icon"></i></td>
    `;
    taskTable.appendChild(newRow);
    taskInput.value = '';
    updateTaskCount();
};


const deleteTask = (deleteIcon) => {
    const row = deleteIcon.closest('tr');
    // console.log(e.target)
    if (row && confirm('R U Sure To Delete This Task')) {
        row.remove();
        updateTaskCount();
    }
};

const updateTaskCount = () => {
    const taskCount = document.querySelectorAll('table tr').length - 1;

};
