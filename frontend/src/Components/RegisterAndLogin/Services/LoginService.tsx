import axios from "axios";
import { FormValues } from "../Types";
import { LOGIN_USER } from "../../../UrlAdresses";



export const Login = async (formValues: FormValues) => {
    try {
        const response = await axios.post(LOGIN_USER, formValues);
        if (response.data.Success) {
            console.log(response.data.Success);
        }
        if (response.data.Error) {
            console.log(response.data.Error);
        }
    }
    catch (error) {
        console.error("There is error.", error);

    }
}
