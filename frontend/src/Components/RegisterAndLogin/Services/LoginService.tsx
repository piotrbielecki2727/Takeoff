import axios from "axios";
import { FormValues } from "../Types";
import { LOGIN_USER } from "../../../UrlAdresses";
import Cookies from 'js-cookie';
import { setToken } from "../../../Utils/AuthUtils";




export const Login = async (formValues: FormValues) => {
    try {
        const response = await axios.post(LOGIN_USER, formValues);
        const { data } = response;
        if (data.Success) {
            const { token } = data;
            setToken(token);
            return (data);
        }
        if (response.data.Error) {
            return (data);
        }
    }
    catch (error) {
        console.error("There was an error while logging in.", error);
        throw error;

    }
}
