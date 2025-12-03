let searchBox = document.getElementById("searchBox");
let openSearch = document.getElementById("openSearch");
let closeSearch = document.getElementById("closeSearch");

openSearch.onclick = () => {
    searchBox.style.display = "flex";
};

closeSearch.onclick = () => {
    searchBox.style.display = "none";
};
