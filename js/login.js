let registros = [
    {
     nombre : "Lucio",
     apellido : "Galli",
     mail : "galli.lucio.prod@gmail.com",
     nombreUsuario : "luciog",
     contraseña : "1234",
     fechaNacimiento : "03/03/1994",
     horaNacimiento : "8:50",
     lugarNacimiento : "Buenos Aires, Argentina"
      

    },
]


const ingresar = document.getElementById("ingresar");
const popUpLoginContainer = document.getElementById("popUpLoginContainer");
const btncerrar = document.querySelector(".popUpLoginContainer .btncerrar");
const divBtnLogIn = document.getElementById("divBtnLogIn");

const loginHTML = `<button class="btncerrar">x</button>
<p class="p-carrito" id="popUpLoginFirstP">Si ya tienes una cuenta ingresa los datos:</p>
<br>
<p class="p-carrito">Usuario</p>
<input id="inputUsuario" type="text">
<br>
<br>
<p class="p-carrito">Contraseña</p>
<input id="inputContraseña" type="password" >

<br>
<br>
<button id="btnIngresar">Ingresar</button>
<br>
<br>
<br>
<p class="p-carrito">Sino, puedes crearte una cuenta: </p>
<br>

<button id="btnCrearCuenta">Crear cuenta</button>`;

let usuarioYContraseña = {usuario: "", contraseña : ""} 

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("usuarioAceptado")) {
        const usuarioAceptado = JSON.parse(localStorage.getItem("usuarioAceptado"));
        
        

        let btnUsuarioRegistrado = document.createElement("a");
        btnUsuarioRegistrado.className = "nav-link usuarioregistrado";
        btnUsuarioRegistrado.id = "btnUsuarioRegistrado";
        btnUsuarioRegistrado.textContent = usuarioAceptado.usuario;
        btnUsuarioRegistrado.href = "../pages/usuario.html"
        divBtnLogIn.innerHTML = "";

        divBtnLogIn.appendChild(btnUsuarioRegistrado);
    }
});



ingresar.addEventListener("click", () => {
    popUpLoginContainer.style.display = "block";

});

btncerrar.addEventListener("click",()=>{
    popUpLoginContainer.style.display = "none";
})



const inputUsuario = document.getElementById("inputUsuario");
const inputContraseña = document.getElementById("inputContraseña");
const btnIngresar = document.getElementById("btnIngresar");
const btnCrearCuenta = document.getElementById("btnCrearCuenta");
const liIngresarNav = document.querySelector("ul li:last-child")



inputUsuario.addEventListener("input",()=>{
    usuarioYContraseña.usuario = inputUsuario.value;
})

inputContraseña.addEventListener("input",()=>{
    usuarioYContraseña.contraseña = inputContraseña.value;
})



btnIngresar.addEventListener("click", ()=>{
    localStorage.setItem("registros", JSON.stringify(registros));
    let existeRegistro = JSON.parse(localStorage.getItem("registros")).find(ele => ele.nombreUsuario === usuarioYContraseña.usuario && ele.contraseña === usuarioYContraseña.contraseña);
  
    if (existeRegistro) {
        let mensajeBienvenida = document.createElement("h2");
        mensajeBienvenida.className = "mensajeBienvenida"
        mensajeBienvenida.textContent = `¡Bienvenido  ${usuarioYContraseña.usuario}!`;
        popUpLoginContainer.innerHTML = "";
        popUpLoginContainer.appendChild(mensajeBienvenida);
        localStorage.setItem("usuarioAceptado", JSON.stringify(usuarioYContraseña));
        
        
        
    
        let btnUsuarioRegistrado = document.createElement("a");
        btnUsuarioRegistrado.className = "nav-link usuarioregistrado";
        btnUsuarioRegistrado.id = "btnUsuarioRegistrado";
        btnUsuarioRegistrado.textContent = usuarioYContraseña.usuario;
        btnUsuarioRegistrado.href = "../pages/usuario.html";
        divBtnLogIn.innerHTML = "";
        

        
        divBtnLogIn.appendChild(btnUsuarioRegistrado);
        setTimeout(() => {
            popUpLoginContainer.style.display = "none";
        }, 2000);

    }else {
        let popUpLoginFirstP = document.getElementById("popUpLoginFirstP");
        popUpLoginFirstP.innerText = "Hubo un error en usuario o contraseña, intente nuevamente o cree una cuenta nueva"
    }

})




