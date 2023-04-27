// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all Event Listners
loadEventListners();

function loadEventListners(){
    //Add Task Event
    form.addEventListener('submit',addTask);

    // Remove task event
    taskList.addEventListener('click',removeTask);
}

// Add Task function 
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li elements
    const li = document.createElement('li');
    // Add a class
    li.className = 'collection-item';

    //Create Text node and append
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element

    const link = document.createElement('a');
    // Add a class name
    link.className = 'delete-item secondary-content';

    //Add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    //Append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = ''; 

    e.preventDefault();
}

function removeTask(e){
        if(e.target.parentElement.classList.contains('delete-item')){

            // Prompt user to confirm the deletion
            if(confirm('Are you sure')){
                e.target.parentElement.parentElement.remove();
            }
            }
    e.preventDefault();
}