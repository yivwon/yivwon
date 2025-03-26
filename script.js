// Add any JavaScript functionality here

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (if needed for responsive design)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
  
  // Download resume functionality
  const downloadButton = document.querySelector('.download-button');
  
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      // Replace with actual resume download logic
      alert('Resume download functionality would go here.');
      // For actual implementation:
      // window.open('path/to/resume.pdf', '_blank');
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
