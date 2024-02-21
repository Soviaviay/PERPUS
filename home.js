document.addEventListener('DOMContentLoaded', function () {
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

    const prevBookButton = document.querySelector('.prev-book');
    const nextBookButton = document.querySelector('.next-book');
    
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

    // Fungsi untuk menutup pop-up
    function closePopup() {
        console.log('Closing popup');
        document.getElementById('popupContainer').style.display = 'none';
    }

    // Fungsi untuk menutup pop-up
    function closePopup() {
        console.log('Closing popup');
        document.getElementById('popupContainer').style.display = 'none';
    }

    // Fungsi untuk menampilkan pop-up dengan informasi buku
    function showBookPopup(imageSrc, title, info) {
        document.getElementById('popupBookImage').src = imageSrc;
        document.getElementById('popupBookTitle').innerText = title;
        document.getElementById('popupBookInfo').innerText = info;
        document.getElementById('popupContainer').style.display = 'block';
    }

    // Menangani klik pada sampul buku
    var bookCovers = document.querySelectorAll('.book-cover img');

    bookCovers.forEach(function (cover) {
        cover.addEventListener('click', function () {
            var parentBook = this.closest('.book');
            var title = parentBook.querySelector('.book-title').innerText;
            var info = parentBook.getAttribute('data-info');
            var imageSrc = this.src;

            showBookPopup(imageSrc, title, info);
        });
    });

    // Menangani tombol X pada popup
    document.getElementById('closePopupButton').addEventListener('click', closePopup);
});
