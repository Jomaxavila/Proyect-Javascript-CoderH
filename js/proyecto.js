


const content_serv = document.getElementById("cont_serv");
const verCarrito = document.getElementById("ver_carrito");
const contenedorModal = document.getElementById("modal_container");
const cantidadCarrito = document.getElementById("cant_carrito");



let carrito = JSON.parse(localStorage.getItem("servicios")) || [];

const getServicios = async() =>{
	const response = await fetch("data.json");
	const data = await response.json();
	data.forEach((serv) => {
		let content = document.createElement("div");
		content.className = "card d-flex justify-content-center container animate__animated animate__fadeInLeft";
		content.innerHTML = `
		<img class=" img_card" src="${serv.img}">
		<h5>${serv.nombre}</h5>
		<p class="price">$ ${serv.precio}</p>
		<p class="descrip_card small p-2">${serv.descripcion}</p>
	
		`; 
		content_serv.append(content);
	
		let agregar = document.createElement("button")
		agregar.innerText = "agregar";
		agregar.className = "agregar btn btn-primary container"
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
			Toastify({
				text: "Agregado al carrito",
				duration: 2000,
				destination: "https://github.com/apvarun/toastify-js",
				newWindow: true,
				close: true,
				gravity: "bottom", // `top` or `bottom`
				position: "right", // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
				background: "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,64,213,1) 27%, rgba(0,212,255,1) 100%);",
				},
				onClick: function(){} // Callback after click
			  }).showToast();
			saveLocal();
		});
	});
}; 
getServicios();




// SET ITEM
const saveLocal = () => {
	localStorage.setItem("servicios", JSON.stringify(carrito));
};

// GET ITEM 

JSON.parse(localStorage.getItem("servicios"));

