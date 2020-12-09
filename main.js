const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', ev => {
    ev.preventDefault();
    validateForm();
});

function validateForm() {
    const controlElements = signupForm.querySelectorAll('.form__control');
    controlElements.forEach( control => {
        const input = control.querySelector('input');
        const small = control.querySelector('small');
        if (validateEmpty(input)) {
            control.classList.remove('valid');
            control.classList.add('invalid');
            small.innerText = `${input.getAttribute('placeholder')} cannot be empty`;
        } else {
            if (input.checkValidity()) {
                control.classList.remove('invalid');
                control.classList.add('valid');
            } else {
                control.classList.remove('valid');
                control.classList.add('invalid');
                small.innerText = input.getAttribute('title');
            }
        }
    } )
}

const validateEmpty = ({ value }) => value.trim() === '';