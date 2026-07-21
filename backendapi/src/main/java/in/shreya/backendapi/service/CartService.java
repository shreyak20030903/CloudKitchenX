package in.shreya.backendapi.service;

import in.shreya.backendapi.io.CartRequest;
import in.shreya.backendapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}
