package in.shreya.backendapi.service;

import in.shreya.backendapi.io.UserRequest;
import in.shreya.backendapi.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
