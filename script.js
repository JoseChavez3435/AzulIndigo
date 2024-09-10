// Script básico para el carrito de compras

document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('#tienda .producto button');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            alert('Producto añadido al carrito');
            // Aquí podrías agregar la lógica para manejar el carrito de compras
        });
    });
});