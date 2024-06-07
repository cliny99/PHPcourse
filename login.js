const form = document.querySelector('form');

form.addEventListener("submit",(event) =>{
    if (!validarForm()) {
        console.log("Error, corrija sus errores")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Rellene los campos solicitados",
            footer: '<a href="#">¿Por qué necesitan mis datos?</a>'
          });
        event.preventDefault();

    }else{
        console.log("Válido, enviando datos...")
        Swal.fire({
            title: "Validación completada!",
            text: "En breve entrarás con tu cuenta",
            icon: "success"
          });
          event.preventDefault();
    }
});

function validarForm() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === "" || password === "") {
        return false;
    }
    return true;
};