// Book Library App with Validation and localStorage
document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.getElementById('bookForm');
  const bookList = document.getElementById('bookList');
  const searchInput = document.getElementById('search');

  // Icons for validation
  const titleIcon = document.getElementById('titleIcon');
  const authorIcon = document.getElementById('authorIcon');
  const isbnIcon = document.getElementById('isbnIcon');

  // Load books from localStorage on page load
  let books = getBooksFromLocalStorage();
  displayBooks(books);

  // Add Book
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const isbn = document.getElementById('isbn').value.trim();

    let valid = validateForm({ title, author, isbn });

    if (valid) {
      const book = { title, author, isbn };
      books.push(book);
      saveBooksToLocalStorage(books);  // Save to localStorage
      displayBooks(books);
      bookForm.reset();
      resetValidation();
    }
  });

  // Validate Form
  function validateForm({ title, author, isbn }) {
    let valid = true;

    if (title === '') {
      setError('title', 'Please enter a valid title.', titleIcon);
      valid = false;
    } else {
      clearError('title', titleIcon);
    }

    if (author === '') {
      setError('author', 'Please enter a valid author name.', authorIcon);
      valid = false;
    } else {
      clearError('author', authorIcon);
    }

    if (isbn === '' || isbn.length !== 13) {
      setError('isbn', 'Please enter a valid ISBN (must be 13 characters).', isbnIcon);
      valid = false;
    } else {
      clearError('isbn', isbnIcon);
    }

    return valid;
  }

  // Set Error State
  function setError(inputId, message, iconElement) {
    const input = document.getElementById(inputId);
    const errorMessage = input.nextElementSibling;
    input.classList.add('is-invalid');
    errorMessage.textContent = message;
    errorMessage.classList.add('active');
    iconElement.textContent = '❌';
    iconElement.style.color = 'red';
  }

  // Clear Error State
  function clearError(inputId, iconElement) {
    const input = document.getElementById(inputId);
    const errorMessage = input.nextElementSibling;
    input.classList.remove('is-invalid');
    errorMessage.classList.remove('active');
    iconElement.textContent = '✅';
    iconElement.style.color = 'green';
  }

  // Reset Validation when form is reset
  function resetValidation() {
    clearError('title', titleIcon);
    clearError('author', authorIcon);
    clearError('isbn', isbnIcon);
  }

  // Remove Book
  bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const isbn = e.target.getAttribute('data-isbn');
      books = books.filter(book => book.isbn !== isbn);
      saveBooksToLocalStorage(books);  // Update localStorage after removal
      displayBooks(books);
    }
  });

  // Search Books
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filteredBooks);
  });

  // Display Books in List
  function displayBooks(books = {}) {
    bookList.innerHTML = '';
    books.forEach(({title, author, isbn}) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      li.innerHTML = `
        <div>
          <strong>${title}</strong> by ${author} (ISBN: ${isbn})
        </div>
        <button class="btn btn-danger btn-sm delete" data-isbn="${isbn}">Remove</button>
      `;
      bookList.appendChild(li);
    });
  }

  // Get Books from localStorage
  function getBooksFromLocalStorage() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }

  // Save Books to localStorage
  function saveBooksToLocalStorage(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }
});
