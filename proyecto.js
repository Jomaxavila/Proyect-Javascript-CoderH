

// CREACION DE USUARIO Y LUEGO LOGIN PARA INGRESAR AL SISTEMA 
alert("Bienvenido, por favor crea tu usuario y contrasena");
let user = prompt("Nombre de Usuario");
let contra = Number(prompt("Ingrese un numero para su contraseña"));
alert("Su usuario es:" + user);
alert("Su contraseña es:" + contra);

const usuario = user;
const constraseña = contra;

// VARIABLES DE PRECIOS POR HORA DE ACUERDO AL SERVICIO.
const cotizacion_hora_boda = 25000;
const cotizacion_hora_sesion = 20000;
const cotizacion_hora_retratros = 15000;


const cotizarBoda = (BODAS) => BODAS * cotizacion_hora_boda;
const cotizarSesion = (SESIONES) => SESIONES * cotizacion_hora_sesion;
const cotizarRetrato = (RETRATOS) => RETRATOS * cotizacion_hora_retratros;
alert("Inicie sesion con usuario y contraseña");

user = prompt("usuario:");
contra = prompt("contraseña:");
let intentos = 3;

while (user != usuario || contra != constraseña) {

	intentos--;
	alert("Usuario o contraseña Invalidos")
	alert("Te quedan :" + intentos);
	if (intentos === 0) {
		alert("Te quedaste sin intentos")
		break
	}

	user = prompt("Ingrese su usuario:");
	contra = prompt("Ingrese su contaseña:");
}
if (intentos > 0) {
	alert(" Bienvenido al Sistema de Servicios de Maxi Avila Fotografia");
	// SE CALCULA EL PRECIO DE LA HORA EN RELACION AL SERVICIO QUE SELECCIONE

	let seleccion = prompt("Seleccionar Cotizacion \n 1 - BODAS \n 2 - SESIONES \n 3 -RETRATOS ").toLowerCase();
	let horas = Number(prompt("Cantidad de horas del Servicio"));
	switch (seleccion) {
		case "1":
			alert(" El Precio a pagar es; " + cotizarBoda(horas));
			break;
		case "2":
			alert("El Precio a pagar es; " + cotizarSesion(horas));
			break;
		case "3":
			alert("El Precio a pagar es; " + cotizarSesion(horas));
			break;
		default:
			alert("Opcion Invalida");
			break;
	}
}



// // VARIABLES Y FUNCION
// // CUANDO LA PERSONA ELIJA ALGUN SERVICIO LES MOSTRARA UN EJEMPLO CON VIDEO O SLIDESHOW  
// //  VOY A UTILIZARLO DANDOLE MAS FORMA DESPUES DE CLASE 8. 

// console.log("Bienvendi@ a el servicio de ejemplos")
// let bodas = "bodas";
// let sesiones = "sesiones";
// let retratos = "retratos";
// let fotolibro = "fotolibro";
// let productos = "productos";
// let empresas = "empresas";
// let slideShow = "slideshow";
// let seleccion;
// let seleccionFinal;

// while (seleccion !== "bodas" && seleccion !== "sesiones" && seleccion !== "retratos"
// 	&& seleccion !== "fotolibro" && seleccion !== "productos" && seleccion !== "empresas" && seleccion !== "slideshow") {
// 	seleccion = prompt("Selecciona una de las siguientes opciones: 'bodas', 'sesiones',  'fotolibro' 'productos' 'empresas' 'slideshow'");
// }
// if (seleccion === "bodas") {
// 	seleccionFinal = sesiones;
// } else if (seleccion === "sesiones") {
// 	seleccionFinal = sesiones;
// } else if (seleccion === "retratos") {
// 	seleccionFinal = retratos;
// } else if (seleccion === "fotolibro") {
// 	seleccionFinal = fotolibro;
// } else if (seleccion === "productos") {
// 	seleccionFinal = productos;
// } else if (seleccion === "empresas") {
// 	seleccionFinal = empresas;
// } else if (seleccion === "slideshow") {
// 	seleccionFinal = slideShow;
// }

// console.log("Seleccion final:", seleccionFinal);

// FUNCION PARA DIRECCIONAR EL RESULTADO AL SLIDER CORRESPONDIENTE Y MOSTRARLO EN EL DOM

// function obtenerDiv(seleccionFinal) {
// 	if (seleccionFinal === "bodas") {
// 		return '<div id="bodas"></div>';
// 	} else if (seleccionFinal === "sesiones") {
// 		return '<div id="sesiones"></div>';
// 	} else if (seleccionFinal === "retratos") {
// 		return '<div id="retratos"></div>';
// 	} else if (seleccionFinal === "fotolibro") {
// 		return '<div id="fotolibro"></div>';
// 	} else if (seleccionFinal === "productos") {
// 		return '<div id="productos"></div>';
// 	} else if (seleccionFinal === "empresas") {
// 		return '<div id="empresas"></div>';
// 	} else if (seleccionFinal === "slideShow"); {
// 		return '<div id="slideShow"></div>';
// 	}
// }



// OBJETOS - CREANDO MIS SERVICIOS


// class producto {
// 	constructor(nombre, precio, stock,) {

// 		this.nombre = nombre;
// 		this.precio = precio;
// 		this.stock = stock;
// 	}


// 	get_datos() {
// 		consol.log("datos del producto");
// 		console.log("El nombre del producto es:", this.nombre);
// 		console.log("El precio del producto es:", this.precio);
// 		onsole.log("El stock del producto es:", this.stock);

// 	}
// 	get_stock() {
// 		if (this.stock < 3) {
// 			console.log("ojo stock bajo:"); this.stock;
// 		}
// 		console.log("El stock es de :", this.stock);
// 		return this.stock
// 	}

// 	update_stock(cantidad) {
// 		this.stock = this.stock - cantidad;
// 	}
// }

// // VENTA DE BODA 

// let cantidad = 1;
// console.log("Contrataste ", cantidad, "boda");
// if (producto_uno.get_stock() >= cantidad) {
// 	console.log("Contrataste", cantidad, "bodas");
// 	producto_uno.update_stock(cantidad);

// }
// else {
// 	console.log("La fecha esta reservada");
// }

// console.log("Stock de bodas despues de la venta");
// producto_tres.get_datos()


// let producto_uno = new producto("Boda", 3000, b);
// let producto_dos = new producto("Sesion de Novios", 3000, 30);
// let producto_tres = new producto("Retratos", 3000, 30);
// let producto_cuatro = new producto("Fotolibro", 3000, 30);

















