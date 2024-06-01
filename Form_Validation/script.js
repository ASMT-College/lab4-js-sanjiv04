function validateEmail(email) {
    let pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
    return pattern.test(email);
}

function validateForm() {
    let email = document.getElementById("email").value;
    let email_error_text = document.getElementById("email_error_text");
    if (validateEmail(email)) {
        email_error_text.style.display = "none";
        return true;
    }
    email_error_text.style.display = "block";
    return false;
}