// Creacion de catalogo de producto tipo JSON del carrito de compras
const productos=[
// Seccion de motocicletas
    {
        id:"1",
        titulo:"SUSUKI GSX-8R",
        imagen:"https://suzuki.com.co/sites/default/files/2025-10/GSX-8R-NEGRA.png",
        categoria:{
            nombre:"motos",
            id:"motos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:57690000
    },
    {
        id:"2",
        titulo:"Honda CB 190R 2.0 2026",
        imagen:"https://motos.honda.com.co/images/cms/honda-cb190r-gris.png",
        categoria:{
            nombre:"motos",
            id:"motos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:12000000
    },
    {
        id:"3",
        titulo:"VICTORY ZONTES 350 R1",
        imagen:"https://web2.fireboldweb.com/wp-content/uploads/2025/02/200220251740061979moto_victory_zontesr1_350_rojo_2022_foto01.png",
        categoria:{
            nombre:"motos",
            id:"motos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:20990000
    },
    {
        id:"4",
        titulo:"TVS Apache RTR 200 4V XC FI ABS",
        imagen:"https://images.ctfassets.net/8zlbnewncp6f/2iYbS6KRjRBEWX6Qdr4Rm4/af173d7d5965b459893bf234c9c4c33c/TVS_APACHE_RTR_200_4V_XC_FI_ABS-PORTADA.png?w=500&h=500&fit=pad&fm=webp&q=95",
        categoria:{
            nombre:"motos",
            id:"motos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:13699999
    },
    // Seccion de computadores
    {
        id:"5",
        titulo:"Dos Cascos Integrales KNT 878 Negro Mate Visor Negro",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIJkawaahtDQvedBD1mpug_3gfIo6MpFkJw&s",
        categoria:{
            nombre:"cascos",
            id:"cascos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:359000
    },
    {
        id:"6",
        titulo:"CASCOS INTEGRAL  DOBLE VISOR LS2 FF808 STREAM",
        imagen:"https://bm3motos.com/ArchivosBm3/imagenes/productos/1812/576fe899-b348-460f-9ea5-8e4775169aac.webp",
        categoria:{
            nombre:"casoso",
            id:"cascos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:559000
    },
    {
        id:"7",
        titulo:"Cascos Integral X-Sports V151 Negro Mate y Visor",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-4VnORRWG79AejDtg5iA-H3JiPft2Pjp3g&s",
        categoria:{
            nombre:"cascos",
            id:"cascos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:364000
    },
    {
        id:"8",
        titulo:"Casco  IntegralX-Sports V151 Wende 11 Rojo y Visor",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_819097-MCO82081092177_012025-O.webp",
        categoria:{
            nombre:"cascos",
            id:"cascos"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:368000
    },
    // Seccion de accesorios
    {
        id:"9",
        titulo:"Soporte de celular",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdY3g0vY9vFyLExcECdAFj994f6aJ_vXhqA&s",
        categoria:{
            nombre:"accesorios",
            id:"accesorios"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:250000
    },
    {
        id:"10",
        titulo:"Guantes",
        imagen:"https://refaccionariamario.info/144975-tm_home_default/par-de-guantes-azules-grandes-para-motociclista-completos-tunix.jpg",
        categoria:{
            nombre:"accesorios",
            id:"accesorios"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:39900
    },
    {
        id:"11",
        titulo:"Intercomunicador",
        imagen:"https://retendelcasco.com/wp-content/uploads/2024/01/INTERCOMUNICADOR-R1-PRO-VD.webp",
        categoria:{
            nombre:"accesorios",
            id:"accesorios"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:1100000
    },
    {
        id:"12",
        titulo:"Almohadilla de cambios",
        imagen:"https://m.media-amazon.com/images/I/717mcLqTe1L._AC_SL500_.jpg",
        categoria:{
            nombre:"accesorios",
            id:"accesorios"   //Esta es la palabra clave  debe ser igual al button if de index_car
        },
        precio:80000
    }
    ];
//Seccion de codigo js carro de compras con lacalstorage
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
