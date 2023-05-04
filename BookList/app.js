// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Create a prototype function to add books
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // Create a tr element
    const row = document.createElement('tr');

    // Insert Columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Clear field prototype function
UI.prototype.clearFields = function(){
    document.querySelector('#title').value = '',
    document.querySelector('#author').value = '',
     document.querySelector('#isbn').value = '';
}

// Show Alert message for the empty fields
UI.prototype.showAlert = function(message,className){
    // Create a div
    const div = document.createElement('div');

    // Add Class Name
    div.className = `alert ${className}`;

    // Add Text
    div.appendChild(document.createTextNode(message));

    // Get Parent Element
    const container = document.querySelector('.container');
    const form = document.querySelector("#book-form");

    // Insert Alert 
    container.insertBefore(div, form);

    // Timeout after 3 Secs
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Event Listener for add Book
document.getElementById('book-form').addEventListener('submit',function(e){
    // Get Form Values
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn   = document.querySelector('#isbn').value;

    // Instatiate book object
    const book = new Book(title,author,isbn);

    // Instatiate the UI object
    const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === ""){
    ui.showAlert('Please fill in the fields','error')
  } else{
    // Add Book to List
    ui.addBookToList(book);

    // Show alert after book has been added
    ui.showAlert('Book has been added succefully','success')

    //Clear fields after submit
    ui.clearFields();

  }

    
    e.preventDefault();
})

// Event Listner for delete
document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();

    ui.deleteBook(e.target);

    // Show alert after deleting
    ui.showAlert('Book deleted','success');
    e.preventDefault();
})