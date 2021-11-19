'use strict';

console.log('reportes js tomado');
document.addEventListener("DOMContentLoaded", function() {
    let submit3 = document.querySelector("#reporte-compras-3");
    let submit4 = document.querySelector("#reporte-ventas-4");
    let submit5 = document.querySelector("#producto-mas-vendido-5");

    submit3.addEventListener("click", reporteCompras);
    submit4.addEventListener("click", reporteVentasPorDia);
    submit5.addEventListener("click", productoMasVendido);
    
    async function reporteCompras(){
        try {
            let r = await fetch(urlCliente + "totalcompras");
            let headTabla = document.querySelector("#th-3"); //tomamos el elemento del DOM
            let bodyTabla = document.querySelector("#tb-3");
            headTabla.innerHTML = "" //vaciamos la tabla (por precaución)
            bodyTabla.innerHTML = ""
            let json = await r.json(); //convertimos la respuesta en un json
            let filaHead = document.createElement('TR');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            th1.innerHTML = "Documento";
            th2.innerHTML = "Nombre";
            th3.innerHTML = "Apellido";
            th4.innerHTML = "Monto compras";
            filaHead.appendChild(th1);
            filaHead.appendChild(th2);
            filaHead.appendChild(th3);
            filaHead.appendChild(th4);
            headTabla.appendChild(filaHead);
            for (let index = 0; index < json.length; index++) { //recorremos el arreglo
                let fila = document.createElement('TR'); //creamos la fila
                let td1 = document.createElement('td'); //creamos la celda para "documento"
                let td2 = document.createElement('td'); //creamos la celda para "nombre"
                let td3 = document.createElement('td'); //creamos la celda para "apellido"
                let td4 = document.createElement('td'); //creamos la celda para "totalcompras"
                td1.innerHTML = json[index].documento;
                td2.innerHTML = json[index].nombre;
                td3.innerHTML = json[index].apellido;
                td4.innerHTML = json[index].total_Compras;
                fila.appendChild(td1) //agrego cada celda a la fila
                fila.appendChild(td2)
                fila.appendChild(td3)
                fila.appendChild(td4)
                bodyTabla.appendChild(fila);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function reporteVentasPorDia(){
        try {
            let r = await fetch(urlVentas + "total/dia");
            let headTabla = document.querySelector("#th-4");
            let bodyTabla = document.querySelector("#tb-4");
            headTabla.innerHTML = ""
            bodyTabla.innerHTML = ""
            let json = await r.json();
            let filaHead = document.createElement('TR');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            // let th4 = document.createElement('th');
            th1.innerHTML = "Fecha";
            th2.innerHTML = "Producto/s";
            th3.innerHTML = "Cliente";
            // th4.innerHTML = "Serial Venta";
            let jsonProd;
            console.log(json);
            for (let index = 0; index < json.length; index++) {
                let fila = document.createElement('TR');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                td1.innerHTML = json[index].fecha_venta;
                td2.innerHTML = json[index].productos.nombre;
                // let jsonProd = json[index].productos;
                // for (let j = 0; j < jsonProd.length; j++)
                //     td2.innerHTML .= jsonProd[j].nombre;
                td3.innerHTML = json[index].clientes.documento;
                fila.appendChild(td1)
                fila.appendChild(td2)
                fila.appendChild(td3)
                bodyTabla.appendChild(fila);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function productoMasVendido(){
        try {
            let r = await fetch(urlProducto + "masvendido");
            // let input = document.querySelector("#input-prod-mas-vendido-5");
            // input.innerHTML = "";
            let inputContainer = document.querySelector("#container-5");
            inputContainer.innerHTML = "";
            let input = document.createElement('input');
            input.setAttribute('class', 'form-control col-md-3 mb-2');
            input.setAttribute('id', 'input-prod-mas-vendido-5');
            input.setAttribute('type', 'text');
            input.setAttribute('name','producto');
            let json = await r.json();
            console.log(json);
            input.value = json[0].nombre;
            inputContainer.appendChild(input);
        } catch (e) {
            console.log(e);
        }
    }

});