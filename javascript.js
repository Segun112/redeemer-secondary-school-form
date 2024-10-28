const readMoreBtn = document.querySelector('.read-more');
const readLessBtn = document.querySelector('.read-less');
const fullContent = document.querySelector('.full-content');

readMoreBtn.addEventListener('click', () => {
  fullContent.style.display = 'block';
  readMoreBtn.style.display = 'none';
  readLessBtn.style.display = 'inline-block';
});

readLessBtn.addEventListener('click', () => {
  fullContent.style.display = 'none';
  readMoreBtn.style.display = 'inline-block';
  readLessBtn.style.display = 'none';
});
