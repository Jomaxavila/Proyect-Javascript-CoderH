const pintarCarrito = () => {


	modal_container.innerHTML = "";
	modal_container.style.display = "flex";
	const modalHeader = document.createElement("div");
	modalHeader.className = "modal_header"
	modalHeader.innerHTML = `<h1 class="modal_header_title">CARRITO </h1>`;

	contenedorModal.append(modalHeader);

	const modalButton = document.createElement("h2");
	modalButton.innerText = "X";
	modalButton.className = "modal_header_button";

	modalButton.addEventListener("click", () => {
		modal_container.style.display = "none";
	})

	modalHeader.append(modalButton);


	carrito.forEach((serv) => {
		let carritoContent = document.createElement("div");
		carritoContent.className = "modal_content";
		carritoContent.innerHTML = `
		<img src = "${serv.img}"
		<h3> ${serv.nombre}</h3 >
		<p>$ ${serv.precio}</p >
		<span class="restar"> - </span>
		<span class="sumar"> + </span>
		<p> cantidad ${serv.cantidad}</p>
		<span class="eliminar_serv"> Eliminar X </span>
		
		`;

		modal_container.append(carritoContent);

		let restar = carritoContent.querySelector(".restar");
		restar.addEventListener("click", () => {
			if (serv.cantidad !== 1) {
				serv.cantidad--;
			}
			saveLocal();
			pintarCarrito();
		});


		let sumar = carritoContent.querySelector(".sumar");
		sumar.addEventListener("click", () => {
			serv.cantidad++;
			saveLocal();
			pintarCarrito();
		});

		let eliminar = carritoContent.querySelector(".eliminar_serv");
		eliminar.addEventListener("click", (nombre) => {
			eliminar_servicio(serv.nombre);

		});

	});



	function calcular_total(acu, servicios) {
		acu = acu + (servicios.precio * servicios.cantidad);
		return acu;
	}

	const costoTotal = carrito.reduce(calcular_total, 0);

	const totalBuying = document.createElement("div")
	totalBuying.className = "total_content"
	totalBuying.innerHTML = `Total a pagar: $ ${costoTotal}`;
	modal_container.append(totalBuying)

};


verCarrito.addEventListener("click", pintarCarrito);

const eliminar_servicio = (nombre) => {
	const foundnombre = carrito.find((element) => element.nombre === nombre);

	console.log(foundnombre);

	carrito = carrito.filter((carritoNombre) => {
		return carritoNombre !== foundnombre;
	});
	carritoCounter();
	saveLocal();
	pintarCarrito();

};

const carritoCounter = (nombre) => {
	cantidadCarrito.style.display = "block";

	const carritoLength = carrito.length;

	localStorage.setItem("carritoLength", JSON.stringify(carritoLength));


	cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoCounter();