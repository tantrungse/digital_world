// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Welcome page enhancement function
function enhanceWelcomePage() {
  console.log('Attempting to enhance welcome page');
  const h1 = document.getElementsByTagName('h1')[0];
  console.log('H1 element found:', h1);
  if (h1 && !h1.textContent.includes('ENHANCED!')) {
    h1.textContent = h1.textContent + ' ENHANCED!';
    console.log('Text content updated to:', h1.textContent);
  }
}

// Try multiple event listeners to ensure it works
document.addEventListener("turbo:load", enhanceWelcomePage);

// Also try a fallback with a small delay
setTimeout(function() {
  console.log('Fallback timer executed');
  enhanceWelcomePage();
}, 100);

