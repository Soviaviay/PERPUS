// Ambil konten navbar dari navbar.html
/*fetch('navbar.html')
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
*/

document.addEventListener('DOMContentLoaded', function() {
    // Ambil konten navbar dari navbar.html
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Tandai tautan "Beranda" sebagai aktif
            document.querySelector('a[href="home.html"]').classList.add('active');
        });
        
    // Ambil elemen-elemen yang diperlukan setelah DOM siap
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
});

//js untuk rekomendasi buku pemula
document.addEventListener('DOMContentLoaded', function () {
    const bookSlider = document.querySelector('.book-slider');
    const prevButton = document.querySelector('.prev-book');
    const nextButton = document.querySelector('.next-book');

    function smoothScroll(targetScrollLeft, duration) {
        const startScrollLeft = bookSlider.scrollLeft;
        const startTime = performance.now();
    
        function step(time) {
            const elapsed = time - startTime;
            const progress = Math.min(1, elapsed / duration);
    
            bookSlider.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;
    
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                bookSlider.scrollLeft = targetScrollLeft;
            }
        }
    
        requestAnimationFrame(step);
    }
    

    prevButton.addEventListener('click', function () {
        smoothScroll(bookSlider.scrollLeft - 300, 500); // Sesuaikan durasi dan jarak sesuai kebutuhan
    });

    nextButton.addEventListener('click', function () {
        smoothScroll(bookSlider.scrollLeft + 300, 500); // Sesuaikan durasi dan jarak sesuai kebutuhan
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // ...

    // Tambahkan event listener untuk klik pada buku
    bookSlider.addEventListener('click', function (event) {
        const clickedBook = event.target.closest('.book');
        if (clickedBook) {
            const bookIndex = Array.from(bookSlider.children).indexOf(clickedBook);
            const selectedBook = books[bookIndex]; // Ganti dengan objek buku yang sesuai
            displayPopup(selectedBook);
        }
    });

    function displayPopup(book) {
        const popupContainer = document.getElementById('popupContainer');
        const popupBookImage = document.getElementById('popupBookImage');
        const popupBookTitle = document.getElementById('popupBookTitle');
        const popupBookInfo = document.getElementById('popupBookInfo');

        popupBookImage.src = book.imageSrc; // Ganti dengan properti gambar yang sesuai pada objek buku
        popupBookTitle.textContent = book.title; // Ganti dengan properti judul yang sesuai pada objek buku
        popupBookInfo.textContent = book.additionalInfo; // Ganti dengan properti informasi tambahan yang sesuai pada objek buku

        popupContainer.style.display = 'flex';

        // Menambahkan event listener untuk menutup pop-up saat overlay di luar pop-up diklik
        popupContainer.addEventListener('click', function (event) {
            if (event.target === popupContainer) {
                closePopup();
            }
        });
    }

    window.closePopup = function () {
        const popupContainer = document.getElementById('popupContainer');
        popupContainer.style.display = 'none';
        // Hapus event listener setelah pop-up ditutup
        popupContainer.removeEventListener('click', closePopup);
    };
});
