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

    // Interactive animations on mouse move in the hero section
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mousemove', function(e) {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;
        
        // Calculate the percentage of the mouse position within the hero section
        const xPos = (offsetX / clientWidth) * 100 - 50;
        const yPos = (offsetY / clientHeight) * 100 - 50;
        
        // Move the background layers based on mouse position
        const layers = document.querySelectorAll('.graphic-layer');
        layers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const xMove = xPos * speed;
            const yMove = yPos * speed;
            
            layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });

    // Testimonial Carousel (if applicable)
    // This part assumes you have buttons with classes .next-testimonial and .prev-testimonial
    // and testimonials wrapped in a container with a class .testimonial-container
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialsContainer = document.querySelector('.testimonial-container');
    const nextBtn = document.querySelector('.next-testimonial');
    const prevBtn = document.querySelector('.prev-testimonial');

    if (testimonialsContainer && nextBtn && prevBtn) {
        const updateTestimonials = () => {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.display = index === currentTestimonial ? 'block' : 'none';
            });
        };

        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonials();
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonials();
        });

        updateTestimonials(); // Initialize the testimonials
    }
});



document.addEventListener('DOMContentLoaded', function () {
    
    // Services Section - Modal Pop-up Logic
    const services = document.querySelectorAll('.service');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');

    services.forEach(service => {
        service.addEventListener('click', () => {
            // Content for modal can be set dynamically based on the service clicked
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

    // Additional scripts for other interactions can be added here...
});



// Enhanced Services Section Interactivity
const services = document.querySelectorAll('.service');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

services.forEach(service => {
    service.addEventListener('click', () => {
        // Content for modal can be set dynamically based on the service clicked
        // For demonstration, we're just showing the modal
        modal.style.display = 'block';
        // You could dynamically populate modal content here based on the service clicked
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Clicking anywhere outside of the modal will also close it
window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});

// Enhanced Testimonial Section Interactivity
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.querySelector('.next-testimonial');
const prevBtn = document.querySelector('.prev-testimonial');

function updateTestimonialVisibility() {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === currentTestimonial ? 'block' : 'none';
    });
}

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonialVisibility();
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonialVisibility();
});

updateTestimonialVisibility(); // Initialize with the first testimonial visible



document.addEventListener('DOMContentLoaded', function () {
    // Parallax effect for the Services section background
    const serviceSection = document.querySelector('#services');
    serviceSection.addEventListener('mousemove', function (e) {
        const { offsetX, offsetY, clientWidth, clientHeight } = e;
        
        // Calculate the percentage of the mouse position within the section
        const xPos = (offsetX / clientWidth) - 0.5;
        const yPos = (offsetY / clientHeight) - 0.5;
        
        // Apply a parallax effect to the background layers
        const layers = document.querySelectorAll('.service-bg-layer');
        layers.forEach(layer => {
            const speed = layer.dataset.speed || 1;
            const xMove = xPos * speed * 40; // Adjust the multiplier for effect strength
            const yMove = yPos * speed * 40; // Adjust the multiplier for effect strength
            layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
});