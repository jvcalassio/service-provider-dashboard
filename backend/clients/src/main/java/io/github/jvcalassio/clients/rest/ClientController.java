package io.github.jvcalassio.clients.rest;

import io.github.jvcalassio.clients.model.entity.Client;
import io.github.jvcalassio.clients.model.repository.ClientRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Client save(@RequestBody @Valid Client client) {
        return repository.save(client);
    }

    @GetMapping
    public List<Client> findAll() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public Client findById(@PathVariable Integer id) {
        return repository
                    .findById(id)
                    .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Client not found") );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        repository
            .findById(id)
            .map(client -> {
                repository.delete(client);
                return Void.TYPE;
            })
            .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Client not found") );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Integer id, @RequestBody @Valid Client newClient) {
        repository
            .findById(id)
            .map(client -> {
                newClient.setId(client.getId());
                return repository.save(newClient);
            })
            .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Client not found") );
    }
}