const crearCuentaForm = 
    `
    <button class="btncerrar" id="btnCerrarCrearCuenta">x</button>
    <p class="p-carrito" id="popUpCrearCuentaFirstP">Ingresa tus datos para crear una cuenta nueva:</p>

    <br>
    <p class="p-carrito">Nombre</p>
    <input id="inputNuevoNombre" type="text">
    <br>
    <br>
    <p class="p-carrito">Apellido</p>
    <input id="inputNuevoApellido" type="text">
    <br>
    <br>
    <p class="p-carrito">Email</p>
    <input id="inputNuevoEmail" type="email">
    <br>
    <br>
    <p class="p-carrito">Fecha de Nacimiento</p>
    <input id="inputNuevaFechaNacimiento" type="date" placeholder="dd/mm/aaaa">
    <br>
    <br>
    <p class="p-carrito">Hora de Nacimiento</p>
    <input id="inputNuevaHoraNacimiento" type="time" placeholder="hh:mm">
    <br>
    <p class="p-carrito">Lugar de Nacimiento</p>
    <input id="inputNuevoLugarNacimiento" type="text" placeholder="Buenos Aires, Argentina">
    <br>

    <p class="p-carrito">Usuario</p>
    <input id="inputNuevoUsuario" type="text">
    <br>
    <br>
    <p class="p-carrito">Contraseña</p>
    <input id="inputContraseña" type="password" >

    <br>
    <br>

    <button id="btnCrearNuevaCuenta">Crear cuenta</button>
    `
;

const popUpCrearCuentaContainer = document.getElementById("popUpCrearCuentaContainer")

const inputNuevoNombre = document.getElementById("inputNuevoNombre");
const inputNuevoApellido = document.getElementById("inputNuevoApellido");
const inputNuevoEmail = document.getElementById("inputNuevoEmail");
const inputNuevaFechaNacimiento = document.getElementById("inputNuevaFechaNacimiento");
const inputNuevaHoraNacimiento = document.getElementById("inputNuevaHoraNacimiento");
const inputNuevoLugarNacimiento = document.getElementById("inputNuevoLugarNacimiento");
const inputNuevoUsuario = document.getElementById("inputNuevoUsuario");
const inputNuevaContraseña = document.getElementById("inputNuevaContraseña");

const btnCrearNuevaCuenta = document.getElementById("btnCrearNuevaCuenta");






const nuevaPersona = {};

btnCrearCuenta.addEventListener("click",()=>{
    popUpLoginContainer.style.display = "none";
    popUpCrearCuentaContainer.style.display = "block"


    const btnCerrarCrearCuenta = document.getElementById("btnCerrarCrearCuenta")
    btnCerrarCrearCuenta.addEventListener("click",()=>{
        popUpCrearCuentaContainer.style.display = "none";
    })              



})

