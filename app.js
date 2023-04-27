// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all Event Listners
loadEventListners();

function loadEventListners(){
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add Task Event
    form.addEventListener('submit',addTask);

    // Remove task event
    taskList.addEventListener('click',removeTask);

    // Clear task event using the clear btn
    clearBtn.addEventListener('click',clearTask);

    //Filter task
    filter.addEventListener('keyup',filterTask);
}

// Get Task from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(
        function(task){
    // Create li elements
    const li = document.createElement('li');
    // Add a class
    li.className = 'collection-item';

    //Create Text node and append
    li.appendChild(document.createTextNode(task));

    // Create new link element

    const link = document.createElement('a');
    // Add a class name
    link.className = 'delete-item secondary-content';

    //Add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    //Append link to li
    li.appendChild(link);
        }
    );
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

    // Store locally
    storeinLocalStorage(taskInput.value);

    //Clear input
    taskInput.value = ''; 

    e.preventDefault();
}

//Function to do the storage
function storeinLocalStorage(task){
    let tasks;

    //check local storage to see if empty then store task
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Function to remove task
function removeTask(e){
        if(e.target.parentElement.classList.contains('delete-item')){

            // Prompt user to confirm the deletion
            if(confirm('Are you sure')){
                e.target.parentElement.parentElement.remove();

                // Remove from local storage
                removeFromLS(e.target.parentElement.parentElement);
            }
            }
}

// Remove from LS 
function removeFromLS(taskItem){
    let tasks;

    //check local storage to see if empty then store task
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



//Function to clear task using the clear btn
function clearTask(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);

        // Or

        // taskList.innerHTML = '';

        // Clear from LS
        clearTaskFromLS()
    }
}

function clearTaskFromLS(){
    localStorage.clear();
}

//Function to filter the task
function filterTask(e){
    const text = e.target.value.toLowerCase();

    // Take all list items
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }else{
                task.style.display = 'none';
            }
        }
    );

    console.log(text);

}