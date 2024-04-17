$(document).ready(function() {
  // Smooth scroll to about section when "Get Started" button is clicked
  $('.btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800 
      );
    }
  });
});
