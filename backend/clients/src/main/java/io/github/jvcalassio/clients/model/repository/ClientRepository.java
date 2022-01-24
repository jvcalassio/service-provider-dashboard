package io.github.jvcalassio.clients.model.repository;

import io.github.jvcalassio.clients.model.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}