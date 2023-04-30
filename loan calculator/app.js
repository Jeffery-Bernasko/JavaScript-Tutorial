// Listen for the submit button(calculate) and add an event listner

const loan_button = document.querySelector('#loan-form').addEventListener('submit', calculateResult);


// Calculate Result
function calculateResult(e){
    console.log("Submit")

    // UI variables for the form fields
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')

    const monthly_payments = document.getElementById('monthly-payment')
    const total_payments = document.getElementById('total-payment')
    const total_interest = document.getElementById('total-interest')


    // Formulas for calculating
    let principal = parseFloat(amount.value);
    let calculateInterest = parseFloat(interest.value) / 100 / 12;
    let calculatePayments = parseFloat(years.value) * 12

    // Compute monthly payments
    let x = Math.pow(1 + calculateInterest, calculatePayments);
    let monthly = (principal * x * calculateInterest) / (x - 1)

    // Check if it is a finite number
    if(isFinite(monthly)){
        monthly_payments.value = monthly.toFixed(2)
        total_payments.value = (monthly * calculatePayments).toFixed(2)
        total_interest.value = ((monthly * calculatePayments) - principal).toFixed(2)
    } else {
        showError('Please Check your numbers');
    }
    e.preventDefault();
}

function showError(message){
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    // Add class
    errorDiv.className = 'alert alert-danger'

    //Create tect node and append to div
    errorDiv.appendChild(document.createTextNode(message))

    // Insert error above heading
    card.insertBefore(errorDiv, heading)

    // Clear error after some time (5 secs)
    setTimeout(clearError, 3000)
}


function clearError(){
    document.querySelector('.alert').remove()
}