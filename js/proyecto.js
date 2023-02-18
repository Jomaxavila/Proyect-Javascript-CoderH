

// VARIABLES 
const content_serv = document.getElementById("cont_serv");
const verCarrito = document.getElementById("ver_carrito");
const contenedorModal = document.getElementById("modal_container");
const cantidadCarrito = document.getElementById("cant_carrito");

// LOCAL STORAGE DE SERVICIOS ELEGIDOS
let carrito = JSON.parse(localStorage.getItem("servicios")) || [];
const getServicios = async() =>{
	const response = await fetch("data.json");
	const data = await response.json();
// RECCORRER E INSERTAR ELEMENTOS DE LAS CARDS DE SERVICIOS EN EL DOM
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
	// FUNCIONALIDAD AL BOTON AGREGAR
		agregar.addEventListener("click", () => {
			const repeat = carrito.some((repeatServ) => repeatServ.nombre === serv.nombre);
			const servicioAgregado = `${serv.nombre}`;
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
				text: `${servicioAgregado} AGREGADO ✅`,
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


  // FETCH CON API YOUTUBE V3 A MI CANAL PARA INSERTAR MIS VIDEOS
	fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeS-0I8upefNp-VAuI9sBtg&maxResults=6&order=viewCount&key=AIzaSyDgfkirZ7Z2BS_L4BMUBkwaPzvw6EpGTG4")
	.then(response => response.json())
	.then(data => {console.log(data);
	let insertVideo = document.getElementById("cont_videos");
// ALMACENANDO LOS VIDEOS EN UN ARRAY PARA LUEGO RECORRERLO
	let videoData = [];
	for (let i = 0; i < 6; i++) {
	let videoId = data.items[i].id.videoId;
	let videoName = data.items[i].snippet.title;
	videoData.push({
		id: videoId,
		name: videoName,
	});
	}
// METODO FOREACH PARA RECORRER E INSERTAR EL VIDEO
    videoData.forEach(video => {
	insertVideo.innerHTML += `
	<h5 class"container d-flex flex-column bd-highlight mb-5 mt-5">${video.name}</h5>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" 
	frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share"
	allowfullscreen></iframe>
	`;
    });
});