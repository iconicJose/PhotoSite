document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.querySelector(".nav-search-btn");
  var searchContainer = document.querySelector(".header-search");
  var searchInput = document.getElementById("site-search-input");

  if (!searchButton) {
    return;
  }

  searchButton.addEventListener("click", function () {
    console.log("Search clicked");

    if (!searchContainer) {
      return;
    }

    var isHidden = searchContainer.hasAttribute("hidden");

    if (isHidden) {
      searchContainer.removeAttribute("hidden");
      if (searchInput) {
        searchInput.focus();
      }
    } else {
      searchContainer.setAttribute("hidden", "");
    }
  });
});
