const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDateTime.value;

    if (taskText === "" || taskDueDate === "") {
        alert("Please enter both a task and due date.");
        return;
    }

    const taskItem = document.createElement("li");
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = `${taskText} (Due: ${new Date(taskDueDate).toLocaleString()})`; // Corrected
    taskTextSpan.classList.add("task-text");

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
        taskTextSpan.classList.toggle("completed");
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        const newTaskText = prompt("Edit task:", taskText);
        const newDueDate = prompt("Edit due date:", taskDueDate);
        if (newTaskText !== null && newDueDate !== null) {
            taskTextSpan.textContent = `${newTaskText} (Due: ${new Date(newDueDate).toLocaleString()})`; // Corrected
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskDateTime.value = "";
}
