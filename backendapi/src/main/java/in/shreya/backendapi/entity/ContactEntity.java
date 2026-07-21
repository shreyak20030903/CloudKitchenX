package in.shreya.backendapi.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "contacts")
@Builder
public class ContactEntity {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String message;
    private LocalDateTime submittedAt;
}