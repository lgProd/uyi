// ... ARRAY PRODUCTOS ... //

let productos = [
    {
        id : 1,
        producto : "Kit Velas Sanación",
        descripcion : "Kit de 3 velas dedicadas a rituales de sanación propia",
        precio : 56,
        img : "../img/productos/1.png",
        cantidadProducto: 0,
        totalProducto : 0,
    },
    {
        id : 2,
        producto : "Kit Velas Limpieza",
        descripcion : "Kit de 3 velas dedicadas a rituales de limpieza energética de espacios",
        precio : 56,
        img : "../img/productos/2.png",
        cantidadProducto: 0,
        totalProducto : 0,
    },
    {
        id : 3,
        producto : "Kit Sahumos Sanación",
        descripcion : "Kit de sahumos dedicados a rituales de sanación propia",
        precio : 100,
        img : "../img/productos/3.png",
        cantidadProducto: 0,
        totalProducto : 0,
    },
    {
        id : 4,
        producto : "Kit Sahumos Limpieza",
        descripcion : "Kit de sahumos dedicados a rituales de limpieza energética",
        precio : 100,
        img : "../img/productos/4.png",
        cantidadProducto: 0,
        totalProducto : 0,
    },
    {
        id : 5,
        producto : 'Mazo de Cartas "Tarot de Marsella"',
        descripcion : "Mazo de cartas con diseño de Marsella ",
        precio : 100,
        img : "../img/productos/5.png",
        cantidadProducto: 0,
        totalProducto : 0,
    },
    {
        id : 6,
        producto : "Preparado de Flores de  Bach",
        descripcion : "Kit de sahumos dedicados a rituales de sanación propia",
        precio : 100,
        img : "../img/productos/6.png",
        cantidadProducto: 0,
        totalProducto : 0,
    },
    {
        id : 7,
        producto : 'Preparado de flores "Meditación"',
        descripcion : "Kit de sahumos dedicados a rituales de sanación propia",
        precio : 100,
        img : "../img/productos/7.png",
        cantidadProducto: 0,
        totalProducto : 0,

    },
    {
        id : 8,
        producto : 'Preparado de flores "Apertura"',
        descripcion : "Kit de sahumos dedicados a rituales de sanación propia",
        precio : 100,
        img : "../img/productos/8.png",
        cantidadProducto: 0,
        totalProducto : 0,
    }
]


// ... GENERAR CARDS EN TIENDA ... //

const tiendaContainer = document.getElementById("tiendaContainer"); 

productos.forEach((producto) => {  
    const cardEnTienda = `
        <div class="card">
        <img src="${producto.img}" class="card-img-top" alt="imagen del producto">
        <div class="card-body">
            <h5 class="card-title">${producto.producto}</h5>
            
            <a href="#" class="btn btn-primary verMasBoton">Ver más</a>

            <p class="precio card-title">$${producto.precio}</p>
            <div class="rowbtn"> 
                <button  class="button buttonMenos">-</button>
                    <p class="cardContador" id="cardContador">0</p>
                <button  class="button buttonMas">+</button>
            </div>
        </div>
        </div>
    `;

    tiendaContainer.innerHTML += cardEnTienda; 
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("productos")) {
      productos = JSON.parse(localStorage.getItem("productos"));
  
      productos.forEach((producto, index) => {
        cardContadores[index].innerText = producto.cantidadProducto;
        cantidadTotalCarrito += producto.cantidadProducto;
      });
      contadorCarritoHeader.innerText = cantidadTotalCarrito;
    }
});

// ... FUNCIONALIDAD CARDS ... //   

const buttonMas = document.querySelectorAll(".buttonMas"); 
const buttonMenos = document.querySelectorAll(".buttonMenos"); 
const cardContadores = document.querySelectorAll(".cardContador"); 

const contadorCarritoHeader = document.getElementById("actualizacion-carrito"); 
const contenedorProductosSeleccionados = document.getElementById("productosCarrito"); 

let cantidad = 0; 
let cantidadTotalCarrito = 0;  

if (localStorage.getItem("productos")) {
    
    productos = JSON.parse(localStorage.getItem("productos"));
} else {
    
    localStorage.setItem("productos", JSON.stringify(productos));
}


// Funcionalidad button Mas //
buttonMas.forEach((button, index) => {   
    button.addEventListener("click", () => { 
        cantidad = parseInt(cardContadores[index].innerText) + 1; 
        cardContadores[index].innerText = cantidad; 
        
        
        productos[index].cantidadProducto = parseInt(cantidad); 
        productos[index].totalProducto = parseInt(productos[index].precio * cantidad); 

        localStorage.setItem("productos", JSON.stringify(productos)); 

        cantidadTotalCarrito++; 
        contadorCarritoHeader.innerText = cantidadTotalCarrito; 
                
    });
});

// Funcionalidad Button Menos //
buttonMenos.forEach((button, index) => {
    button.addEventListener("click", () => {
        cantidad = parseInt(cardContadores[index].innerText);
        if (cantidad > 0) {
            cardContadores[index].innerText = cantidad - 1;
            cantidadTotalCarrito--; 
            contadorCarritoHeader.innerText = cantidadTotalCarrito;
            productos[index].cantidadProducto = parseInt(cantidad - 1);
            productos[index].totalProducto = parseInt(productos[index].precio * (cantidad - 1));

            localStorage.setItem("productos", JSON.stringify(productos)); 

        }
    });

});

// ... CARRITO (OFF-CANVAS) ... //
    
const btnCarrito = document.getElementById("btncarrito"); 
const totalCarrito = document.getElementById("total");

btnCarrito.addEventListener("click", () => {
    contenedorProductosSeleccionados.innerHTML = "";
    productos.forEach((producto,index) => {
        if (producto.cantidadProducto > 0) {
            const cardHTMLProductoSeleccionado = document.createElement("div");
            cardHTMLProductoSeleccionado.className = "producto-seleccionado";
            cardHTMLProductoSeleccionado.innerHTML = `
            <p class="productoNombre p-carrito">${producto.producto}</p>
            <p class="p-carrito">${producto.cantidadProducto}</p>
            <p class="productoTotal p-carrito">$${producto.totalProducto}</p>`;           
            contenedorProductosSeleccionados.append(cardHTMLProductoSeleccionado);
        }
    });
    const totalProductos = productos.reduce(
      (total, producto) => total + producto.totalProducto,
      0
    );
    totalCarrito.innerText = "$" + totalProductos.toString();
});

// ... VACIAR CARRITO ... //

const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {

    productos.forEach((producto) => {
        producto.cantidadProducto = 0;
        producto.totalProducto = 0;
    });

    localStorage.setItem("productos", JSON.stringify(productos));

    cardContadores.forEach((contador) => {
        contador.innerText = 0;
    });

    cantidadTotalCarrito = 0;
    contadorCarritoHeader.innerText = cantidadTotalCarrito;
    contenedorProductosSeleccionados.innerHTML = "";
    totalCarrito.innerText = 0;

}

// ... BOTON VER MAS CARD ... // 
const verMasBoton = document.querySelectorAll('.verMasBoton');

verMasBoton.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = productos[index];
        
        Swal.fire({
        title: producto.producto,
        text: producto.descripcion,
        imageUrl: producto.img, 
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: producto.producto,
        });
    });
});










    




















