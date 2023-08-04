function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return (
  fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(books => renderBooks(books))
  )
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  getFifth();
  getCharacter();
  getPages();
});


// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((books) => books.forEach(book => console.log(book.url)));

// Fifth book
function getFifth() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(books => fifthBook(books))
  }

let collection = []
function fifthBook(books) {
  books.forEach(book => {
    collection.push(book.name);
      });
    console.log(`Fifth book: ${collection[4]}`);
}

// 1031st character
function getCharacter() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(books => character(books))
  }

let roles = []
function character(books) {
  books.forEach(book => {
    roles.push(book.characters)
  })
  // Alternate: console.log(roles[4][1031])
  for (let i = 0; i < roles.length; i++) {
  if (roles[i].length > 1031) {
    console.log(`1031st character: ${roles[i][1031]}`)
  }
} 
}

// Add together number of pages from all books
// Function is run when DOMContentLoaded executes
// Fetch book data and parse
// Then run pages function
function getPages() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(books => pages(books))
  }

// Take book data from getPages() and get numberOfPages value
// Create empty array to push book pages
let pageArr = []
// Create pageTotal to assign page total
let pageTotal
function pages(books) {
  books.forEach(book => {
    pageArr.push(parseInt(book.numberOfPages));
      });
    pageTotal = pageArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    console.log(`Total number of pages: ${pageTotal}`)
    return pageTotal;
}
