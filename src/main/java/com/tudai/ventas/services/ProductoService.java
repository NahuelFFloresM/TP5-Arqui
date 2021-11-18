package com.tudai.ventas.services;

import java.util.List;
import java.util.Optional;

import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tudai.ventas.models.Producto;
import com.tudai.ventas.repositories.ProductoRepository;

@Service
public class ProductoService{
	
	@Autowired
	private ProductoRepository productos;	
	
	public Optional<Producto> findById(Long serial) {
		return this.productos.findById(serial);		 
	}
	
	public List<Producto> getProductos(){
		return this.productos.findAll();
	}
	
	@Transactional
	public boolean addProducto(Producto p) {
		return this.productos.save(p) != null;
	}
	
	@Transactional	
	public Producto saveProducto(Producto p) {
		return this.productos.save(p);
	}
	
	@Transactional
	public void deleteProducto(Long serial) {
		this.productos.deleteById(serial);
	}

//	@Transactional
//	public void agregarProductos(CSVParser c) {
//		for(CSVRecord row: c) {
//			Producto producto = new Producto(Long.parseLong(row.get("serial")), row.get("nombre"), Integer.parseInt(row.get("precio")), Long.parseLong(row.get("stock")));
//			this.addProducto(producto);
//		}
//	}

	public List<Producto> getProdMasVend(){
		return this.productos.selectProductoMasVendido(PageRequest.of(0,1));
	}
}
