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
    var linkUrl = 'https://drive.google.com/file/d/1fjEEcIC1cLpidJkT1e1Nx0qV8CEFLO0C/view?usp=drive_link';
    window.open(linkUrl, '_blank');
}