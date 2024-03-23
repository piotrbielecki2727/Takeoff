import { FormValues } from "../Types";

export const ValidateData = (formValues: FormValues, validation: string): Record<string, string[]> => {
    const errors: Record<string, string[]> = {
        name: [],
        email: [],
        password: [],
        acceptedTerms: [],
    };


    if (validation === 'register') {
        if (!formValues.name.trim()) {
            errors.name.push('Name is required');
        } if (formValues.name.length < 3) {
            errors.name.push('Name must be at least 3 characters long');
        }

        if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email.push('Email is invalid');
        }

        if (formValues.password.length < 6) {
            errors.password.push('Password must be at least 6 characters long');
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i.test(formValues.password)) {
            errors.password.push('Password must contain at least one uppercase letter, one lowercase letter, and one number');
        }

        if (!formValues.acceptedTerms) {
            errors.acceptedTerms = ['You must accept the terms and conditions'];
        }


    }

    if (!formValues.email.trim()) {
        errors.email.push('Email is required');
    }


    if (!formValues.password.trim()) {
        errors.password.push('Password is required');
    }

    return errors;
};
