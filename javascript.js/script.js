const slider = document.querySelector('.images');
document.querySelector('.next').addEventListener('click', () => {
  slider.scrollBy({ left: 250, behavior: 'smooth' });
});
document.querySelector('.prev').addEventListener('click', () => {
  slider.scrollBy({ left: -250, behavior: 'smooth' });
});