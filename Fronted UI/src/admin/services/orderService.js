import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/orders";

const authHeader = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

export const fetchAllOrders = async () => {
    try {
        const response = await axios.get(API_URL + "/all", authHeader());
        return response.data;
    } catch (error) {
        console.error('Error occured while fetching the orders', error);
        throw error;
    }
}

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axios.patch(
            `${API_URL}/status/${orderId}?status=${status}`,
            null,
            authHeader()
        );
        return response.status === 200;
    } catch (error) {
        console.error('Error occured while updating the status', error);
        throw error;
    }
}