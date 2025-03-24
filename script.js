// script.js

// Theme toggle (dark mode)
const toggleButton = document.getElementById('theme-toggle');
toggleButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Modal open buttons
document.querySelectorAll('.modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Modal close buttons
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    const modalId = span.getAttribute('data-close');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Close modals by clicking outside the modal content
window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// Contact form handler (only applies to contact.html)
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});

// News page JSON rendering (only if present)
const newsData = [
  {
    title: "March Screening Announced",
    date: "2025-03-22",
    content: "Join us for a weekend marathon of Studio Ghibli classics."
  },
  {
    title: "Director Q&A",
    date: "2025-03-18",
    content: "Award-winning director Ava Greene will join us for a live Q&A after the showing of her latest film."
  },
  {
    title: "New Membership Perks",
    date: "2025-03-15",
    content: "Members now get discounts at select local theaters and free popcorn on movie nights!"
  }
];

const newsFeed = document.getElementById("news-feed");
if (newsFeed) {
  newsData.forEach(item => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";
    newsItem.innerHTML = `<h3>${item.title}</h3><p><em>${item.date}</em></p><p>${item.content}</p>`;
    newsFeed.appendChild(newsItem);
  });
}
