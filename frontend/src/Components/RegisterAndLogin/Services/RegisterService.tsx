import axios from "axios";
import { REGISTER_USER } from "../../../UrlAdresses";
import { FormValues } from "../Types";



export const Register = async (formValues: FormValues) => {
    try {
        console.log("Ślę", formValues);
        const response = await axios.post(REGISTER_USER, formValues);
        console.log("Ślę", response.data);
    } catch (error) {
        console.error('Error', error);
    }
}
