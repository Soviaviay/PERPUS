document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan referensi ke elemen container buku
    const bookContainer = document.getElementById("book-container");

    // Path dari buku-buku
    const bookPaths = [
        "Buku/Belalai Tiwi.pdf",
        "Buku/Aku Sayang Ibu.pdf",
        "Buku/Bersama Sahabat.pdf",
        // Tambahkan path buku lainnya di sini sesuai kebutuhan
    ];

    // Mendapatkan path buku dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookIndex = parseInt(urlParams.get('bookIndex'));

    // Memastikan index buku valid
    if (!isNaN(bookIndex) && bookIndex >= 0 && bookIndex < bookPaths.length) {
        // Membuat elemen iframe untuk menampilkan buku PDF
        const iframe = document.createElement("iframe");
        iframe.src = bookPaths[bookIndex];
        iframe.width = "100%";
        iframe.height = "600px";
        iframe.frameborder = "0";
        iframe.scrolling = "auto";

        // Menambahkan iframe ke container buku
        bookContainer.appendChild(iframe);
    } else {
        // Menampilkan pesan kesalahan jika index buku tidak valid
        bookContainer.innerHTML = "<p>Book not found.</p>";
    }
});
