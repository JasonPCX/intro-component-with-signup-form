const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', ev => {
    ev.preventDefault();
});

const controlElements = signupForm.querySelectorAll('.form__control');
controlElements.forEach( control => {
    const input = control.querySelector('input');
    const errorSmall = control.querySelector('small');
    let errorMsg = '';
    input.addEventListener('blur', () => {
        if (validateEmpty(input)) {
            showInvalidControl(control);
            errorMsg = `${input.getAttribute('placeholder')} cannot be empty`;
        } else {
            if (input.checkValidity()) {
                showValidControl(control);
            } else {
                showInvalidControl(control);
                errorMsg = input.getAttribute('title');
            }
        }
        errorSmall.textContent = errorMsg;
    });
} );

function showInvalidControl(control) {
    control.classList.remove('valid');
    control.classList.add('invalid');
}

function showValidControl(control) {
    control.classList.remove('invalid');
    control.classList.add('valid');
}

const validateEmpty = ({ value }) => value.trim() === '';