fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        if (!document.getElementById('navbar-container').innerHTML.trim()) {
            document.getElementById('navbar-container').innerHTML = data;
            
            let navbarToggler = document.querySelector('.navbar-toggler');
            let popupMenu = document.querySelector('.popup-menu');

            navbarToggler.addEventListener('click', function (event) {
                event.preventDefault();
                popupMenu.classList.toggle('show');
            });

            // Event listener untuk menutup menu popup saat dokumen diklik di luar menu
            document.addEventListener('click', function (event) {
                if (!event.target.matches('.navbar-toggler') && !popupMenu.contains(event.target)) {
                    popupMenu.classList.remove('show');
                }
            });
        }
    });
