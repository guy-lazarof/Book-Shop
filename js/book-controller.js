'use strict'


function onInit() {
  renderFilterByQueryStringParams()
  renderBooks()
  doTrans()
}
// renderBooks()
function renderBooks () {
  var books = gBooks
  var strHtmls = books.map(book => `<tr>
  <td class='td book-id'>${book.id}</td>
  <td class='td book-title'>${book.title}</td>
  <td class='td book-price'>${book.price}</td>
  <td class='td book-rate'>${book.rate}</td>
  <td class='td actions'><button class='btn deleteBtn' data-trans='delete-btn' onclick="onDeleteBook('${book.id}')"
  '></button>
  <button class='btn updateBtn' data-trans='update-btn' onclick="onUpdateBook('${book.id}')"
  '></button>
  <button class='btn readBtn' data-trans='read-btn' onclick="onReadBook('${book.id}')"
  '></button>
  </td>
</tr> 
`)
document.querySelector('.table-body').innerHTML = strHtmls.join('')

}

function onAddBook() {
  const title = prompt(getTrans('please enter title'))
  const price = +prompt(getTrans('please enter price'))
  addBook(title, price)
  renderBooks()
  doTrans()
}

function onDeleteBook(bookId) {
  deleteBook(bookId)
  renderBooks()
  doTrans()
}

function onUpdateBook(bookId) {
  const book = getBookById(bookId)
  var newPrice = +prompt(getTrans('new price?'), book.price)

  if (newPrice && newPrice !== book.price) {
    const book = updateBook(bookId, newPrice)
    renderBooks()
    doTrans()
  }
}

function onReadBook(bookId) {
  const book = getBookById(bookId)
  var elModal = document.querySelector('.modal')
  elModal.querySelector('.book-title-span').innerText = book.title
  elModal.querySelector('.book-price-span').innerText = book.price
  elModal.querySelector('.modal-rate-span').innerHTML =
  `<div class="number">
	<span class="minus" onClick="onMinusRate('${book.id}')">-</span>
	<input type="text" value="${book.rate}" class="input-rating"/>
	<span class="plus" onClick="onPlusRate('${book.id}')">+</span>
  </div>`
  elModal.querySelector('.modal-description').innerHTML = book.description
  elModal.classList.add('open')
  doTrans()
}

function onPlusRate(bookId){
  plusRate(bookId)
}

function onMinusRate(bookId){
  minusRate(bookId)

}

function onCloseModal() {
  document.querySelector('.modal').classList.remove('open')
  renderBooks()
  doTrans()
}

function onSetLang(elBtn) {
  const lang = setLang()
  if (lang === 'he') document.body.classList.add('rtl')
  else document.body.classList.remove('rtl')
  doTrans()
}

function renderFilterByQueryStringParams(){
  console.log(window.location);
  const queryStringParams = new URLSearchParams(window.location.search)
  console.log(queryStringParams.get('dog'));

  const filterBy = { bookName: queryStringParams.get('bookName') || '' }
  if (!filterBy.bookName) return
  
  setBooksFilter(filterBy.bookName)
}