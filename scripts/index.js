const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        const opened = navLinks.classList.toggle('show');     // show/hide panel
        menuToggle.classList.toggle('active', opened);

        // toggle icon
        if (opened) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';            // prevent background scroll
        } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';                  // restore scroll
        }
    });

    // Optional: close panel when a nav link is clicked (common mobile behaviour)
    document.querySelectorAll('.list-element .list').forEach(link => {
        link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
        });
    });