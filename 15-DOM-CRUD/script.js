const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // ✅ VALIDATION (must come first)
  if (title.value === "" || author.value === "" || year.value === "") {
    alert("Please fill all fields");
    return; // ⛔ stop execution
  }

  // ✅ Create row container
  const row = document.createElement("section");

  // ✅ Create columns
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookYear = document.createElement("p");

  // ✅ Assign values
  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;
  bookYear.textContent = year.value;

  // ✅ Append columns into row
  row.appendChild(bookTitle);
  row.appendChild(bookAuthor);
  row.appendChild(bookYear);

  // ✅ Append row into list
  bookList.appendChild(row);

  // ✅ Clear inputs
  title.value = "";
  author.value = "";
  year.value = "";
});
