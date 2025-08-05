document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("task-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttonGroup.appendChild(completeBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonGroup);
  taskList.appendChild(li);

  input.value = "";
}
