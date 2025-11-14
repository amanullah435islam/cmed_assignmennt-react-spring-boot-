package com.cmed.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.cmed.model.User;
import com.cmed.service.UserService;

//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    private final AuthenticationManager authenticationManager;
//    private final UserService userService;
//    private final PasswordEncoder passwordEncoder;
//
//    public AuthController(AuthenticationManager authenticationManager, UserService userService, PasswordEncoder passwordEncoder) {
//        this.authenticationManager = authenticationManager;
//        this.userService = userService;
//        this.passwordEncoder = passwordEncoder;
//    }
//    
//    @PostMapping("/register")
//    public ResponseEntity<?> register(@RequestBody User user) {
//        if (userService.existsByUsername(user.getUsername())) {
//            return ResponseEntity.badRequest().body("Username already exists");
//        }
//
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        userService.save(user);
//        return ResponseEntity.ok("User registered");
//    }
//
//    
//    // Login -> we authenticate via AuthenticationManager. Session cookie will be created if success.
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody User user) {
//        try {
//            Authentication auth = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
//            );
//            if (auth.isAuthenticated()) {
//                return ResponseEntity.ok("Login successful");
//            } else {
//                return ResponseEntity.status(401).body("Authentication failed");
//            }
//        } catch (BadCredentialsException ex) {
//            return ResponseEntity.status(401).body("Invalid credentials");
//        }
//    }
//
//    // Optional: logout can be done by client calling /logout (handled by Spring Security)
//}




import com.cmed.config.JwtTokenProvider;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthController(AuthenticationManager authenticationManager, UserService userService,
                          PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

//    @PostMapping("/register")
//    public ResponseEntity<?> register(@RequestBody User user) {
//        if (userService.existsByUsername(user.getUsername())) {
//            return ResponseEntity.badRequest().body("Username already exists");
//        }
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        userService.save(user);
//        return ResponseEntity.ok("User registered successfully");
//    }
    
    
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User request) {
        try {
            // 1. ✅ Username exists check
            if (userService.existsByUsername(request.getUsername())) {
                return ResponseEntity.badRequest().body("Username already exists");
            }
            
            // 2. ✅ Role validation with default
            String userRole = (request.getUserRole() != null && !request.getUserRole().trim().isEmpty()) 
                ? request.getUserRole() 
                : "USER";
            
            // 3. ✅ Create user entity
            User user = new User();
            user.setUsername(request.getUsername());
            user.setPassword(passwordEncoder.encode(request.getPassword())); // ✅ Password encode
            user.setName(request.getName());        
            user.setEmail(request.getEmail());
            user.setUserRole(userRole);
            
            // 4. ✅ Save user
            User savedUser = userService.save(user);
            
            // 5. ✅ Optional: Generate JWT token after registration
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                user.getUsername(), 
                request.getPassword()
            );
            
            String jwtToken = jwtTokenProvider.generateToken(authentication);
            
            // 6. ✅ Return success response with token
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User registered successfully");
            response.put("token", jwtToken);
            response.put("user", Map.of(
                "id", savedUser.getId(),
                "username", savedUser.getUsername(),
                "name", savedUser.getName(),
                "email", savedUser.getEmail(),
                "role", savedUser.getUserRole()
            ));
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );

            String token = jwtTokenProvider.generateToken(auth);
            return ResponseEntity.ok("{\"token\": \"" + token + "\"}");

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}

