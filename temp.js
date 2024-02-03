window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const textToType = 'Full Stack Developer..';

    let charIndex = 0;

    function type() {
        textElement.textContent = textToType.slice(0, charIndex);
        charIndex++;

        if (charIndex <= textToType.length) {
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        }
    }

    type();
});
