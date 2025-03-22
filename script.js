<<<<<<< HEAD
let books = JSON.parse(localStorage.getItem("rituals")) || [
  { title: "Sky Burial", author: "Tibetan Highlands" },
  { title: "Fire Jumping", author: "Persian Zoroastrians" },
  { title: "Bullet Ant Glove", author: "Satere-Mawé Tribe (Brazil)" },
  { title: "Scarification Ceremony", author: "Ethiopian Tribes" },
  { title: "Endocannibalism", author: "Fore People (Papua New Guinea)" },
  { title: "Finger Cutting Grief", author: "Dani Tribe (Indonesia)" },
  { title: "Coming of Age Whipping", author: "Hamar Tribe (Ethiopia)" },
  { title: "Okipa Ceremony", author: "Mandan Tribe (North America)" }
];

function saveToLocalStorage() {
  localStorage.setItem("rituals", JSON.stringify(books));
}

function displayBooks(filteredBooks = books) {
  const list = document.getElementById("bookList");
  if (!list) return;
  list.innerHTML = "";

  filteredBooks.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>🪶 ${book.title}</h3>
      <p><strong>Tribe:</strong> ${book.author}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    list.appendChild(card);
  });
}

function addBook() {
  const title = document.getElementById("titleInput").value.trim();
  const author = document.getElementById("authorInput").value.trim();
  if (title && author) {
    books.push({ title, author });
    saveToLocalStorage();
    displayBooks();
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
  } else {
    alert("Please enter both ritual name and tribe.");
  }
}

function deleteBook(index) {
  if (confirm("Are you sure you want to delete this ritual?")) {
    books.splice(index, 1);
    saveToLocalStorage();
    displayBooks();
  }
}

function searchBook() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  displayBooks(filtered);
}


document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", searchBook);
  }
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
=======
let books = JSON.parse(localStorage.getItem("rituals")) || [
  { title: "Sky Burial", author: "Tibetan Highlands" },
  { title: "Fire Jumping", author: "Persian Zoroastrians" },
  { title: "Bullet Ant Glove", author: "Satere-Mawé Tribe (Brazil)" },
  { title: "Scarification Ceremony", author: "Ethiopian Tribes" },
  { title: "Endocannibalism", author: "Fore People (Papua New Guinea)" },
  { title: "Finger Cutting Grief", author: "Dani Tribe (Indonesia)" },
  { title: "Coming of Age Whipping", author: "Hamar Tribe (Ethiopia)" },
  { title: "Okipa Ceremony", author: "Mandan Tribe (North America)" }
];

function saveToLocalStorage() {
  localStorage.setItem("rituals", JSON.stringify(books));
}

function displayBooks(filteredBooks = books) {
  const list = document.getElementById("bookList");
  if (!list) return;
  list.innerHTML = "";

  filteredBooks.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <h3>🪶 ${book.title}</h3>
      <p><strong>Tribe:</strong> ${book.author}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    list.appendChild(card);
  });
}

function addBook() {
  const title = document.getElementById("titleInput").value.trim();
  const author = document.getElementById("authorInput").value.trim();
  if (title && author) {
    books.push({ title, author });
    saveToLocalStorage();
    displayBooks();
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
  } else {
    alert("Please enter both ritual name and tribe.");
  }
}

function deleteBook(index) {
  if (confirm("Are you sure you want to delete this ritual?")) {
    books.splice(index, 1);
    saveToLocalStorage();
    displayBooks();
  }
}

function searchBook() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  displayBooks(filtered);
}


document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", searchBook);
  }
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
>>>>>>> d106b9b (Initialized Site)
