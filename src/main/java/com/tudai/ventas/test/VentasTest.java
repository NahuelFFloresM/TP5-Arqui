package com.tudai.ventas.test;

import com.tudai.ventas.controller.ClienteController;
import com.tudai.ventas.controller.ProductoController;
import com.tudai.ventas.controller.VentasController;
import com.tudai.ventas.models.Cliente;
import com.tudai.ventas.models.Producto;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class VentasTest {
    ClienteController clienteController;
    ProductoController productoController;
    VentasController ventasController;

    @Test
    public void altaProductoOK() {
        Producto puerro = new Producto(123, "puerro", 100, 10);
        productoController.addProducto(puerro);
        assertEquals(puerro.getSerial(), productoController.getProductoById(123));
    }


}
