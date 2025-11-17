document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.querySelector(".nav-search-btn");
  var searchContainer = document.querySelector(".header-search");
  var searchInput = document.getElementById("site-search-input");

  if (searchButton) {
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
  }

  // Lightbox for gallery images
  var lightboxBackdrop = document.createElement("div");
  lightboxBackdrop.className = "lightbox-backdrop";
  lightboxBackdrop.setAttribute("role", "dialog");
  lightboxBackdrop.setAttribute("aria-modal", "true");
  lightboxBackdrop.innerHTML =
    '<img class="lightbox-image" alt="Expanded image">';

  document.body.appendChild(lightboxBackdrop);

  var lightboxImage = lightboxBackdrop.querySelector(".lightbox-image");

  function openLightbox(src, alt) {
    if (!src) return;
    lightboxImage.src = src;
    lightboxImage.alt = alt || "";
    lightboxBackdrop.classList.add("is-visible");
  }

  function closeLightbox() {
    lightboxBackdrop.classList.remove("is-visible");
  }

  document.addEventListener("click", function (event) {
    var target = event.target;

    // Close when clicking on the backdrop (but not when clicking the image itself)
    if (
      target === lightboxBackdrop ||
      (target && target.parentElement === lightboxBackdrop)
    ) {
      closeLightbox();
      return;
    }

    // Open when clicking any image inside a masonry gallery
    if (target.matches(".masonry-gallery img")) {
      event.preventDefault();
      openLightbox(target.currentSrc || target.src, target.alt);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightboxBackdrop.classList.contains("is-visible")) {
      closeLightbox();
    }
  });
}); 
