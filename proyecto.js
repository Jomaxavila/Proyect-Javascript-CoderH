let amor = "amor";
let familia = "familia";
let sonrisa = "sonrisa";
let seleccion;
let seleccionFinal;

while (seleccion !== "amor" && seleccion !== "familia" && seleccion !== "sonrisa") {
	seleccion = prompt("Selecciona una de las siguientes opciones: 'amor', 'familia', 'sonrisa'");
}

if (seleccion === "amor") {
	let seleccionFinal = amor;
} else if (seleccion === "familia") {
	let seleccionFinal = familia;
} else if (seleccion === "sonrisa") {
	let seleccionFinal = sonrisa;
}

function obtenerDiv(seleccionFinal) {
	if (seleccionFinal === "amor") {
		return '<div id="amor"></div>';
	} else if (seleccionFinal === "familia") {
		return '<div id="familia"></div>';
	} else if (seleccionFinal === "sonrisa") {
		return '<div id="sonrisa"></div>';
	}
}


