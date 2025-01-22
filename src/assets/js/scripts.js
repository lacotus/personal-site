function loadHeader() {
  fetch("../layouts/header.html")
   .then(response => response.text())
   .then(data => {
     // Insert the header into the page
     const headerContainer = document.getElementById("header-container");
     if (headerContainer) {
       headerContainer.innerHTML = data;

       // Initialize the hamburger menu after loading the header
       initHamburger();
     } else {
       console.error("Header container not found in the DOM.");
     }
   })
   .catch(error => console.error("Error loading header:", error)); 
}

function initHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", () => {
    console.log('Hamburger menu was clicked!!')
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe elements with the 'slide-in-right' class (or 'slide-from-left', etc.)
  document.querySelectorAll('.slide-in-right').forEach(elem => {
    observer.observe(elem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  initScrollAnimations();
});

