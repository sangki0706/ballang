import { Product } from "@/schema/product.schema";
import axios from "axios";

export async function fetchProducts() {
    try {
        const response = await axios.get('https://api.ballang.yoojinyoung.com/products', {
        withCredentials: true,
        });
        return response.data.result;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }

}

export async function fetchProductById(id: number) {
    try {
        const response = await axios.get(`https://api.ballang.yoojinyoung.com/products/${id}`, {
        withCredentials: true,
        });
        console.log(response.data.result);
        return response.data.result;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        return null;
    }
}
