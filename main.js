const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', ev => {
    ev.preventDefault();
});

const controlElements = signupForm.querySelectorAll('.form__control');
controlElements.forEach( control => {
    const input = control.querySelector('input');
    input.addEventListener('blur', () => {
        if (validateEmpty(input)) {
            showInvalidControl(control, `${input.getAttribute('placeholder')} cannot be empty`);
        } else {
            if (input.checkValidity()) {
                showValidControl(control);
            } else {
                showInvalidControl(control, input.getAttribute('title'));
            }
        }
    });
} );

function showInvalidControl(control, errorMsg) {
    const small = control.querySelector('small');
    control.classList.remove('valid');
    control.classList.add('invalid');
    small.innerText = errorMsg;
}

function showValidControl(control) {
    control.classList.remove('invalid');
    control.classList.add('valid');
}

const validateEmpty = ({ value }) => value.trim() === '';