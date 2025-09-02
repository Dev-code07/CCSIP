
        const toggleMenu = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        // toggleMenu.addEventListener('click', () => {
        //     mobileMenu.classList.toggle('hidden');
        // });

        function toggleSubmenu(id) {
            const submenu = document.getElementById('submenu-' + id);
            submenu.classList.toggle('hidden');
        }
 