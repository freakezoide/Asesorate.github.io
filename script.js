document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Cierra el menú si se hace clic en un enlace
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
});