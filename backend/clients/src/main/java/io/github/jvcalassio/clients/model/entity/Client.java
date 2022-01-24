package io.github.jvcalassio.clients.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    @NotEmpty(message = "{field.name.required}")
    private String name;

    @Column(name = "created_at", updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate createdAt;

    @PrePersist
    public void prePersist() {
        this.setCreatedAt(LocalDate.now());
    }
}