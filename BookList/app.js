// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Create a prototype function
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

// Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    // Get Form Values
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn   = document.querySelector('#isbn').value;

    // Instatiate book object
    const book = new Book(title,author,isbn);

    // Instatiate the UI object
    const ui = new UI();

  

    // Add Book to List
    ui.addBookToList(book);

    //Clear fields after submit
    ui.clearFields();

    e.preventDefault();
})