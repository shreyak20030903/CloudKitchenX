package in.shreya.backendapi.controller;

import in.shreya.backendapi.entity.ContactEntity;
import in.shreya.backendapi.io.ContactRequest;
import in.shreya.backendapi.service.ContactService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@AllArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void submitContact(@RequestBody ContactRequest request) {
        contactService.submitContactForm(request);
    }

    //admin panel
    @GetMapping("/all")
    public List<ContactEntity> getAllMessages() {
        return contactService.getAllMessages();
    }
}