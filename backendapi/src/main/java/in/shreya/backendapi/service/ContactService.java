package in.shreya.backendapi.service;

import in.shreya.backendapi.entity.ContactEntity;
import in.shreya.backendapi.io.ContactRequest;

import java.util.List;

public interface ContactService {
    void submitContactForm(ContactRequest request);
    List<ContactEntity> getAllMessages();
}