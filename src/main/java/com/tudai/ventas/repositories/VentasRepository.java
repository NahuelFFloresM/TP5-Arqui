package com.tudai.ventas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tudai.ventas.models.Ventas;

public interface VentasRepository  extends JpaRepository<Ventas,Long>{

	@Query("SELECT p FROM Producto p WHERE p.nombre  = :name")
	public List<Ventas> findByNombre(String name);
	
	//muestro la fecha de venta, la cantidad de productos que se vendieron y de la tabla productos calculo el monto que recauo cada producto haciendo
    //la suma de compradores * el precio del producto en cuestion

	@Query(value="SELECT v.serial_venta, v.documento,v.fecha_venta, v.serial, COUNT(v.fecha_venta) AS cantidad_productos"
			+ " FROM ventas AS v GROUP BY v.fecha_venta,v.serial_venta ORDER BY v.fecha_venta DESC",nativeQuery = true)
    public List<Ventas> selectVentasDiarias();
}


//    @Query("SELECT v.fecha_venta, COUNT(v.serial_venta) AS cantidad_productos"
//       + " FROM Ventas AS v GROUP BY v.fecha_venta ORDER BY v.fecha_venta DESC")