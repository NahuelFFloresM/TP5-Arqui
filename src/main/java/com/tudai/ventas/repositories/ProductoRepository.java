package com.tudai.ventas.repositories;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tudai.ventas.models.Producto;

public interface ProductoRepository extends JpaRepository<Producto,Long> {

	
	@Query("SELECT p FROM Producto p WHERE p.nombre  = :name")
	public List<Producto> findByNombre(String name);
	
	//5) Implemente una consulta para saber cuál fue el producto más vendido.
	//traigo todos los productos ordenados por cantidad de compradores y me quedo solo con el 1ero
	@Query("SELECT p FROM Producto p JOIN p.compradores v ORDER BY size(p.compradores) DESC")
	public List<Producto> selectProductoMasVendido(Pageable pageable);

}
