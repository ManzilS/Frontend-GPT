// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Speakers Data (Sample JSON Object)
const speakers = [
  {
    name: "Dr. Jane Smith",
    title: "AI Research Pioneer",
    bio: "Leading AI research and innovation for the past decade.",
    imageUrl: "https://thispersondoesnotexist.com/",
    socials: {
      linkedin: "linkedin.com",
      twitter: "twitter.com"
    }
  },
  // Add more speaker objects...
];

// Function to Render Speakers
function renderSpeakers(speakersData) {
  const speakersContainer = document.querySelector('#speakers .container');
  speakersContainer.innerHTML = speakersData.map(speaker => `
    <div class="speaker-card">
      <img src="${speaker.imageUrl}" alt="${speaker.name}" class="img-responsive">
      <h3>${speaker.name}</h3>
      <p>${speaker.title}</p>
      <p>${speaker.bio}</p>
      <div>
        <a href="${speaker.socials.linkedin}" aria-label="LinkedIn">LinkedIn</a>
        <a href="${speaker.socials.twitter}" aria-label="Twitter">Twitter</a>
      </div>
    </div>
  `).join('');
}

// Initialize Speakers
renderSpeakers(speakers);

// Form Validation
const form = document.getElementById('registration-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Form validation logic here...
  console.log('Form submitted');
});

// Schedule Collapsible
const scheduleItems = document.querySelectorAll('#schedule .day-schedule');
scheduleItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    // Logic to show/hide details...
  });
});

// Dark Mode Toggle (if applicable)
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  // Additional logic for toggling dark mode...
});
