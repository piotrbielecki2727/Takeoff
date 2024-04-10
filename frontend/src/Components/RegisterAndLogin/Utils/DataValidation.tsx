import { FormValues } from "../Types";

export const ValidateData = async (formValues: FormValues, validation: string): Promise<Record<string, string[]>> => {
    const errors: Record<string, string[]> = {
        name: [],
        email: [],
        password: [],
        acceptedTerms: [],
        emailExist: [],
    };


    if (validation === 'register') {

        if (formValues.name.length < 3) {
            errors.name.push('Name must be at least 3 characters long');
        }

        if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email.push('Email is invalid (missing @)');
        }

        if (formValues.password.length < 6) {
            errors.password.push('Password must be at least 6 characters long');
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i.test(formValues.password)) {
            errors.password.push('Your password is too weak! ');
        }

        if (!formValues.acceptedTerms) {
            errors.acceptedTerms = ['You must accept the terms and conditions'];
        }

    }

    else {
        if (!formValues.email.trim()) {
            errors.email.push('Email is required');
        }


        if (!formValues.password.trim()) {
            errors.password.push('Password is required');
        }
    }



    return errors;
};
