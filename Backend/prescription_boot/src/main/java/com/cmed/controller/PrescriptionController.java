package com.cmed.controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.cmed.model.Prescription;
import com.cmed.service.PrescriptionService;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/auth/prescriptions")
public class PrescriptionController {

    private final PrescriptionService service;

    public PrescriptionController(PrescriptionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Prescription> getAll(@RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                     @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        if (startDate != null && endDate != null) {
            return service.findByDateRange(startDate, endDate);
        }
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prescription> getById(@PathVariable Long id) {
        return service.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Prescription create(@RequestBody Prescription prescription) {
        return service.save(prescription);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prescription> update(@PathVariable Long id, @RequestBody Prescription prescription) {
        return service.findById(id).map(existing -> {
            prescription.setId(id);
            return ResponseEntity.ok(service.save(prescription));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/report/daywise")
    public List<Object[]> dayWiseReport() {
        return service.dayWiseCount();
    }
}
