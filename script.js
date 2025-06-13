function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const list = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
}
