// Ambil konten navbar dari navbar.html
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Tandai tautan "Beranda" sebagai aktif
        document.querySelector('a[href="bukusaya.html"]').classList.add('active');
    });

// Ambil elemen-elemen ikon
const iconBox = document.getElementById('icon-box');
const iconBook = document.getElementById('icon-book');
const iconHeart = document.getElementById('icon-heart');

// Ambil kontainer buku
const bookListContainers = document.querySelectorAll('.book-list');

// Simpan informasi ikon yang sedang aktif
let activeIcon = iconBox;

// Atur ikon kotak sebagai aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Aktifkan efek hover pada ikon kotak
    iconBox.classList.add('active');

    // Tampilkan kontainer buku Kotak
    document.querySelector('.book-list[data-type="Kotak"]').style.display = 'block';

    // Setel ikon kotak sebagai aktif
    setActiveIcon(iconBox);
});


// Sembunyikan semua kontainer buku kecuali kontainer kotak saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    bookListContainers.forEach(container => {
        if (container.dataset.type !== 'Kotak') {
            container.style.display = 'none';
        }
    });
});

// Atur fungsi untuk menampilkan kontainer buku yang sesuai saat ikon diklik
iconBox.addEventListener('click', () => {
    // Sembunyikan semua kontainer buku yang aktif saat ini
    hideActiveBookList();

    // Tampilkan kontainer buku Kotak
    document.querySelector('.book-list[data-type="Kotak"]').style.display = 'block';

    // Setel ikon kotak sebagai aktif
    setActiveIcon(iconBox);
});

iconBook.addEventListener('click', () => {
    // Sembunyikan semua kontainer buku yang aktif saat ini
    hideActiveBookList();

    // Tampilkan kontainer buku Buku Terbuka
    document.querySelector('.book-list[data-type="Buku Terbuka"]').style.display = 'block';

    // Setel ikon buku sebagai aktif
    setActiveIcon(iconBook);
});

iconHeart.addEventListener('click', () => {
    // Sembunyikan semua kontainer buku yang aktif saat ini
    hideActiveBookList();

    // Tampilkan kontainer buku Favorit
    document.querySelector('.book-list[data-type="Favorit"]').style.display = 'block';

    // Setel ikon hati sebagai aktif
    setActiveIcon(iconHeart);
});

// Fungsi untuk menyembunyikan semua kontainer buku yang aktif saat ini
function hideActiveBookList() {
    bookListContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// Fungsi untuk menandai ikon yang sedang aktif dan menambahkan efek hover hanya setelah ikon diklik
function setActiveIcon(icon) {
    // Hapus kelas 'active' dari ikon yang sebelumnya aktif
    activeIcon.classList.remove('active');

    // Tandai ikon yang baru sebagai aktif
    icon.classList.add('active');

    // Simpan ikon yang baru sebagai ikon yang sedang aktif
    activeIcon = icon;
}
