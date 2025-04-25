document.addEventListener("DOMContentLoaded", function () {

    // form Details Send
    document.querySelector(".mailsavbtn").addEventListener("click", async function (event) {

        // Prevent default form submission
        event.preventDefault();

        // Get the form data
        let formData = new FormData(document.getElementById("forminfo"));
        let dataObject = {};

        // Convert form data into a JavaScript object
        formData.forEach((value, key) => {
            dataObject[key] = value;
        });


        // Email Configuration Object
        const emailConfig = {
            SecureToken: "YOUR_SECURE_TOKEN",
            To: "receiver@example.com",
            From: "your-email@example.com",
            Subject: "New Form Submission"
        };

        // Site Configuration Object 
        const siteConfig = {
            siteName: "My Awesome Site",
            siteLogo: "https://example.com/logo.png",
            footerContent: "© 2025 My Awesome Site. All rights reserved.",
            additionalInfo: "Thank you for submitting your details. We will get back to you soon!"
        };


        // Final payload for API request
        const payload = {
            SecureToken: emailConfig.SecureToken,
            To: emailConfig.To,
            From: emailConfig.From,
            Subject: emailConfig.Subject,
            Body: {
                formData: dataObject,
                siteInfo: siteConfig
            },
            IsHtml: false
        };


        // Send data to API using Fetch
        try {
            let apiResponse = await fetch("http://192.168.1.14:9070/Form-Submit-Apps", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            // API Response For Return
            let result = await apiResponse.json();
            console.log("API Response:", result);

            // Check Retun Data
            if (apiResponse.ok) {
                alert("Email successfully sent!");
            } else {
                alert("Error sending email: " + result.message);
            }

        } catch (error) {
            console.error("Error Sending Email:", error);
            alert("Network error while sending email.");
        }
    });
});