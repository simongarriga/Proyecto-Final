


//VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventListeners();
// LOCAL STORAGE
cargarCarrito();

function cargarCarrito() {
    articulosCarrito = JSON.parse(localStorage.getItem('articulosCarrito'));
    carritoHTML();
}

function guardarEnStorage() {
    const carritoString = JSON.stringify(articulosCarrito);

    localStorage.setItem('articulosCarrito', carritoString);
}


// DOM PRODUCTOS CARRITO!
function cargarEventListeners() {
    listaProductos.addEventListener('click', agregarProducto);


    carrito.addEventListener('click', eliminarProducto);

    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    })


}


// Funciones

function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement


        leerDatosProductos(productoSeleccionado);
    }

    guardarEnStorage();
}

function  eliminarProducto(e) {
    if(e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( producto => producto.id != productoId);

        carritoHTML();
    }

    guardarEnStorage();
}

function leerDatosProductos(producto) {
 
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('p').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
        if(existe) {
            const productos = articulosCarrito.map(producto => {
                if(producto.id === infoProducto.id) {
                    producto.cantidad++;
                    return producto;
                }else {
                    return producto;
                }
            });
            articulosCarrito = [...productos];
        } else {
            articulosCarrito.push(infoProducto);
        }
    

    console.log(articulosCarrito)

    carritoHTML();

}

function carritoHTML() {

    limpiarHTML();


    articulosCarrito.forEach( producto => {
        const {imagen, titulo, precio, cantidad, id} = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width = "100">
            </td>
        
            <td>
                ${titulo}
            </td>
            <td>
            ${precio}
            </td>
            <td>
            ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {
    // while(contenedorCarrito.firstChild) {
    //     contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    // }

    contenedorCarrito.innerHTML = ''
}





// jquery


$(document).ready(function abrirCarrito() {
    $('#img-carrito').click(function(){
        $('#carrito').toggle(2000);
    });

});
