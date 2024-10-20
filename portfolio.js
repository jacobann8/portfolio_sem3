document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('thankYouMessage').classList.remove('hidden');
    // Optionally, reset the form
    this.reset();
  });
