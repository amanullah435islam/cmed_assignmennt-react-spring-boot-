package com.cmed.prescription_boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.cmed")
@EntityScan(basePackages = { "com.cmed.model" })
@EnableJpaRepositories(basePackages = { "com.cmed" })
public class PrescriptionBootApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(PrescriptionBootApplication.class, args);
	}

	
	
	//	  // create a PasswordEncoder bean (used in SecurityConfig and for initializing users)
	//	    @Bean
	//	    public PasswordEncoder passwordEncoder() {
	//	        return new BCryptPasswordEncoder();
	//	    }

	
	
	//   // Optional: seed some users on startup
	//	    @Bean
	//	    CommandLineRunner init(UserRepository userRepository, PasswordEncoder passwordEncoder) {
	//	        return args -> {
	//	            if (userRepository.count() == 0) {
	//	                userRepository.save(new User("admin", passwordEncoder.encode("admin123"), "Admin User", "ADMIN"));
	//	                userRepository.save(new User("doctor", passwordEncoder.encode("doc123"), "Dr. John", "DOCTOR"));
	//	            }
	//	        };
	//	    }
}
