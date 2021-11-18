'use strict';

console.log('cliente js tomado');
document.addEventListener("DOMContentLoaded", function() {
    let submitClientePost = document.querySelector("#cliente-agregar-2");
    let submitClienteDelete = document.querySelector("#cliente-eliminar-2");
    let submitClientePut = document.querySelector("#cliente-modificar-2");
    submitClientePost.addEventListener("submit", clientePost);
    submitClienteDelete.addEventListener("submit", clienteDelete);
    submitClientePut.addEventListener("submit", clientePut);

    async function clientePost(e) {
        e.preventDefault();
        let nuevoCliente = {
            "documento": document.querySelector('#cliente-post-doc-2').value,
            "nombre": document.querySelector('#cliente-post-nombre-2').value,
            "apellido": document.querySelector('#cliente-post-apellido-2').value
            };
        try {
            let r = await fetch(urlCliente,
                {
                    "method": "POST",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(nuevoCliente)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }


    async function clienteDelete(e) {
        e.preventDefault();
        let clienteBorrar = document.querySelector('#cliente-delete-doc-2').value;
        try {
            let r = await fetch(urlCliente + clienteBorrar,
                {
                    "method": "DELETE",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(clienteBorrar)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }

    async function clientePut(e) {
        e.preventDefault();
        let clienteMod = {
            "documento": document.querySelector('#cliente-put-doc-2').value,
            "nombre": document.querySelector('#cliente-put-nombre-2').value,
            "apellido": document.querySelector('#cliente-put-apellido-2').value
            };
        try {
            let r = await fetch(urlCliente + clienteMod.documento,
                {
                    "method": "PUT",
                    "headers": { "Content-Type": "application/json" },
                    "body": JSON.stringify(clienteMod)
                });
            let json = await r.json();
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    }


});