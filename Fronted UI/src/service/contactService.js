import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL + "/contact";

export const submitContactForm = async (data) => {
    try {
        await axios.post(API_URL, data);
    } catch (error) {
        console.error("Error submitting contact form", error);
        throw error;
    }
};