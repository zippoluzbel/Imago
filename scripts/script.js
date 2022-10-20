// Validacion Formulario

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const errorElement = document.getElementById('error')



formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('correcto')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('correcto');
    inputControl.classList.remove('error');
};


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidTelefono = telefono => {
    const re = /^\d{7,14}$/ //
    return re.test(telefono)

}



const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();

    if(nombreValue === '') {
        setError(nombre, 'Es requerido completar el campo Nombre Completo');
    } else {
        setSuccess(nombre);
    }

    if(emailValue === '') {
        setError(email, 'Debe ingresar una direccion de mail');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Ingresar una direccion de mail valida');
    } else {
        setSuccess(email);
    }

    if(telefonoValue === '') {
        setError(telefono, 'Debe ingresar un telefono');
    } else if (!isValidEmail(telefonoValue)) {
        setError(telefono, 'Ingresar un telefono valido');
    } else {
        setSuccess(telefono);
    }
 
};




// Api ReCaptcha //

var myForm = $('my-form');

function submitMyForm () {
    myForm.trigger('submit', [true]);
}

$(function () {
    myForm.on('submit', function (e, skipRecaptcha) {
        if(skipRecaptcha) {
            return;
        }

        e.preventDefault();
        grecaptcha.execute();
    });
  })

