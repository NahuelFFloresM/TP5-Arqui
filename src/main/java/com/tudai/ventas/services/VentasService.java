package com.tudai.ventas.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tudai.ventas.models.Ventas;
import com.tudai.ventas.repositories.VentasRepository;

@Service
public class VentasService {

	@Autowired
	private VentasRepository ventas;
	
	public List<Ventas> getVentas(){
		return this.ventas.findAll();
	}
	
	public Optional<Ventas> findById(Long serial) {
		return this.ventas.findById(serial);
	}
	
	@Transactional
	public Ventas addVenta(Ventas v) {
		return this.ventas.save(v);
	}
	
	@Transactional
	public void deleteVenta(Long serial) {
		this.ventas.deleteById(serial);
	}


//	@Transactional
//	public void agregarVentas(CSVParser c) {
//		for(CSVRecord row: c) {
//			Ventas venta = new Ventas(row.get("fecha_venta"), row.get("productos"), Integer.parseInt(row.get("id_cliente")));
//			this.addVenta(venta);
//		}
//	}
//
	public List<Ventas> ventasTotalesPorDia(){
		return this.ventas.selectVentasDiarias();
	}
}
