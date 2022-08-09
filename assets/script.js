let timeDisplayEl = $("#time-display");

// Function for time display//
var rightNow = moment().format('MMM DD, YYYY [at] HH:mm a');
timeDisplayEl.text(rightNow);
function displayTime() {
}


//event listener for task sections
window.addEventListener('load', () => {
  const form = document.querySelector("#new-task");
  const input = document.querySelector("#new-task-submit");
  const taskList = document.querySelector("#to-do-list");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  const task = input.value

  const to_do_el = document.createElement("div");
  to_do_el.classList.add("content");

  const task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.type = task;
  task_input.setAttribute = ("readonly", "readonly");

})

//action button variables
var editButton = document.querySelectorAll(".save-btn")
var newTask = document.querySelectorAll (".project")
//Event Listeners for delete and save buttons
for (let i = 0; i < editButton.length; i++) {
    newTask[i].value = localStorage.getItem(i)

  editButton[i].addEventListener('click', e => {
    console.log("Hello")
    console.log(newTask[i].value)
    localStorage.setItem(i,newTask[i].value)
  })
  
}

function editButton(event) {
  event.preventDefault();
  console.log("Hello")
}



