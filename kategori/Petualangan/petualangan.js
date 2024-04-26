document.addEventListener('DOMContentLoaded', function () {

    // Fungsi untuk menampilkan pop-up buku
    function showBookPopup(imageSrc, title, author, info, halaman, bookUrl, ilustrator, kategori, originalURL, lisensi, baca, download) {
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
        document.getElementById('popupBookDownload').href = download; // Update href

        // Set URL buku untuk tombol "Baca"
        if (bookUrl) {
            document.querySelector('.read-button').setAttribute('href', bookUrl);
        }

        // Set URL unduhan untuk tombol "Download"
        if (download) {
            document.getElementById('popupBookDownload').setAttribute('onclick', 'downloadBook(\'' + download + '\')');
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
            var download = parentBook.getAttribute('data-download'); // Mendapatkan URL unduhan

            showBookPopup(imageSrc, title, author, info, halaman, null, ilustrator, kategori, originalURL, lisensi, baca, download);
        });
    });

    // Menangani tombol X pada popup
    document.getElementById('closePopupButton').addEventListener('click', closePopup);

});
