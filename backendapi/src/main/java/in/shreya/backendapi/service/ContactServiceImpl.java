package in.shreya.backendapi.service;

import in.shreya.backendapi.entity.ContactEntity;
import in.shreya.backendapi.io.ContactRequest;
import in.shreya.backendapi.repository.ContactRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Override
    public void submitContactForm(ContactRequest request) {
        ContactEntity entity = ContactEntity.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .message(request.getMessage())
                .submittedAt(LocalDateTime.now())
                .build();
        contactRepository.save(entity);
    }
    @Override
    public List<ContactEntity> getAllMessages() {
        return contactRepository.findAll(Sort.by(Sort.Direction.DESC, "submittedAt"));
    }
}