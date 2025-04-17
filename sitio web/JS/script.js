// Guardar datos en localStorage al enviar el formulario (solo si existe el form)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
        // Recuperar los datos actuales
        const datos = JSON.parse(localStorage.getItem('datos')) || [];
        datos.push({ nombre, email, asunto, mensaje });
        localStorage.setItem('datos', JSON.stringify(datos));
        form.reset();
    });
}

// Mostrar datos en bloques en datosForm.html
function mostrarDatos() {
    const datos = JSON.parse(localStorage.getItem('datos')) || [];
    const datosForm = document.getElementById('datosForm');
    if (!datosForm) return;
    datosForm.innerHTML = '';
    if (datos.length === 0) {
        datosForm.innerHTML = '<p style="text-align:center;color:#888;">No hay datos para mostrar.</p>';
        return;
    }
    datos.forEach((dato, index) => {
        const div = document.createElement('div');
        div.classList.add('usuario-bloque');
        div.innerHTML = `
            <h3 class="usuario-titulo">Usuario ${index + 1}</h3>
            <div class="usuario-datos">
                <strong>Nombre:</strong> ${dato.nombre}<br>
                <strong>Email:</strong> ${dato.email}<br>
                <strong>Asunto:</strong> ${dato.asunto}<br>
                <strong>Mensaje:</strong> ${dato.mensaje}
            </div>`;
        datosForm.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('datosForm')) {
        mostrarDatos();
    }
});

