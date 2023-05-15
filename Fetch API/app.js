document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2'),addEventListener('click',getJson);
document.getElementById('button3'),addEventListener('click',getAPIData);



function getText(){
    // Using the fetch API
    fetch('text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    }).
    catch(function(err){
        console.log(err);
    })
}

function getJson(e){
    fetch('customers.json').
    then(function(res){
        return res.json()
    })
    .then(function(data){
       // console.log(data);
        let output = '';
        data.forEach(function(customers){
           output += `
           <ul>
           <li>ID: ${customers.id}</li>
          <li>NAME: ${customers.name}</li>
          <li>COMPANY: ${customers.company}</li>
          <li>PHONE: ${customers.phone}</li>
           </ul>
           `
        })
        document.getElementById('output').innerHTML = output;
    }).
    catch(function(err){
        console.log(err);
    })

    e.preventDefault();
}

function getAPIData(){
    fetch('https://api.github.com/users').
    then(function(res){
        return res.json()
    })
    .then(function(data){
        let output = ''
        data.forEach(function(users){
            output += `
            <ul>
            <li>Login: ${users.login}</li>
           <li>ID: ${users.id}</li>
           <li>TYPE: ${users.type}</li>
           <li>NODE_ID: ${users.node_id}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}