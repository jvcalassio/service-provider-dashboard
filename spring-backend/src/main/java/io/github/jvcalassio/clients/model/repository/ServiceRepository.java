package io.github.jvcalassio.clients.model.repository;

import io.github.jvcalassio.clients.model.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {

}