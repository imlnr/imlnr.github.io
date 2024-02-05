document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navigation-bar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

function closeNavbar() {
    $('.navbar-collapse').collapse('hide');
}

function openLinkInNewTab() {
    var linkUrl = 'https://drive.google.com/file/d/1FkEUeiVucUvG6f32Ob7RRw5N7ixcZmuV/view?usp=sharing';
    window.open(linkUrl, '_blank');
}