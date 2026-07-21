import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/contact";

const authHeader = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

export const fetchAllMessages = async () => {
    try {
        const response = await axios.get(API_URL + "/all", authHeader());
        return response.data;
    } catch (error) {
        console.error("Error fetching messages", error);
        throw error;
    }
};