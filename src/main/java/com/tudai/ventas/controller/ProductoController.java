package com.tudai.ventas.controller;

import java.util.Optional;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tudai.ventas.models.Producto;
import com.tudai.ventas.services.ProductoService;

@RestController
@RequestMapping("producto")
@Api(description = "Api Rest de Producto", tags = "Producto")
public class ProductoController {

	@Autowired
	private ProductoService service;
	private static Logger log = LoggerFactory.getLogger(ProductoController.class);


	@ApiOperation(value = "Obtener todos los productos", response = Iterable.class)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 401, message = "Acceso no autorizado"),
			@ApiResponse(code = 403, message = "Acceso prohibido"),
			@ApiResponse(code = 404, message = "No encontrado"),
			@ApiResponse(code = 500, message = "Error interno del servidor")
	})
	@GetMapping("")
	public Iterable<Producto> getProductos(){return service.getProductos();}


	@ApiOperation(value = "Obtener el producto más vendido", response = Iterable.class)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 401, message = "Acceso no autorizado"),
			@ApiResponse(code = 403, message = "Acceso prohibido"),
			@ApiResponse(code = 404, message = "No encontrado"),
			@ApiResponse(code = 500, message = "Error interno del servidor")
	})
	@GetMapping("/masvendido")
	public Iterable<Producto> getProductoMasVendido(){return service.getProdMasVend();}


	@ApiOperation(value = "Obtener un producto dado su serial", response = ResponseEntity.class)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 401, message = "Acceso no autorizado"),
			@ApiResponse(code = 403, message = "Acceso prohibido"),
			@ApiResponse(code = 404, message = "No encontrado"),
			@ApiResponse(code = 500, message = "Error interno del servidor")
	})
	@GetMapping("/{serial}")
	public ResponseEntity<Producto> getProductoById(@PathVariable long serial){
		Optional<Producto> producto = this.service.findById(serial);
		if (producto.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(producto.get(),HttpStatus.OK);
		}
	}


	@ApiOperation(value = "Agregar un nuevo producto", response = ResponseEntity.class)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 401, message = "Acceso no autorizado"),
			@ApiResponse(code = 403, message = "Acceso prohibido"),
			@ApiResponse(code = 404, message = "No encontrado"),
			@ApiResponse(code = 500, message = "Error interno del servidor")
	})
	@PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	public ResponseEntity<Producto> addProducto(@RequestBody Producto p){
		boolean ok = this.service.addProducto(p);
		if (!ok) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		} else {
			return new ResponseEntity<Producto>(p,HttpStatus.OK);
		}
		
	}


	@ApiOperation(value = "Modificar un producto dado su serial", response = Producto.class)
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 401, message = "Acceso no autorizado"),
			@ApiResponse(code = 403, message = "Acceso prohibido"),
			@ApiResponse(code = 404, message = "No encontrado"),
			@ApiResponse(code = 500, message = "Error interno del servidor")
	})
	@PutMapping("/{serial}")
	Producto replaceProducto(@RequestBody Producto newp,@PathVariable Long serial){
		Optional<Producto> p = service.findById(serial);
		if (!p.isEmpty()) {
			this.service.deleteProducto(serial);
			return this.service.saveProducto(newp);
		} else {
			return new Producto();
		}
	}


	@ApiOperation(value = "Eliminar un producto dado su serial")
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "OK"),
			@ApiResponse(code = 401, message = "Acceso no autorizado"),
			@ApiResponse(code = 403, message = "Acceso prohibido"),
			@ApiResponse(code = 404, message = "No encontrado"),
			@ApiResponse(code = 500, message = "Error interno del servidor")
	})
	@DeleteMapping("/{serial}")
	void deleteProducto(@PathVariable Long serial) {
		this.service.deleteProducto(serial);
	}
}
