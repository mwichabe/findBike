// Get the form element
const contactForm = document.getElementById('contactForm');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);

  //client-side validation
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  alert('Message submitted successfully!');
});
