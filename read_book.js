document.addEventListener('DOMContentLoaded', function () {
    // Ambil nilai parameter URL untuk mendapatkan URL buku
    const urlParams = new URLSearchParams(window.location.search);
    const urlBuku = urlParams.get('url');

    // Pastikan parameter URL buku ada sebelum mencoba menampilkan
    if (urlBuku) {
        // Gunakan URL buku untuk menampilkan buku dalam PDF Viewer
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = urlBuku;
    } else {
        // Jika tidak ada parameter URL buku, berikan pesan kesalahan atau tindakan yang sesuai
        console.error('Parameter URL buku tidak ditemukan.');
        // Atau lakukan tindakan lainnya, seperti menampilkan pesan kesalahan kepada pengguna
    }
});
