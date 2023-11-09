// Ambil konten navbar dari navbar.html
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

// Tandai tautan "Beranda" sebagai aktif
document.querySelector('a[href="bukusaya.html"]').classList.add('active');
});