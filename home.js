// Ambil konten navbar dari navbar.html
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

// Tandai tautan "Beranda" sebagai aktif
document.querySelector('a[href="home.html"]').classList.add('active');
});


// Ambil elemen-elemen yang diperlukan
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

// Fungsi untuk bergeser ke slide sebelumnya
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = images.length - 1;
    }
    updateSlider();
}

// Fungsi untuk bergeser ke slide berikutnya
function nextSlide() {
    if (currentSlide < images.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider() {
    const slideWidth = images[0].clientWidth;
    const transformValue = -slideWidth * currentSlide;
    slider.style.transform = `translateX(${transformValue}px)`;
}

// Tambahkan event listener untuk tombol sebelumnya dan berikutnya
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Tambahkan event listener untuk ukuran layar yang berubah
window.addEventListener('resize', updateSlider);

// Memperbarui slider saat halaman dimuat
updateSlider();
