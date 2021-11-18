'use strict';

console.log('producto js tomado');
document.addEventListener("DOMContentLoaded", function() {
    let submitProductoPost = document.querySelector("#producto-agregar-2");
    let submitProductoDelete = document.querySelector("#producto-eliminar-2");
    let submitProductoPut = document.querySelector("#producto-modificar-2");
    submitProductoPost.addEventListener("submit", productoPost);
    submitProductoDelete.addEventListener("submit", productoDelete);
    submitProductoPut.addEventListener("submit", productoPut);

    async function productoPost(e) {
        e.preventDefault();
        let nuevoProducto = {
            "nombre": document.querySelector('#producto-post-nombre-2').value,
            "precio": document.querySelector('#producto-post-precio-2').value,
            "stock": document.querySelector('#producto-post-stock-2').value
            };
        try {
            let r = await fetch(urlProducto,
                {
                    "method": "POST",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(nuevoProducto)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }

    async function productoDelete(e) {
        e.preventDefault();
        let productoBorrar = document.querySelector('#producto-delete-serial-2').value;
        try {
            let r = await fetch(urlProducto + productoBorrar,
                {
                    "method": "DELETE",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(productoBorrar)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }

    async function productoPut(e) {
        e.preventDefault();
        let productoMod = {
            "serial": document.querySelector('#producto-put-serial-2').value,
            "nombre": document.querySelector('#producto-put-nombre-2').value,
            "precio": document.querySelector('#producto-put-precio-2').value,
            "stock": document.querySelector('#producto-put-stock-2').value
            };
        try {
            let r = await fetch(urlProducto + productoMod.serial,
                {
                    "method": "PUT",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(productoMod)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }

});
