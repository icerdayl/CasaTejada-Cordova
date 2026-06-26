const navbar = document.getElementById('navbar');
const logo = document.querySelector('.logoText');

window.addEventListener('scroll', () => {

    const navLinks = document.querySelectorAll('#navbar a');

    if (window.scrollY > 50) {

        navbar.classList.add('bg-white', 'shadow-lg');

        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-800');
        });

        if (logo) {
            logo.classList.remove('text-white');
            logo.classList.add('text-gray-800');
        }

    } else {

        navbar.classList.remove('bg-white', 'shadow-lg');

        navLinks.forEach(link => {
            link.classList.remove('text-gray-800');
            link.classList.add('text-white');
        });

        if (logo) {
            logo.classList.remove('text-gray-800');
            logo.classList.add('text-white');
        }

    }

});