inputNuevoNombre.addEventListener("input",()=>{
    nuevaPersona.nombre = inputNuevoNombre.value;
})
inputNuevoApellido.addEventListener("input",()=>{
    nuevaPersona.apellido = inputNuevoApellido.value;
})
inputNuevoEmail.addEventListener("input",()=>{
    nuevaPersona.mail = inputNuevoEmail.value;
})
inputNuevaFechaNacimiento.addEventListener("input",()=>{
    
    const fechaSeleccionada = new Date(inputNuevaFechaNacimiento.value);
    fechaSeleccionada.setDate(fechaSeleccionada.getDate() + 1);
    const dia = fechaSeleccionada.getDate();
    const mes = fechaSeleccionada.getMonth() + 1; 
    const año = fechaSeleccionada.getFullYear();
    const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`;
    
    nuevaPersona.fechaNacimiento = fechaFormateada;
})
inputNuevoLugarNacimiento.addEventListener("input",()=>{
    nuevaPersona.lugarNacimiento = inputNuevoLugarNacimiento.value;
})
inputNuevaHoraNacimiento.addEventListener("input",()=>{
    nuevaPersona.horaNacimiento = inputNuevaHoraNacimiento.value;
})
inputNuevoUsuario.addEventListener("input",()=>{
    nuevaPersona.nombreUsuario = inputNuevoUsuario.value;
})
inputNuevaContraseña.addEventListener("input",()=>{
    nuevaPersona.contraseña = inputNuevaContraseña.value;
})




btnCrearNuevaCuenta.addEventListener("click",()=>{
    
    registros.push(nuevaPersona);
    
    localStorage.setItem("registros", JSON.stringify(registros));
    
    let mensajeBienvenidaNuevo = document.createElement("h2");
    mensajeBienvenidaNuevo.className = "mensajeBienvenida";
    mensajeBienvenidaNuevo.textContent = `¡Usuario creado con éxito!, por último vuelve a ingresar con tu nuevo usuario y contraseña.
    `;
    popUpCrearCuentaContainer.innerHTML = "";
    popUpCrearCuentaContainer.appendChild(mensajeBienvenidaNuevo);

    setTimeout(() => {
        popUpCrearCuentaContainer.style.display = "none";
      }, 3000);

})


function obtenerSignoZodiacal(fechaNacimiento) {
    const partesFecha = fechaNacimiento.split("/");
    const dia = parseInt(partesFecha[0]);
    const mes = parseInt(partesFecha[1]);

    switch (mes) {
        case 1:
            if (dia >= 20) return "Acuario";
            return "Capricornio";
        case 2:
            if (dia >= 19) return "Piscis";
            return "Acuario";
        case 3:
            if (dia >= 21) return "Aries";
            return "Piscis";
        case 4:
            if (dia >= 20) return "Tauro";
            return "Aries";
        case 5:
            if (dia >= 21) return "Géminis";
            return "Tauro";
        case 6:
            if (dia >= 21) return "Cáncer";
            return "Géminis";
        case 7:
            if (dia >= 23) return "Leo";
            return "Cáncer";
        case 8:
            if (dia >= 23) return "Virgo";
            return "Leo";
        case 9:
            if (dia >= 23) return "Libra";
            return "Virgo";
        case 10:
            if (dia >= 23) return "Escorpio";
            return "Libra";
        case 11:
            if (dia >= 22) return "Sagitario";
            return "Escorpio";
        case 12:
            if (dia >= 22) return "Capricornio";
            return "Sagitario";
        default:
            return "Fecha de nacimiento no válida";
    }
}


const datosContainer = document.getElementById("datos-container");

if (localStorage.getItem("usuarioAceptado")) {
    const usuarioAceptado = JSON.parse(localStorage.getItem("usuarioAceptado"));

       
    const personaLogueada = JSON.parse(localStorage.getItem("registros")).find(
        (persona) =>
            persona.nombreUsuario === usuarioAceptado.usuario &&
            persona.contraseña === usuarioAceptado.contraseña
    );


    if (personaLogueada) {
        
        const datosHTML = `
            <h1>¡Hola ${personaLogueada.nombre} ${personaLogueada.apellido}!</h1>
            <p>Estos son todos los datos que tenemos sobre vos:</p>

            <div class="datos">
                <p class="p-carrito"><span>Nombre:</span> ${personaLogueada.nombre}</p>
                <p class="p-carrito"><span>Apellido:</span> ${personaLogueada.apellido}</p>
                <p class="p-carrito"><span>Usuario:</span> ${personaLogueada.nombreUsuario}</p>
                <p class="p-carrito"><span>Correo Electrónico:</span> ${personaLogueada.mail}</p>
                <p class="p-carrito"><span>Fecha de Nacimiento:</span> ${personaLogueada.fechaNacimiento}</p>
                <p class="p-carrito"><span>Hora de Nacimiento:</span> ${personaLogueada.horaNacimiento}</p>
                <p class="p-carrito"><span>Lugar de Nacimiento:</span> ${personaLogueada.lugarNacimiento}</p>
                <p class="p-carrito"><span>Signo Zoodiacal:</span> ${obtenerSignoZodiacal(personaLogueada.fechaNacimiento)}</p>
                
            </div>
            
            
        `;

        
        datosContainer.innerHTML = datosHTML;
    }
}

const btnFinalizarSesion = document.getElementById("salir-sesion");

btnFinalizarSesion.addEventListener("click", () => {
    
    localStorage.removeItem("usuarioAceptado");
    

    
    window.location.href = "../index.html";
});