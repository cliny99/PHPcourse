let contenedorPersonajes = document.getElementById('contenedorPersonajes');

const link = 'https://dog.ceo/api/breeds/image/random';

let obtenerImagenAleatoria = () => {
    fetch(link)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            contenedorPersonajes.innerHTML = `<img src="${data.message}" alt="Perro aleatorio">`;
        })
        .catch((error) => {
            console.error('Error al obtener la imagen:', error);
        });
};

obtenerImagenAleatoria();
