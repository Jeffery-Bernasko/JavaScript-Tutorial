document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers)

function loadCustomer(e){
    const xhr = new XMLHttpRequest();
    

    // Open
    xhr.open('GET','customer.json',true);


    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
           // console.log(customer);

           const output = `
           <ul>
           <li>ID: ${customer.id}</li>
           <li>NAME: ${customer.name}</li>
           <li>COMPANY: ${customer.company}</li>
           <li>PHONE: ${customer.phone}</li>
           </ul>
           `;

           document.getElementById('customer').innerHTML = output;
        }
    }

   

    xhr.send();
    
    e.preventDefault();
}

function loadCustomers(e){
    const xhr1 = new XMLHttpRequest();
    
    xhr1.open('GET','customers.json',true);

    xhr1.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(function(customer){
             output += `
            <ul>
            <li>ID: ${customer.id}</li>
           <li>NAME: ${customer.name}</li>
           <li>COMPANY: ${customer.company}</li>
           <li>PHONE: ${customer.phone}</li>
            </ul>
            `
            });

            

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr1.send();
}