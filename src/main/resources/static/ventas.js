'use strict';

console.log('ventas js tomado');
document.addEventListener("DOMContentLoaded", function() {
    let submitVentasPost = document.querySelector("#ventas-agregar-2");
    let submitVentasDelete = document.querySelector("#ventas-eliminar-2");
    let submitVentasPut = document.querySelector("#ventas-modificar-2");
    submitVentasPost.addEventListener("submit", ventasPost);
    submitVentasDelete.addEventListener("submit", ventasDelete);
    submitVentasPut.addEventListener("submit", ventasPut);

    async function ventasPost(e) {
        e.preventDefault();
        let nuevaVenta = {
            "fecha": document.querySelector('#ventas-post-fecha-2').value,
            "producto": document.querySelector('#ventas-post-prod-2').value,
            "cliente": document.querySelector('#ventas-post-cliente-2').value
            };
        try {
            let r = await fetch(urlVentas,
                {
                    "method": "POST",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(nuevaVenta)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }


    async function ventasDelete(e) {
        e.preventDefault();
        let ventaBorrar = document.querySelector('#ventas-delete-serial-2').value;
        try {
            let r = await fetch(urlVentas + ventaBorrar,
                {
                    "method": "DELETE",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(ventaBorrar)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }

    async function ventasPut(e) {
        e.preventDefault();
        let ventaMod = {
            "serial-venta": document.querySelector('#ventas-put-serial-2').value,
            "fecha": document.querySelector('#ventas-put-fecha-2').value,
            "producto": document.querySelector('#ventas-put-prod-2').value,
            "cliente": document.querySelector('#ventas-put-cliente-2').value
            };
        try {
            let r = await fetch(urlVentas + ventaMod["serial-venta"],
                {
                    "method": "PUT",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(ventaMod)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }


});
