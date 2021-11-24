package com.tudai.ventas.tests;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import com.tudai.ventas.controller.ClienteController;

@SpringBootTest
public class SmokeTest {

	@Autowired
	private ClienteController controller;

	@Test
	public void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
	}
}