
        const menuIcon = document.querySelector('.menu-icon');
        const nav = document.querySelector('nav');
    
        menuIcon.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    
        function closeMenu() {
            nav.classList.remove('active');
        }
    
        // JavaScript for changing text dynamically
        const roles = ["Customer Service Specialist", "Project Manager", "Business Owner", "Personal Trainer","Tech Support Specialist"];
        let index = 0;
    
        function changeText() {
            const heroText = document.querySelector('.roles');
            heroText.textContent = roles[index];
            index = (index + 1) % roles.length;
            setTimeout(changeText, 2000);
        }
    
        // Start the text changing after the page loads
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(changeText, 2000);
        });
    
        // Close the mobile menu when a link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
  