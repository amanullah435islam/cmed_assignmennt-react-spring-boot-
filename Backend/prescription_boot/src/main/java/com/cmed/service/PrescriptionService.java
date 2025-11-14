package com.cmed.service;

import org.springframework.stereotype.Service;
import com.cmed.model.Prescription;
import com.cmed.repository.PrescriptionRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {

    private final PrescriptionRepository repo;

    public PrescriptionService(PrescriptionRepository repo) {
        this.repo = repo;
    }

    public Prescription save(Prescription p) {
        return repo.save(p);
    }

    public List<Prescription> findAll() {
        return repo.findAll();
    }

    public Optional<Prescription> findById(Long id) {
        return repo.findById(id);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }

    public List<Prescription> findByDateRange(LocalDate start, LocalDate end) {
        return repo.findByPrescriptionDateBetween(start, end);
    }

    public List<Object[]> dayWiseCount() {
        return repo.getDayWisePrescriptionCount();
    }
}
