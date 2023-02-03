

// CREAMOS EL NUEVO ARRAY VACIO LLAMADO "CARRITO" PARA QUE AGREGUE LOS SERV.


//  ARRAY CON LOS SERVICIOS QUE BRINDAMOS EN MAXI AVILA FOTOGRAFIA.
const content_serv = document.getElementById("cont_serv");
const verCarrito = document.getElementById("ver_carrito");
const contenedorModal = document.getElementById("modal_container");
const cantidadCarrito = document.getElementById("cant_carrito");


let carrito = JSON.parse(localStorage.getItem("servicios")) || [];
servicios.forEach((serv) => {
	let content = document.createElement("div");
	content.className = "card";
	content.innerHTML = `
	<img class=" img_card" src="${serv.img}">
	<h5>${serv.nombre}</h5>
	<p class="price">$ ${serv.precio}</p>
	<p class="descrip_card">${serv.descripcion}</p>

	`;
	content_serv.append(content);

	let agregar = document.createElement("button")
	agregar.innerText = "agregar";
	agregar.className = "agregar"
	content.append(agregar);

	agregar.addEventListener("click", () => {
		const repeat = carrito.some((repeatServ) => repeatServ.nombre === serv.nombre);
		if (repeat) {
			carrito.map((servN) => {
				if (servN.nombre === serv.nombre) {
					servN.cantidad++;
				}
			});
		} else {
			carrito.push({
				img: serv.img,
				nombre: serv.nombre,
				precio: serv.precio,
				cantidad: serv.cantidad,
			});
		}
		carritoCounter();
		saveLocal();
	});
});

// SET ITEM
const saveLocal = () => {
	localStorage.setItem("servicios", JSON.stringify(carrito));
};

// GET ITEM 

JSON.parse(localStorage.getItem("servicios"));










