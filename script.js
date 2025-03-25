let books = JSON.parse(localStorage.getItem("rituals")) || [];

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
      <p><strong>Type:</strong> ${book.type || "Unknown"}</p>
      <button onclick="deleteBook(${index})">Delete</button>
    `;
    list.appendChild(card);
  });
}

function addRitual() {
  const title = document.getElementById("ritualName").value.trim();
  const author = document.getElementById("tribeName").value.trim();
  const type = document.querySelector('input[name="ritualType"]:checked')?.value || "Unknown";
  if (title && author) {
    books.push({ title, author, type });
    saveToLocalStorage();
    displayBooks();
    document.getElementById("ritualName").value = "";
    document.getElementById("tribeName").value = "";
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
