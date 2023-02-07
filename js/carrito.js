
const pintarCarrito = () => {


    modal_container.innerHTML = "";
    modal_container.style.display = "flex";
    const modalHeader = document.createElement("tr");
    modalHeader.className = "modal_header Contain d-flex align-items-center bd-highlight mb-2 p-2"
    modalHeader.innerHTML = `<td> <h1 class="modal_header_title">CARRITO </h1> </td>`;
    contenedorModal.append(modalHeader);
    const modalButton = document.createElement("tr");
    modalButton.innerText = "X";
    modalButton.className = "modal_header_button btn btn-danger ";

    modalButton.addEventListener("click", () => {
        modal_container.style.display = "none";
    })

    modalHeader.append(modalButton);


    carrito.forEach((serv) => {
        let carritoContent = document.createElement("tr");
        carritoContent.className = "modal_content contain d-flex align-items-center justify-content-between bd-highlight  ";
        carritoContent.innerHTML = `
        <td> <img src="${serv.img}"</td>
        <td><h6> ${serv.nombre}</h6> </td>
        <td> <p p class="align-items-center justify-content-between bd-highlight mb-2 p-2">$ ${serv.precio}</p ></td>
        <td><span class="restar btn btn-outline-dark"> - </span></td>
        <td><span class="sumar btn btn-outline-dark"> + </span></td>
        <td><p class="align-items-center justify-content-between bd-highlight mb-2 p-2"> cantidad ${serv.cantidad}</p></td>
        <td> <span class="eliminar_serv btn btn-outline-danger"> Eliminar X </span></td>
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

    const totalBuying = document.createElement("tr")
    totalBuying.className = "total_content contain  d-flex align-items-center justify-content-between bd-highlight mb-2 p-2";
    totalBuying.innerHTML = `<td class="justify-content-between bd-highlight mb-2 p-2">Total a pagar: $ ${costoTotal}</td>
	<td> <span class=" btn_contratar eliminar_serv btn btn-success
"> CONTRATAR </span></td>`;
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



