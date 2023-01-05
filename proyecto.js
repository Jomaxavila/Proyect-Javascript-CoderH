
// VARIABLES 

let amor = "amor";
let familia = "familia";
let sonrisa = "sonrisa";
let seleccion;
let seleccionFinal;

while (seleccion !== "amor" && seleccion !== "familia" && seleccion !== "sonrisa" && " salir") {
	seleccion = prompt("Selecciona una de las siguientes opciones: 'amor', 'familia', 'sonrisa'");
}

if (seleccion === "amor") {
	seleccionFinal = amor;
} else if (seleccion === "familia") {
	seleccionFinal = familia;
} else if (seleccion === "sonrisa") {
	seleccionFinal = sonrisa;
}

console.log('Seleccion final: ', seleccionFinal);

// FUNCION PARA DIRECCIONAR EL RESULTADO AL SLIDER CORRESPONDIENTE Y MNOSTRARLO

function obtenerDiv(seleccionFinal) {
	if (seleccionFinal === "amor") {
		return prompt("Seleccionaste amor");
	} else if (seleccionFinal === "familia") {
		return prompt("Seleccionaste Familia");
	} else if (seleccionFinal === "sonrisa") {
		return prompt("Seleccionaste sonrisa");
	}
}

// VENTA DE SERVICIOS





