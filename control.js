let correo = document.getElementById('correo');
let clave = document.getElementById('clave');

function check() {
    if (correo.value === '' || clave.value === '') {
    alert('Ambos campos son obligatorios') 
    } else if (correo.value.match(/[@]/)) {
    return true
    } else {
        alert('Falta el arroba en el usuario')
    }
}