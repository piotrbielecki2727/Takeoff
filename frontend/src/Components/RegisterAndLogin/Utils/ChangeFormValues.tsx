import { useState, ChangeEvent } from 'react';
import { FormValues } from '../Types';


export const useFormValues = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        password: '',
        acceptedTerms: false,
    })



    const onChangeFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormValues(prevState => ({
            ...prevState,
            [name]: newValue,
        }))
        ;
    }
    return { formValues, onChangeFormValues };
};
