const triggers = document.querySelectorAll('.menu-trigger');

if (triggers.length > 0) {
    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {

            const parentMenu = trigger.closest('.mega-content');

            parentMenu.querySelectorAll('.menu-trigger').forEach(t => t.classList.remove('active'));
            parentMenu.querySelectorAll('.mega-grid').forEach(g => g.classList.remove('active'));

            trigger.classList.add('active');

            const targetId = trigger.getAttribute('data-target');
            const targetGrid = document.getElementById(targetId);

            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
}


// input validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from reloading
        
        // 1. Reset previous errors
        resetErrors();
        let isValid = true;

        // 2. Validate Name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === "") {
            setError(nameInput, "Name cannot be empty");
            isValid = false;
        }

        // 3. Validate Email
        const emailInput = document.getElementById('email');
        if (!validateEmail(emailInput.value)) {
            setError(emailInput, "Please enter a valid email address");
            isValid = false;
        }

        // 4. Validate Subject
        const subjectInput = document.getElementById('subject');
        if (subjectInput.value === "") {
            setError(subjectInput, "Please select a subject");
            isValid = false;
        }

        // 5. Validate Message
        const msgInput = document.getElementById('message');
        if (msgInput.value.trim() === "") {
            setError(msgInput, "Message cannot be empty");
            isValid = false;
        }

        // 6. Success State
        if (isValid) {
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // Show loading state
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            // Simulate sending delay (1.5 seconds)
            setTimeout(() => {
                form.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                successMsg.classList.add('show');
                
                // Hide success message after 4 seconds
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 4500);
            }, 1500);
        }
    });

    // Helper: Set Error Class
    function setError(input, message) {
        const group = input.parentElement;
        const msgSpan = group.querySelector('.error-msg');
        
        group.classList.add('error');
        msgSpan.innerText = message;
    }

    // Helper: Reset all errors
    function resetErrors() {
        const groups = document.querySelectorAll('.input-group');
        groups.forEach(group => group.classList.remove('error'));
        successMsg.classList.remove('show');
    }

    // Helper: Email Regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});