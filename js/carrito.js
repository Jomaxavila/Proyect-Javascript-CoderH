
    const pintarCarrito = () => {  
    modal_container.innerHTML = "";
    modal_container.style.display = "flex";
    const modalHeader = document.createElement("tr");
    modalHeader.className = "modal_header container-fluid d-flex align-items-center bd-highlight mb-2 p-2"
    modalHeader.innerHTML = `<td> <h4 class="modal_header_title">CARRITO </h4> </td>`;
    contenedorModal.append(modalHeader);
    const modalButton = document.createElement("tr");
    modalButton.innerText = "X";
    modalButton.className = "modal_header_button btn btn-danger ";
    modalButton.addEventListener("click", () => {
    modal_container.style.display = "none";
    })
    modalHeader.append(modalButton);
    if (carrito.length === 0) {
        const emptyMessage = document.createElement("tr");
        emptyMessage.className ="emptyMessage container d-flex justify-content-center bd-highlight mb-2 p-2 "
        emptyMessage.innerHTML = `<td><h3> SU CARRITO ESTA VACIO </h3></td>`;
        modal_container.append(emptyMessage);
    }

    carrito.forEach((serv) => {
        let carritoContent = document.createElement("tr");
        carritoContent.className = "modal_content container d-flex align-items-center justify-content-be bd-highlight  ";
        carritoContent.innerHTML = `
        <td> <img src="${serv.img}"</td>
        <td><h6> ${serv.nombre}</h6> </td>
        <td> <p p class="align-items-center justify-content-between bd-highlight mb-2 p-2 ">$ ${serv.precio}</p ></td>
        <td><span class="restar btn btn-outline-dark "> - </span></td>
        <td><span class="sumar btn btn-outline-dark"> + </span></td>
        <td><p class="align-items-center justify-content-between bd-highlight mb-2 p-2 "> cantidad ${serv.cantidad}</p></td>
        <td> <span class="eliminar_serv btn btn-outline-danger m-2 p-2 container "> Eliminar X </span></td>
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
    totalBuying.className = "total_content container-fluid d-flex align-items-center justify-content-between bd-highlight mb-2";
    totalBuying.innerHTML = `<td class="justify-content-between bd-highlight mb-2 p-2 animate__animated animate__pulse">Total a pagar: $ ${costoTotal}</td>
	<td> <span class=" btn_contratar eliminar_serv btn btn-success mb-2 p-2
    "> CONTRATAR </span></td>`;
    modal_container.append(totalBuying);
    const btnContratar = document.querySelector(".btn_contratar");
    btnContratar.addEventListener("click", function() {
    const button_contratar = document.createElement("div")
    button_contratar.className = "modalButton_compra container-fluid mb-2 p-2";
    button_contratar.innerHTML = `
    <div class="login container ">
    <h5 class="text-center">REGISTRATE</h5>
    <form class="needs-validation">
        <div class="form-group was-validated">
            <label class="form-label" for="email">Email address</label>
            <input class="form-control" type="email" id="email" required>
            <div class="invalid-feedback">
                Please enter your email address
            </div>
        </div>
        <div class="form-group was-validated">
            <label class="form-label" for="password">Password</label>
            <input class="form-control" type="password" id="password" required>
            <div class="invalid-feedback">
                Please enter your password
            </div>
        </div>
        <div class="form-group form-check">
            <input class="form-check-input" type="checkbox" id="check">
            <label class="form-check-label" for="check">Remember me</label>
        </div>
        <input class="btn btn-success w-100" type="submit" value="SIGN IN">
    </form>

</div>
`;

modal_container.append(button_contratar);
});
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


const key = "AIzaSyDgfkirZ7Z2BS_L4BMUBkwaPzvw6EpGTG4"

fetch ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeS-0I8upefNp-VAuI9sBtg&maxResults=6&order=viewCount&key=" + key)
    .then(response => response.json())
    .then(data => {
    let insertVideo = document.getElementById("cont_videos");
    let videoData = [];

    for (let i = 0; i < 6; i++) {
    let videoId = data.items[i].id.videoId;
    let videoName = data.items[i].snippet.title;
    videoData.push({
        id: videoId,
        name: videoName
    });
    }

    videoData.forEach(video => {
        insertVideo.innerHTML += `
        <h5 class"container d-flex flex-column bd-highlight mb-5 mt-5">${video.name}</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in- picture; web-share"
        allowfullscreen></iframe>
        `;
    });
});
