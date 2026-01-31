const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
];
const grid = document.getElementById('gallery-grid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('modal-prev');
const nextBtn = document.getElementById('modal-next');
let currentIdx = 0;

function showModal(idx) {
  currentIdx = idx;
  modalImg.src = images[idx];
  modal.style.display = 'flex';
}
function closeModal() {
  modal.style.display = 'none';
}
function showPrev() {
  currentIdx = (currentIdx - 1 + images.length) % images.length;
  modalImg.src = images[currentIdx];
}
function showNext() {
  currentIdx = (currentIdx + 1) % images.length;
  modalImg.src = images[currentIdx];
}
images.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Gallery Image ${i+1}`;
  img.onclick = () => showModal(i);
  grid.appendChild(img);
});
closeBtn.onclick = closeModal;
prevBtn.onclick = showPrev;
nextBtn.onclick = showNext;
modal.onclick = e => { if (e.target === modal) closeModal(); };
document.addEventListener('keydown', e => {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeModal();
  }
}); 