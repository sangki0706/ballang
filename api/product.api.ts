import axios from "axios";

export async function fetchProducts() {
try {
    const response = await axios.get('https://api.ballang.yoojinyoung.com/products', {
        withCredentials: true,
    });

    const data = response.data.result;

    return data;
    } catch (error) {
        console.error(error);
    }
}