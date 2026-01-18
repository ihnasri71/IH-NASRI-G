// Minimal JS for nav toggle, copy email and year
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const yearSpan = document.getElementById('year');
  const copyEmailBtn = document.getElementById('copy-email');
  const emailLink = document.getElementById('email-link');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (copyEmailBtn && emailLink) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailLink.href.replace('mailto:', ''));
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => (copyEmailBtn.textContent = 'Copy Email'), 2000);
      } catch (e) {
        window.alert('Copy your email: ' + emailLink.href.replace('mailto:', ''));
      }
    });
  }

  // Basic client-side form fallback: if Formspree not configured, open mail client
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      if (contactForm.action.includes('formspree.io') && contactForm.action.includes('your-form-id')) {
        // default sample action left in place; let user configure
        e.preventDefault();
        alert('Please configure Formspree action URL in the form tag or send email directly.');
      }
    });
  }
});