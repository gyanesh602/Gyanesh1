// ----------- Instagram Redirect -----------
const instagramBtn = document.getElementById('instagramBtn');
const instaIcon = document.getElementById('instaIcon');

instagramBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/gyanesh_pandey_888/?hl=en', '_blank');
});

instaIcon.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.instagram.com/gyanesh_pandey_888/?hl=en', '_blank');
});

// ----------- WhatsApp Redirect -----------
const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappBtn2 = document.getElementById('whatsappBtn2');

function openWhatsApp() {
    const phoneNumber = '+9115098509'; // replace with your number
    const message = encodeURIComponent('Hello! I want to work with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

whatsappBtn.addEventListener('click', openWhatsApp);
whatsappBtn2.addEventListener('click', openWhatsApp);

// ----------- Send Email -----------
const sendEmailBtn = document.getElementById('sendEmail');

sendEmailBtn.addEventListener('click', () => {
    window.location.href = 'thirtypandey@gmail.com?subject=Project%20Inquiry&body=Hello!';
});

// ----------- Scroll to Portfolio Section -----------
const scrollPortfolioBtn = document.getElementById('scrollPortfolio');
const seeMyWorkBtn = document.getElementById('seeMyWork');
const projectsSection = document.getElementById('projects');

function scrollToProjects() {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

scrollPortfolioBtn.addEventListener('click', scrollToProjects);
seeMyWorkBtn.addEventListener('click', scrollToProjects);

// ----------- Send Message (Contact Section) -----------
const sendMessageBtn = document.getElementById('sendMessage');
sendMessageBtn.addEventListener('click', () => {
    window.location.href = 'contact.html';
});

// ----------- Navbar Home Logo Scroll -----------
const logoHome = document.getElementById('logoHome');
const navHome = document.getElementById('navHome');

logoHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

navHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----------- Footer Links -----------
const footerHome = document.getElementById('footerHome');
const footerProjects = document.getElementById('footerProjects');

footerHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

footerProjects.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToProjects();
});
