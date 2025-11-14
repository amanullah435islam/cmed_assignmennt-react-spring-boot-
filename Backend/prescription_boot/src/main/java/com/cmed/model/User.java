package com.cmed.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
//  @Column(name = "name")
//  private String name ;
  
   @Column(nullable = false)
   private String name;
    
    @Column(nullable = false, unique = true)
    private String username;
    
    @Column(nullable = false)
    private String password; // stored BCrypt hashed
    
    @Column(nullable = false)
    private String email; 
    
    @Column(name = "user_role", nullable = false)
    private String userRole;   // "ADMIN", "DOCTOR", etc.

    public User() {}
//    public User() {
//        this.userRole = "USER"; // Default constructor-এও set করুন
//    }
    public User(String username, String password, String name, String userRole, String email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.userRole = userRole;
        this.email = email;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

    
}
