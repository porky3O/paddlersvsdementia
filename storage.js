document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        };

        saveFormData(formData);
        redirectToHomePage(); // Add this line to redirect after submission
    });

    function saveFormData(data) {
        // Save data to Local Storage
        localStorage.setItem('formData', JSON.stringify(data));
        alert('Form data has been saved.');
    }
    
    function redirectToHomePage() {
        // Redirect to the home page
        window.location.href = 'index.html';
    }
});