import { FormValues } from "../Types";

export const ValidateData = (formValues: FormValues): Record<string, string[]> => {
    const errors: Record<string, string[]> = {
        name: [],
        email: [],
        password: [],
        acceptedTerms: [],
    };

    if (!formValues.name.trim()) {
        errors.name.push('Name is required');
    } else if (formValues.name.length < 6) {
        errors.name.push('Name must be at least 6 characters long');
    }

    if (!formValues.email.trim()) {
        errors.email.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        errors.email.push('Email is invalid');
    }

    if (!formValues.password.trim()) {
        errors.password.push('Password is required');
    } else if (formValues.password.length < 6) {
        errors.password.push('Password must be at least 6 characters long');
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i.test(formValues.password)) {
        errors.password.push('Password must contain at least one uppercase letter, one lowercase letter, and one number');
    }

    if (!formValues.acceptedTerms) {
        errors.acceptedTerms = ['You must accept the terms and conditions'];
    }

    return errors;
};
