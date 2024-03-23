import React, { useState } from "react";
import './RegisterForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, InputGroup } from "react-bootstrap";
import ChangeFormState from "../Utils/ChangeFormState";
import { useFormValues } from "../Utils/ChangeFormValues";
import { Register } from "../Services/RegisterService";
import { ValidateData } from "../Utils/DataValidation";


interface RegisterFormProps {
    formState: string,
    setFormState: React.Dispatch<React.SetStateAction<string>>;
}


const RegisterForm: React.FC<RegisterFormProps> = ({ formState, setFormState }) => {

    const { formValues, onChangeFormValues } = useFormValues();
    const [errors, setErrors] = useState<any>({});
    const [registerValidation, setRegisterValidation] = useState<string>('register');


    const handleChangeFormState = () => {
        ChangeFormState(formState, setFormState);
    }


    const handleOnSubmitForm = (event: {
        currentTarget: any; preventDefault: () => void;
    }) => {
        event.preventDefault();
        const validationErrors = ValidateData(formValues, registerValidation)
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key].length === 0)) {
            Register(formValues);
        }
    }


    return (
        <>
            <Form className="SignupForm" onSubmit={handleOnSubmitForm}>
                <h3 className="Hellotitle"></h3>
                <h4 className='title'>Create your account</h4>
                <hr></hr>

                <Form.Group className="FormGroup" controlId="FormGroupName">
                    <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faUser} /></Form.Label>
                    <Form.Control
                        value={formValues.name}
                        name="name"
                        onChange={onChangeFormValues}
                        className="FormControl" type="text"
                        placeholder="Enter your name..."
                    />
                </Form.Group>
                {errors.name && <p className="FormsErrors">{errors.name}</p>}

                <Form.Group className="FormGroup" controlId="FormGroupEmail">
                    <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faEnvelope} /></Form.Label>
                    <Form.Control
                        value={formValues.email}
                        name="email"
                        onChange={onChangeFormValues}
                        className="FormControl"
                        type="email"
                        placeholder="Enter your email..."

                    />
                </Form.Group>
                {errors.email && <p className="FormsErrors">{errors.email}</p>}

                <Form.Group className="FormGroup" controlId="FormGroupPassword">
                    <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faLock} /></Form.Label>
                    <Form.Control
                        value={formValues.password}
                        name="password"
                        onChange={onChangeFormValues}
                        className="FormControl"
                        type="password"
                        placeholder="Enter your password..."
                    />
                </Form.Group>

                {errors.password && <p className="FormsErrors">{errors.password}</p>}
                <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                    <Form.Check

                        name="acceptedTerms"
                        onChange={onChangeFormValues}
                        className="RadioCheck"
                        type="radio"
                        label="Accept the terms and conditions"
                    />
                </Form.Group>

                {errors.acceptedTerms && <p className="CheckFormError">{errors.acceptedTerms}</p>}

                <Button className="signUpButton" type="submit">Sign up</Button>
            </Form >
            <div className="signinsignupChange">You have an account? Click <a className="LinkText" onClick={handleChangeFormState}>here </a> to log in!</div>
        </>
    )
};

export default RegisterForm;