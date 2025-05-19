const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-bar ul');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});