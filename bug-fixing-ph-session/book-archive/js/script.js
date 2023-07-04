
//------------- handle search button-----------
const searchField = document.getElementById("search-input");
const searchText = searchField.value;
const searchBook = async () => {
  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.docs));
    // .then((data) => console.log(data.docs));
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerText = "";

  const books = myBooks;
  books.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col", "text-center");
    div.innerHTML = `
        <div class="card h-100 align-items-center">
        
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            
              <div class="card-body text-center">
                <h5 class="card-title"> Name: ${book.title}</h5>
                <h6> Author: ${book.author_name}</h6>
                <p>Publisher: <small> ${book.publisher[0]} </small></p>
                <small> First Published Year: ${book.first_publish_year}</small>
              </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};
