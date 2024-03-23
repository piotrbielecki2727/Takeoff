import axios, { AxiosError } from "axios";
import { FormValues } from "../Types";
import { REGISTER_USER } from "../../../UrlAdresses";

export const Register = async (formValues: FormValues) => {
    try {
        const response = await axios.post(REGISTER_USER, formValues);
        if (response.data.Success) {
            console.log(response.data.Success)
        }
        if (response.data.Error) {
            console.log(response.data.Error)
        }
    }
    catch (error) {
        console.error("There is error.", error);

    }
}
