// ES6 class

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn  = isbn;
    }
}

class UI{
    constructor(){}

    addBookToList(book){
    const list = document.querySelector('#book-list');
    // Check if book obj is undefined or null before accessing its properties
    if(book){
 
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
   // console.log(list);
    }
    }

    showAlert(message,className){
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

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
    document.querySelector('#title').value = '',
    document.querySelector('#author').value = '',
    document.querySelector('#isbn').value = '';
    }
}

// Local Storage for the books
class Storage{
    static displayBook(){    
     const books = Storage.getBooks();

     books.forEach(function(book) {
        const ui = new UI();

        // Add book to UI
        ui.addBookToList(book);
     });
    
    }

    // Fetching from Local storage
    static getBooks(){
        let books;

        // Check LS
        if(localStorage.getItem('books') === null){
            books = [];
        } else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    // Add them to local storage
    static addBook(book){
        const books = Storage.getBooks();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }

    // Remove from local storage
    static removeBook(isbn){
        const books = Storage.getBooks();

        books.forEach(function(book, index){
            // Check if book obj is not null
            if(book && book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Storage.displayBook);

// Event Listner for add book
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

    // Add books to LS
    Storage.addBook(book)

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

    // Check that target element is not null before calling deleteBook method
  if (e.target.parentElement.previousElementSibling !== null){
    ui.deleteBook(e.target);

    // Remove from LS

    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert after deleting
    ui.showAlert('Book deleted','success');
   
  }
  e.preventDefault();
})