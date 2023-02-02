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
		<p> cantidad ${serv.cantidad}</p>
		`;

		modal_container.append(carritoContent);

		let eliminar = document.createElement("span");
		eliminar.innerText = ("X");
		eliminar.className = ("delete_serv");

		carritoContent.append(eliminar);

		eliminar.addEventListener("click", eliminar_servicio);

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

const eliminar_servicio = () => {
	const foundnombre = carrito.find((element) => element.nombre);

	carrito = carrito.filter((carritoNombre) => {
		return carritoNombre !== foundnombre;
	});
	carritoCounter();
	pintarCarrito();

};

const carritoCounter = () => {
	cantidadCarrito.style.display = "block";
	cantidadCarrito.innerText = carrito.length;

};