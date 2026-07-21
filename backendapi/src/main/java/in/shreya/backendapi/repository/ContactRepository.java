package in.shreya.backendapi.repository;

import in.shreya.backendapi.entity.ContactEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<ContactEntity, String> {
}