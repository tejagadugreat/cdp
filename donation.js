// scripts.js
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
        .then((response) => {
            alert('Donation details sent successfully!');
            // Reset the form
            this.reset();
        }, (error) => {
            alert('Failed to send donation details. Please try again later.');
        });
});
