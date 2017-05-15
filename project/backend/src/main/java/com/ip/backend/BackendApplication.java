package com.ip.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.guava.GuavaCacheManager;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	/*
 * GuavaCacheManager is a different implementation of the CacheManager ,
 * witch is more efficient for production enviorments
 */
	@Bean
	public CacheManager cacheManager() {
		return new GuavaCacheManager("greetings");
	}
}
