function toggleInput() {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    if (emailInput.value) {
        phoneInput.disabled = true;
    } else {
        phoneInput.disabled = false;
    }
    if (phoneInput.value) {
        emailInput.disabled = true;
    } else {
        emailInput.disabled = false;
    }
}