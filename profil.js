// Deklarasikan variabel editProfileBtn di luar dari event listener
let editProfileBtn;

// Ambil konten navbar dari navbar.html
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Tandai tautan "Profil" sebagai aktif
        document.querySelector('a[href="profil.html"]').classList.add('active');
    });

// Menambahkan gambar-gambar profil ke dalam modal
const profileImages = [
    'file/profil/profil1.png',
    'file/profil/profil2.png',
    'file/profil/profil3.png',
    'file/profil/profil4.png',
    'file/profil/profil5.png',
    'file/profil/profil6.png',
    'file/profil/profil7.png',
    'file/profil/profil8.png',
    'file/profil/profil9.png',
    'file/profil/profil11.png',
    'file/profil/profil12.png',
    'file/profil/profil13.png',
    'file/profil/profil14.png',
    'file/profil/profil15.png',
    'file/profil/profil16.png',
    'file/profil/profil17.png',
    'file/profil/profil18.png',
    'file/profil/profil19.png',
    'file/profil/profil20.png',
    'file/profil/profil21.png'
];

const profileImagesContainer = document.querySelector('.profile-images');
profileImages.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('profile-image-option');
    profileImagesContainer.appendChild(img);
});

// Tampilkan modal saat tombol "Ubah Profil" diklik
editProfileBtn = document.getElementById('edit-profile-btn');
const modal = document.getElementById('profile-modal');

editProfileBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Sembunyikan modal saat tombol "Batal" diklik atau saat area di luar modal diklik
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none';
});

// Tambahkan kelas 'selected' ketika gambar profil diklik
profileImagesContainer.addEventListener('click', function(event) {
    const clickedImage = event.target;
    
    // Hapus kelas 'selected' dari semua gambar
    const allImages = document.querySelectorAll('.profile-image-option');
    allImages.forEach(image => {
        image.classList.remove('selected');
    });
    
    // Tambahkan kelas 'selected' pada gambar yang diklik
    clickedImage.classList.add('selected');
});

// Periksa apakah data profil sudah ada di localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const storedName = localStorage.getItem('profileName');
    const storedImage = localStorage.getItem('profileImage');

    if (storedName && storedImage) {
        // Tampilkan pesan selamat datang dengan nama yang disimpan
        document.querySelector('.profil-text').innerHTML = `<p>Selamat Datang, ${storedName}!</p>`;
        
        // Tampilkan gambar profil yang disimpan
        document.querySelector('.profile-image img').src = storedImage;
        
        // Tampilkan tombol "Ubah Profil" dan "Hapus Profil"
        document.getElementById('edit-profile-btn').style.display = 'inline-block';
        document.getElementById('delete-profile-btn').style.display = 'inline-block';
        
        // Sembunyikan tombol "Buat Profil"
        document.getElementById('create-profile-btn').style.display = 'none';
        
        // Ganti teks tombol "Buat Profil" menjadi "Ubah Profil"
        editProfileBtn.textContent = 'Ubah Profil';
    } else {
        // Tampilkan pesan awal untuk membuat profil
        document.querySelector('.profil-text').innerHTML = `<p>Selamat Datang di Halaman Profil!</p>`;
        
        // Ganti teks tombol "Ubah Profil" menjadi "Buat Profil"
        editProfileBtn.textContent = 'Buat Profil';
    }
});

// Aksi saat tombol "Simpan" pada modal diklik
document.getElementById('save-profile').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const selectedImage = document.querySelector('.profile-image-option.selected').src;

    // Simpan data profil ke localStorage
    localStorage.setItem('profileName', name);
    localStorage.setItem('profileImage', selectedImage);

    // Tampilkan pesan selamat datang dengan nama yang dimasukkan
    document.querySelector('.profil-text').innerHTML = `<p>Selamat Datang, ${name}!</p>`;

    // Tampilkan gambar profil yang dipilih
    document.querySelector('.profile-image img').src = selectedImage;

    // Tampilkan tombol "Ubah Profil" dan "Hapus Profil"
    editProfileBtn.style.display = 'inline-block';
    deleteProfileBtn.style.display = 'inline-block';

    // Ganti teks tombol "Buat Profil" menjadi "Ubah Profil"
    editProfileBtn.textContent = 'Ubah Profil';

    // Tutup modal
    modal.style.display = 'none';
});

// Tambahkan event listener untuk tombol "Hapus Profil"
const deleteProfileBtn = document.getElementById('delete-profile-btn');
deleteProfileBtn.addEventListener('click', function() {
    if (confirm("Apakah Anda yakin ingin menghapus profil?")) {
        // Hapus data profil dari localStorage
        localStorage.removeItem('profileName');
        localStorage.removeItem('profileImage');

        // Kembali ke halaman awal buat profil
        window.location.href = 'profil.html';
    }
});
