
# Frontend-GPT
OpenAI released their build GPT. I created Frontend-GPT and this is the website it created.

<h1>Prompt</h1>

```
## Objective
Create a dynamic, responsive landing page for a hypothetical tech conference using only HTML, CSS, and JavaScript.

## Requirements

### Design
The landing page should have a modern and clean UI/UX design. It should be fully responsive and work seamlessly on different devices (desktop, tablet, mobile).

### Navigation Bar
Include a sticky navigation bar at the top with links to different sections of the page.

### Hero Section
This section should have a catchy headline, a brief description of the conference, and a call-to-action (CTA) button for registration.

### About Section
This section should provide more details about the conference, such as the purpose, topics to be covered, target audience, etc.

### Speakers Section
Dynamically render a list of speakers from a JSON object. Each speaker’s card should include their photo, name, title, a brief bio, and links to their social media profiles.

### Schedule Section
Display the schedule of the conference. The schedule should be collapsible by day to enhance the user experience.

### Registration Form
Include a form for attendees to register for the conference. Use JavaScript for form validation to ensure all fields are filled out correctly before submission.

### Testimonials Section
Show testimonials from previous attendees. These testimonials could be statically coded or dynamically loaded from a JSON object.

### Footer
The footer should include links to social media, contact information, and any other relevant links.

### Bonus Challenges

- Animations: Use CSS animations to enhance the user experience, such as smooth scrolling, fade-in effects, etc.
- Dark Mode: Add a toggle for users to switch between light and dark modes.
- Performance: Optimize the page for performance. Aim for high scores in performance audits (e.g., Lighthouse).
```


<h1>Content</h1>

```
### About
This section should introduce your event and its purpose, as well as highlight the main benefits and features for the attendees. You can also mention the theme, format, and duration of the event. For example:

> Join us for an exciting and informative event on the latest trends and innovations in the field of artificial intelligence. This event will feature expert speakers, interactive workshops, and networking opportunities. Whether you are a beginner or a professional, you will find something valuable and inspiring at this event. Learn from the best, connect with peers, and discover new opportunities in AI.

### Speakers
This section should showcase the speakers and their credentials, as well as their topics and session details. You can also include their photos, bios, and social media links. For example:

| Photo | Name | Title | Bio | Session | Social Media |
| ----- | ---- | ----- | --- | ------- | ------------ |
| ![Dr. Jane Smith](^4^) | Dr. Jane Smith | Professor of Computer Science at the University of Wisconsin-Madison and Director of the Center for AI Research | Dr. Smith is a leading researcher and educator in the field of AI. She has published over 100 papers and books on various topics related to AI, such as machine learning, natural language processing, computer vision, and robotics. She has also received numerous awards and honors for her contributions to the field. | Keynote speech: The current state and future directions of AI research and education | [Twitter](^5^) [LinkedIn] |
| ![Mr. John Doe] | Mr. John Doe | Founder and CEO of AI Solutions | Mr. Doe is an entrepreneur and innovator who has founded and led several successful companies that provide AI solutions and services to various industries, such as healthcare, finance, education, and entertainment. He has also been involved in several social and philanthropic initiatives that leverage AI for social good. | Workshop: How to apply AI to solve real-world problems and challenges | [Facebook] [Website] |
| ![Ms. Mary Lee] | Ms. Mary Lee | Senior Data Scientist at Google and Co-author of the bestselling book “AI for Everyone” | Ms. Lee is a data science expert and a popular author who has written and co-written several books on AI, such as “AI for Everyone”, “AI for Business”, and “AI for Kids”. She has also given several talks and presentations on the ethical and social implications of AI and how to ensure its responsible and fair use. | Panel discussion: The ethical and social implications of AI and how to ensure its responsible and fair use | [Instagram] [Blog] |

### Schedule
This section should provide a clear and detailed overview of the event agenda, including the date, time, location, and format of each session. You can also include a registration link, a contact information, and a FAQ section. For example:

| Date | Time | Location | Session |
| ---- | ---- | -------- | ------- |
| Monday, November 13, 2023 | 9:00 AM - 10:00 AM | Main Hall | Opening ceremony and welcome speech |
| Monday, November 13, 2023 | 10:00 AM - 11:00 AM | Main Hall | Keynote speech by Dr. Jane Smith |
| Monday, November 13, 2023 | 11:00 AM - 12:00 PM | Breakout Rooms | Workshop sessions by various speakers |
| Monday, November 13, 2023 | 12:00 PM - 1:00 PM | Cafeteria | Lunch break and networking |
| Monday, November 13, 2023 | 1:00 PM - 2:00 PM | Main Hall | Panel discussion by Ms. Mary Lee and other speakers |
| Monday, November 13, 2023 | 2:00 PM - 3:00 PM | Breakout Rooms | Workshop sessions by various speakers |
| Monday, November 13, 2023 | 3:00 PM - 4:00 PM | Main Hall | Closing remarks and feedback |

To register for the event, please fill out this [form]. If you have any questions or concerns, please contact us at [email] or [phone]. For more information, please visit our [website].
```
