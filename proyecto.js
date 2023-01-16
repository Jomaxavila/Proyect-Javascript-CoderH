

// ARRAY CON LOS SERVICIOS QUE BRINDAMOS EN MAXI AVILA FOTOGRAFIA.

const servicios = [
	{
		tipo: "principal",
		nombre: "bodas",
		precio: 200000,
		descripcion: "Cobertura de boda completa, entrega de material en 4k, minimo de 500 fotos a los 30 dias del evento",

	},
	{
		tipo: "secundario",
		nombre: "sesion",
		precio: 40000,
		descripcion: "Sesion fotografica de parejas, entrega de material en 4k, minimo de 100 fotos, a los 7 dias del evento",
	},
	{
		tipo: "secundario",
		nombre: "fotolibro",
		precio: 65000,
		descripcion: "Libro de fotos impresas de primera calidad,tapa simil , maximo de 100 fotos, a los 15 dias del encargo",
	},
	{
		tipo: "secundario",
		nombre: "slideshow",
		precio: 10000,
		descripcion: "Video con fotografias y musica de tu evento en full HD",
	},
	{
		tipo: "extra",
		nombre: "retratos",
		precio: 25000,
		descripcion: "Sesion fotografica para porfolio profesional, redes sociales, entrega de material en 4k, minimo de 100 fotos, a los 7 dias del evento",
	},
	{
		tipo: "extra",
		nombre: "productos",
		precio: 25000,
		descripcion: "Fotografia de productos de tu empresa, entrega de material en 4k, minimo de 100 fotos, a los 7 dias del evento",
	},
	{
		tipo: "extra",
		nombre: "empresas",
		precio: 25000,
		descripcion: "Fotografia de eventos empresariales, entrega de material en 4k, minimo de 100 fotos, a los 7 dias del evento",
	},

]

// CREAMOS EL ARRAY VACIO PARA QUE AGREGUE LOS SERV.

let carrito = []
let seleccion = prompt("Hola desea contratar un servicio ? Si o No").toLowerCase();

while (seleccion != "si" && seleccion != "no") {
	alert("Por favor ingresa si, para continuar o no para salir ")
	prompt("Hola desea contratar un servicio ? Si o No")
}
// UTILICE METODO MAP PARA RECORRER EL ARRAY Y JOIN PARA QUE ME LOS MUESTRE
if (seleccion == "si") {
	alert("A continuacion nuestra lista de servicios")
	let lista_servicios = servicios.map((servicio) => servicio.nombre + "" + servicio.precio + "$" + servicio.descripcion);
	alert(lista_servicios.join(" - "))
}
else if (seleccion = "No") {
	alert("Muchas gracias por visitar mi pagina");

}
// GENERO UN BUCLE PARA QUE SELECCIONE LOS SERVICIOS 
while (seleccion != "no") {
	let servicio = prompt("Elija el servicio que desea contratar y agregarlo a su carrito");
	let precio = 0

	if (servicio == "bodas" || servicio == "sesion" || servicio == "fotolibro" || servicio == "slideshow" || servicio == "retratos" || servicio == "productos" || servicio == "empresas") {
		switch (servicio) {

			// OPTE POR PONERLE UN PRECIO UNICO AL SERVICIO Y NO COTIZARLO POR HORA.
			case "bodas":
				precio = 200000;
				break;
			case "sesion":
				precio = 40000;
				break;
			case "fotolibro":
				precio = 65000;
				break;
			case "slideshow":
				precio = 10000;
				break;
			case "retratos":
				precio = 25000;
				break;
			case "productos":
				precio = 25000;
				break;
			case "empresas":
				precio = 25000;
				break;
			default:
				alert("Opcion Invalida");
				break;
		}
		// UTILLIZAMOS METODO PUSH PARA AGREGAR LOS SERV AL CARRITO.

		let unidades = parseInt(prompt("cuantos unidades servicios desea contratar ?"));
		carrito.push({ servicio, unidades, precio });
		console.log(carrito);
	} else {
		alert("No brindamos ese servicio")

	}

	seleccion = prompt("Desea agregar otro servicio ? Si o No");

	// UTILICE METODO FOREACH PARA RECORRER EL ARRAY

	while (seleccion === "no") {
		alert("Gracias por tu compra, hasta pronto")
		carrito.forEach((carritoFinal) => {
			console.log(`servicio: ${carritoFinal.servicio}, unidades: ${carritoFinal.unidades} Precio: ${carritoFinal.precio} total 
			a pagar por servicio es: ${carritoFinal.precio * carritoFinal.unidades}`)
		})
		break;
	}
}

