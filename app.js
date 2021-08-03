const searchQuery = document.getElementById("search-query");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    let url = "https://www.google.com/search?q=" + searchQuery.value;
    window.open(url);
});