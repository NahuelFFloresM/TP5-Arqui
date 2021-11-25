'use strict';

//URL: Declaramos la variable global para usar la URL
let url = "https://tp5-tudai.herokuapp.com"
let urlCliente = url + "cliente/"
let urlProducto = url + "producto/"
let urlVentas = url + "ventas/"

console.log('main js tomado');
document.addEventListener("DOMContentLoaded", function() {
    let selectEntidad = document.querySelector("#select-entidad-2");
    let selectMetodo = document.querySelector("#select-metodo-2");
    let formToogles = document.querySelectorAll(".form-toogles");
    let formClientePost = document.querySelector("#cliente-agregar-2");
    let formClienteDelete = document.querySelector("#cliente-eliminar-2");
    let formClientePut = document.querySelector("#cliente-modificar-2");
    let formProductoPost = document.querySelector("#producto-agregar-2");
    let formProductoDelete = document.querySelector("#producto-eliminar-2");
    let formProductoPut = document.querySelector("#producto-modificar-2");
    let formVentasPost = document.querySelector("#ventas-agregar-2");
    let formVentasDelete = document.querySelector("#ventas-eliminar-2");
    let formVentasPut = document.querySelector("#ventas-modificar-2");

    selectEntidad.addEventListener("change", mostrarForm);
    selectMetodo.addEventListener("change", mostrarForm);
        
    function mostrarForm() {
        for (var i = 0; i < formToogles.length; ++i)
            formToogles[i].setAttribute("hidden","");
        if (selectEntidad.value == "Cliente" && selectMetodo.value == "Post")
            formClientePost.removeAttribute("hidden");
        else if (selectEntidad.value == "Cliente" && selectMetodo.value == "Delete")
            formClienteDelete.removeAttribute("hidden");
        else if (selectEntidad.value == "Cliente" && selectMetodo.value == "Put")
            formClientePut.removeAttribute("hidden");
        else if (selectEntidad.value == "Producto" && selectMetodo.value == "Post")
            formProductoPost.removeAttribute("hidden");
        else if (selectEntidad.value == "Producto" && selectMetodo.value == "Delete")
            formProductoDelete.removeAttribute("hidden");
        else if (selectEntidad.value == "Producto" && selectMetodo.value == "Put")
            formProductoPut.removeAttribute("hidden");
        else if (selectEntidad.value == "Ventas" && selectMetodo.value == "Post")
            formVentasPost.removeAttribute("hidden");
        else if (selectEntidad.value == "Ventas" && selectMetodo.value == "Delete")
            formVentasDelete.removeAttribute("hidden");
        else if (selectEntidad.value == "Ventas" && selectMetodo.value == "Put")
            formVentasPut.removeAttribute("hidden");
    }


});
