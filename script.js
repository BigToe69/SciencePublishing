let searchbar = document.getElementById("searchbar");

function SearchForArticles(){
  let search = searchbar.value;
  window.location.href = search + ".html";
}