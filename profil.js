// Ambil konten navbar dari navbar.html
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

// Tandai tautan "Profil" sebagai aktif
document.querySelector('a[href="profil.html"]').classList.add('active');
});