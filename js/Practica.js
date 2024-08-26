
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');
let total = 0;

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
  
        const producto = boton.closest('.producto');
        const nombre = producto.getAttribute('data-nombre');
        const precio = parseFloat(producto.getAttribute('data-precio'));


        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${nombre} - $${precio}`;
        listaCarrito.appendChild(itemCarrito);

        total += precio;
        totalElemento.textContent = `Total: $${total}`;
    });
});