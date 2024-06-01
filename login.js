const form = document.querySelector('form');

form.addEventListener("submit",(event) =>{
    if (!validarForm()) {
        console.log("Error, corrija sus errores")
        alert("Error, campo vacío.")
        event.preventDefault();
    }else{
        console.log("Válido, enviando datos...")
        alert("¡Validación completada!")
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