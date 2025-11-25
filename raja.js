const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const dropdown = document.querySelector('.dropdown');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Mobile dropdown toggle
dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
