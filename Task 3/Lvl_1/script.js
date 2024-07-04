document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    document.querySelector('.popupimage img').src = image.getAttribute('src');
    document.querySelector('.popupscreen').style.display = 'flex';
  })
});
document.getElementById('close').addEventListener('click', () => {
  document.querySelector('.popupscreen').style.display = 'none';
})