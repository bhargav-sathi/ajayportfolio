// ============================
// Mobile menu button (with #mobile-menu-button)
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
});

// ============================
// Toggle mobile menu (with .menu-toggle)
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

// ============================
// Animate progress bars when the card enters the viewport
// ============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.skills-card').forEach(c => observer.observe(c));

const track = document.getElementById('carouselTrack');
const carousel = document.getElementById('carousel');

let isDragging = false;
let startX;
let scrollX = 0;   // Current translation
let speed = 0.5;   // Auto scroll speed
let totalWidth = track.scrollWidth / 2;

function animate() {
  if (!isDragging) {
    scrollX -= speed;
  }

  // Loop back for infinite scroll
  if (scrollX <= -totalWidth) scrollX = 0;
  if (scrollX > 0) scrollX = -totalWidth;

  track.style.transform = `translateX(${scrollX}px)`;
  requestAnimationFrame(animate);
}

animate();

// Mouse drag
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - scrollX;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  scrollX = e.pageX - startX;
});

carousel.addEventListener('mouseup', () => isDragging = false);
carousel.addEventListener('mouseleave', () => isDragging = false);

// Touch drag
carousel.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - scrollX;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  scrollX = e.touches[0].pageX - startX;
});

carousel.addEventListener('touchend', () => isDragging = false);
// document.getElementById('downloadResume').addEventListener('click',handleDownloadResume)
// function  handleDownloadResume(){
//   fetch('https://github.com/Ajay-Marri/protfilio/raw/main/images/Ajay%20Marri_py_1.pdf')
//   .then((response) => response.blob())
//   .then((blob) => {
//     const blobURl = window.URL.createObjectURL(new Blob([blob]))
//     const aTag = document.createElement('a')
//     aTag.href = blobURl
//     aTag.setAttribute('download','Ajay.html')
//     document.body.appendChild(aTag)
//     aTag.click()
//     aTag.remove()
//   })
// }
  document.getElementById('downloadCV').addEventListener('click', function (e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './images/Ajay Marri_py_1.pdf';
    link.download = 'Ajay_Marri_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

// ----------------------------------------------------------------------------------------------------------------------------------
