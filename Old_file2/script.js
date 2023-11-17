document.addEventListener('DOMContentLoaded', function () {

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Services Section - Modal Pop-up Logic
  const services = document.querySelectorAll('.service');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.close-modal');

  services.forEach(service => {
      service.addEventListener('click', () => {
          modal.style.display = 'block';
      });
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if(e.target == modal) {
          modal.style.display = 'none';
      }
  });

  // Testimonial Section - Carousel Logic
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  const prevBtn = document.querySelector('.prev-testimonial');

  function showTestimonial(index) {
      testimonials.forEach((testimonial, idx) => {
          testimonial.style.display = idx === index ? 'block' : 'none';
      });
  }

  nextBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
  });

  prevBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
  });

  showTestimonial(currentTestimonial); // Initialize first testimonial

  // Parallax effect for the Services section background
  const serviceSection = document.querySelector('#services');
  serviceSection.addEventListener('mousemove', function (e) {
      const { offsetX, offsetY, clientWidth, clientHeight } = e;
      
      const xPos = (offsetX / clientWidth) - 0.5;
      const yPos = (offsetY / clientHeight) - 0.5;
      
      const layers = document.querySelectorAll('.service-bg-layer');
      layers.forEach(layer => {
          const speed = layer.dataset.speed || 1;
          const xMove = xPos * speed * 40;
          const yMove = yPos * speed * 40;
          layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
  });
});
