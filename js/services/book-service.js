'use strict'

const STORAGE_KEY = 'bookDB'

var gBooks 

_createBooks()

function getBookById(bookId) {
  const book = gBooks.find(book => bookId === book.id)
return book
}

function addBook(title,price) {
  const book = _createBook(title,price)
  gBooks.unshift(book)
  _saveBooksToStorage()
  // console.log("Hello from book service");
}

function deleteBook(bookId) {
  const bookIdx = gBooks.findIndex(book => bookId === book.id)
  gBooks.splice(bookIdx, 1)
  _saveBooksToStorage()
}

function updateBook(bookId ,newPrice) {
  const book = getBookById(bookId)
  book.price = newPrice
  _saveBooksToStorage()
  return book
}

function plusRate(bookId){
  const book = getBookById(bookId)
  if (book.rate >= 0 && book.rate < 10) {
    const elRatingInput = document.querySelector('.input-rating')
    book.rate++
    elRatingInput.value = book.rate
    _saveBooksToStorage()
  }

}

function minusRate(bookId){
  const book = getBookById(bookId)
  if (book.rate > 0 && book.rate <= 10) {
    const elRatingInput = document.querySelector('.input-rating')
    book.rate--
    elRatingInput.value = book.rate
    _saveBooksToStorage()
  }
}

function _createBook(title,price) {
  const book = {
    id: makeId(),
    title,
    price,
    rate: 0,
    description: makeLorem(),
  }

  return book
}

function _createBooks() {
  var books = loadFromStorage(STORAGE_KEY)
  // Nothing in storage - generate demo data
  if (!books || !books.length) {
      books = []
      for (let i = 0; i < 21; i++) {
        var title = makeLorem(1)
        var price = getRandomIntInclusive(0, 100)
        books.push(_createBook(title,price))
      }
  }
  gBooks = books
  _saveBooksToStorage()
}
function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks)
}

