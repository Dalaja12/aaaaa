document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para mostrar la imagen primero

    const average = parseFloat(document.getElementById('average').value);
    const school = document.getElementById('school').value;

    const passDirectImage = document.getElementById('pass-direct');
    const noPassDirectImage = document.getElementById('no-pass-direct');

    // Resetear visibilidad de imágenes
    passDirectImage.style.display = 'none';
    noPassDirectImage.style.display = 'none';

    if ((average <= 7.9 && school === 'Otro') || (average >= 8.0 && school === 'Otro') || (average <= 7.9 && school !== 'Otro')) {
        noPassDirectImage.style.display = 'block';
    } else if (average >= 8.0 && school !== 'Otro') {
        passDirectImage.style.display = 'block';
    }

    // Luego puedes decidir si enviar el formulario automáticamente o esperar una interacción del usuario
    // this.submit(); // Enviar formulario
});

// Mostrar campo de texto para 'Otro' bachillerato
const schoolSelect = document.getElementById('school');
schoolSelect.addEventListener('change', function() {
    const schoolTextInput = document.getElementById('school-text');
    if (schoolSelect.value === 'Otro') {
        schoolTextInput.style.display = 'block';
        schoolTextInput.setAttribute('required', 'required');
    } else {
        schoolTextInput.style.display = 'none';
        schoolTextInput.removeAttribute('required');
    }
});
