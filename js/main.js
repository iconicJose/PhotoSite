document.addEventListener("DOMContentLoaded", function () {
  var themeToggle = document.querySelector(".theme-toggle");
  var root = document.body;

  try {
    var storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (themeToggle) {
        themeToggle.classList.add("theme-toggle--dark");
      }
    }
  } catch (e) {
    // localStorage might be blocked; ignore
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";

      if (isDark) {
        root.removeAttribute("data-theme");
        themeToggle.classList.remove("theme-toggle--dark");
        try {
          window.localStorage.setItem("theme", "light");
        } catch (e) {}
      } else {
        root.setAttribute("data-theme", "dark");
        themeToggle.classList.add("theme-toggle--dark");
        try {
          window.localStorage.setItem("theme", "dark");
        } catch (e) {}
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
