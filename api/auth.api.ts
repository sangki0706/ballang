import { signUpPage } from "@/schema/auth.schema";
import axios from "axios";

export async function SignUp(data: signUpPage) {
    try{
        const response = await axios.post("http://localhost:3000/api/auth/sign-up", data);
        return response.data;
    }catch(error){
        console.error(error);
    }
    

}