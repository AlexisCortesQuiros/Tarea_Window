// Crear y mostrar un copo de nieve en la página
function elementoCopo() {
    const element = document.createElement('div');
    element.className = 'copo';

    // Para posicionar el copo de nieve en una posición horizontal aleatoria en la ventana del navegador
    element.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    document.getElementById('contenedor').appendChild(element);

    // Eliminación del copo de nieve después de 4 segundos
    setTimeout(() => {

       // Elimina el copo una vez se cumpla el setTimeout
        element.remove();
    }, 4000); 
}

// Función para generar copos de nieve cada 0.8 segundos
function generarCopos() {
    elementoCopo();
    setTimeout(generarCopos, 800); 
}

// Inicia la generación de copos de nieve
generarCopos(); 