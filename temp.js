window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar-bottom');
    if (window.scrollY > 50) {
      navbar.classList.add('stic');
    } else {
      navbar.classList.remove('stic');
    }
  });