// FUNCION PARA SUMAR LOS COSTOS DE SERVICIOS / 


function calcular_total(acu, servicios) {
	acu = acu + servicios.precio;
	return acu
}

let costoTotal = carrito.reduce(calcular_total, 0);
console.log("El costo total de tus servicios contratados es :", costoTotal);
console.log("Por favor inicie sesion o cree usuario para finalizar su contratacion de servicios ")

// CREACION DE USUARIO Y LUEGO LOGIN PARA INGRESAR AL SISTEMA Y CONTRATAR LOS SERVICIOS QUE SELECCIONO.

alert("Bienvenido, por favor crea tu usuario y contrasena");
let user = prompt("Nombre de Usuario");
let contra = Number(prompt("Ingrese un numero para su contraseña"));
alert("Su usuario es:" + user);
alert("Su contraseña es:" + contra);
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
	alert(" Bienvenido nuevamente, seleccione formas de pago.");
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
// 			console.log("Cuidado stock bajo:"); this.stock;
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



// ARRAYS 
// let lista_servicios = [];

// // let lista_servicios = ["Bodas", "sesiones", "retratos", "fotolibros", "productos", "empresas"];


// for (let i = 0; i < lista_servicios.length; i = i + 1) {
// 	console.log("Lista de Productos:", lista_servicios)
// 	console.log("Estamos en la vuelta N:")
// }



// let resultado_join = lista_servicios.join(" 0...")
// console.log("RESULTADO LISTA JOIN:", resultado_join);

// class servicios {
// 	constructor(nombre, precio, stock,) {

// 		this.nombre = nombre;
// 		this.precio = precio;
// 		this.stock = stock;
// 	}
// }

// // for of --> para recorrer arrays
// // for in --> para recorrer objetos


// let lista_servicio = [];

// for (let i = 0; i < 3; i = i + 1) {


// 	let nombre = prompt("Ingrese su nombre")
// 	let cantidad = prompt("ingrese cantidad")


// 	let nuevo_servicio = new servicios(nombre, cantidad);

// 	lista_servicio.push(nuevo_producto);


// }
// console.log


// ARRAY DE OBJETOS
// ARRAY DE SERVICIOS 



// FILTER - PARA QUE USUARIO REALICE UNA BUSQUEDA DE ALGUN SERVICIO POR NOMBRE

// const result = servicios.filter(function (name) {
// 	if (name.nombre === "Bodas")
// 		return true
// })

// console.log(result)


// // MAP - UTULIZARIA ESTE METODO PARA QUE EL USUARIO PUEDA VER COMPLETOS TODOS LOS SERVICIOS.
// const resultMap = servicios.map(function (serv) {
// 	return serv

// });

// console.log(resultMap)


// // REDUCE - QUE SUME EL TOTAL DE LOS SERVICIOS QUE CONTRATO. 

// function sumar_costo(suma, servicios) {
// 	total = suma + servicios.precio;
// 	return total
// }

// let venta_total = servicios.reduce(sumar_costo, 0);

// console.log("El total de la venta de servicios es:", venta_total);



// // EN EL MOMENTO QUE LA PERSONA DESEE CONTRATAR UN SERVICIO DEBERA CREAR USUARIO Y LUEGO INICIAR SESION
// // OBJETO USUARIO NUEVO - METODO PUSH -


// class NewUsuario {
// 	constructor(email, usuario, pass,) {

// 		this.email = email;
// 		this.usuario = usuario;
// 		this.pass = pass;
// 	}
// }
// let ususarios = []
// ususarios.push(



