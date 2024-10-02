import axios from "axios";

export async function fetchBrands() {
    try{
        const response = await axios.get("https://api.ballang.yoojinyoung.com/brands" , {
            withCredentials: true,
        });
        return response.data.result;
    }catch(error){
        console.error(error);
    }

}
export async function fetchBrand(id: number) {
    try{
        const response = await axios.get(`https://api.ballang.yoojinyoung.com/brands/${id}` , {
            withCredentials: true,
        });
        return response.data.result;
    }catch(error){
        console.error(error);
    }
}