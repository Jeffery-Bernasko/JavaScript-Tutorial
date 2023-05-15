document.getElementById('button').addEventListener('click',loadData)


function loadData(){
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // OPEN (Specify the type of request to make or url or file we want to make to)

    xhr.open('GET', 'data.txt',true);

    xhr.onload = function(){
        if(this.status === 200){
           // console.log(this.responseText)
           document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // Send Request
    xhr.send();
}


/*
    ready state values
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready 

*/