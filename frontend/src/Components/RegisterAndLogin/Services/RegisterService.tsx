import axios from "axios";
import { FormValues } from "../Types";
import { REGISTER_USER } from "../../../UrlAdresses";



export const Register = async (formValues: FormValues) => {
    console.log("Wysylam", formValues);
    try {
        const response = await axios.post(REGISTER_USER, formValues);
        console.log("Wysylam", formValues);
    } catch (error) {
        console.error('Error', error);
    }
}
