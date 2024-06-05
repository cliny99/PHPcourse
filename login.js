const form = document.querySelector('form');

form.addEventListener("submit",(event) =>{
    if (!validarForm()) {
        console.log("Error, corrija sus errores")
        alert("Error, campo vacío.")
        event.preventDefault();

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }else{
        console.log("Válido, enviando datos...")
        alert("¡Validación completada!")
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
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