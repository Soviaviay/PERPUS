document.addEventListener('DOMContentLoaded', function () {
    // Ambil konten navbar dari navbar.html
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Tandai tautan "Beranda" sebagai aktif
            document.querySelector('a[href="index.html"]').classList.add('active');
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

    

    const prevBookButton = document.querySelector('.prev-book');
    const nextBookButton = document.querySelector('.next-book');
    const bookSlider = document.querySelector('.book-slider'); // Definisikan elemen bookSlider
    
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

    prevBookButton.addEventListener('click', function () {
        smoothScroll(bookSlider.scrollLeft - 300, 500);
    });

    nextBookButton.addEventListener('click', function () {
        smoothScroll(bookSlider.scrollLeft + 300, 500);
    });

    const prevBookEnvButton = document.querySelector('.prev-book-env');
    const nextBookEnvButton = document.querySelector('.next-book-env');
    const bookSliderEnv = document.querySelector('.book-slider-env'); // Definisikan elemen bookSlider untuk buku alam sekitar

    function smoothScrollEnv(targetScrollLeft, duration) {
        const startScrollLeft = bookSliderEnv.scrollLeft;
        const startTime = performance.now();

        function step(time) {
            const elapsed = time - startTime;
            const progress = Math.min(1, elapsed / duration);

            bookSliderEnv.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                bookSliderEnv.scrollLeft = targetScrollLeft;
            }
        }

        requestAnimationFrame(step);
    }

    prevBookEnvButton.addEventListener('click', function () {
        smoothScrollEnv(bookSliderEnv.scrollLeft - 300, 500);
    });

    nextBookEnvButton.addEventListener('click', function () {
        smoothScrollEnv(bookSliderEnv.scrollLeft + 300, 500);
    });

const prevBookFunnyButton = document.querySelector('.prev-book-funny');
const nextBookFunnyButton = document.querySelector('.next-book-funny');
const bookSliderFunny = document.querySelector('.book-slider-funny'); // Definisikan elemen bookSlider untuk buku yang menghibur

function smoothScrollFunny(targetScrollLeft, duration) {
    const startScrollLeft = bookSliderFunny.scrollLeft;
    const startTime = performance.now();

    function step(time) {
        const elapsed = time - startTime;
        const progress = Math.min(1, elapsed / duration);

        bookSliderFunny.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            bookSliderFunny.scrollLeft = targetScrollLeft;
        }
    }

    requestAnimationFrame(step);
}

prevBookFunnyButton.addEventListener('click', function () {
    smoothScrollFunny(bookSliderFunny.scrollLeft - 300, 500);
});

nextBookFunnyButton.addEventListener('click', function () {
    smoothScrollFunny(bookSliderFunny.scrollLeft + 300, 500);
});


const prevBookFFButton = document.querySelector('.prev-book-ff');
const nextBookFFButton = document.querySelector('.next-book-ff');
const bookSliderFF = document.querySelector('.book-slider-ff'); // Definisikan elemen bookSlider untuk buku tentang keluarga dan persahabatan

function smoothScrollFF(targetScrollLeft, duration) {
    const startScrollLeft = bookSliderFF.scrollLeft;
    const startTime = performance.now();

    function step(time) {
        const elapsed = time - startTime;
        const progress = Math.min(1, elapsed / duration);

        bookSliderFF.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * progress;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            bookSliderFF.scrollLeft = targetScrollLeft;
        }
    }

    requestAnimationFrame(step);
}

prevBookFFButton.addEventListener('click', function () {
    smoothScrollFF(bookSliderFF.scrollLeft - 300, 500);
});

nextBookFFButton.addEventListener('click', function () {
    smoothScrollFF(bookSliderFF.scrollLeft + 300, 500);
});



//-------------------------------------------------------------------------------------
    // Fungsi untuk menampilkan pop-up buku
    function showBookPopup(imageSrc, title, author, info, halaman, bookUrl, ilustrator, kategori, originalURL, lisensi, baca) {
        document.getElementById('popupBookImage').src = imageSrc;
        document.getElementById('popupBookTitle').innerText = title;
        document.getElementById('popupBookAuthor').innerText = author;
        document.getElementById('popupBookInfo').innerText = info;
        document.getElementById('popupBookHalaman').innerText = halaman; // Update jumlah halaman
        document.getElementById('popupIlustrator').innerText = ilustrator; // Update ilustrator
        document.getElementById('popupKategori').innerText = kategori; // Update kategori
        document.getElementById('popupOriginalURL').href = originalURL; // Update URL asli
        document.getElementById('popupLisensi').innerText = lisensi; // Update lisensi
        document.getElementById('popupBookPage').href = baca; // Update href

        // Set URL buku untuk tombol "Baca" dan "Download"
        if (bookUrl) {
            document.querySelector('.read-button').setAttribute('href', bookUrl);
            document.querySelector('.download-button').setAttribute('onclick', 'downloadBook(\'' + bookUrl + '\')');
        }

        document.getElementById('popupContainer').style.display = 'block';
    }

    // Fungsi untuk menutup pop-up 
    function closePopup() {
        console.log('Closing popup');
        document.getElementById('popupContainer').style.display = 'none';
    }

    // Menangani klik pada sampul buku
    var bookCovers = document.querySelectorAll('.book-cover img');

    bookCovers.forEach(function (cover) {
        cover.addEventListener('click', function () {
            var parentBook = this.closest('.book');
            var title = parentBook.querySelector('.book-title').innerText;
            var author = parentBook.getAttribute('data-author');
            var info = parentBook.getAttribute('data-info');
            var imageSrc = this.src;
            var halaman = parentBook.getAttribute('data-halaman');
            var ilustrator = parentBook.getAttribute('data-ilustrator');
            var kategori = parentBook.getAttribute('data-kategori');
            var originalURL = parentBook.getAttribute('data-url');
            var lisensi = parentBook.getAttribute('data-lisensi');
            var baca = parentBook.getAttribute('data-page');

            showBookPopup(imageSrc, title, author, info, halaman, null, ilustrator, kategori, originalURL, lisensi, baca);
        });
    });

    // Menangani tombol X pada popup
    document.getElementById('closePopupButton').addEventListener('click', closePopup);
    

});
