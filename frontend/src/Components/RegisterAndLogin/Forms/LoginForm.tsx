import React, { useState } from "react";
import './RegisterForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Image, Button, Form, Fade } from "react-bootstrap";
import apple from '../../../Assets/apple.png';
import google from '../../../Assets/google.png';
import fb from '../../../Assets/fb.png';
import PrintHello from "../Utils/PrintHello";
import ChangeFormState from "../Utils/ChangeFormState";
import { useFormValues } from "../Utils/ChangeFormValues";
import { ValidateData } from "../Utils/DataValidation";
import { Login } from "../Services/LoginService";


interface LoginFormProps {
    formState: string,
    setFormState: React.Dispatch<React.SetStateAction<string>>;
}


const LoginForm: React.FC<LoginFormProps> = ({ formState, setFormState }) => {

    const { formValues, onChangeFormValues } = useFormValues();
    const [errors, setErrors] = useState<any>({});
    const [loginValidation, setLoginValidation] = useState<string>('login');

    const handleChangeFormState = () => {
        ChangeFormState(formState, setFormState);
    }

    const handleOnSubmitForm = (event: {
        currentTarget: any; preventDefault: () => void;
    }) => {
        event.preventDefault();
        const validationErrors = ValidateData(formValues, loginValidation)
        setErrors(validationErrors);
        if (Object.keys(validationErrors).every(key => validationErrors[key].length === 0)) {
            Login(formValues);
        }
    }





    return (
        <>
            <Form className="SignupForm" onSubmit={handleOnSubmitForm}>
                <Fade in>
                    <PrintHello />
                </Fade>
                <h4 className='title'>Sign in to your account</h4>
                <hr></hr>
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


                <span className="ForgotPasswordText">Forgot password?</span>
                <Button className="signInButton" type="submit">Sign in</Button>
            </Form >
            <div className="signinsignupChange">Don't have an account? Click <a className="LinkText" onClick={handleChangeFormState}> here </a> to sign up!</div>
            <Container className="OrSignInWithContainer">
                <Row>
                    <Col><Image className='OrSignInWithImages' src={google}></Image></Col>
                    <Col><Image className='OrSignInWithImages' src={fb}></Image></Col>
                    <Col><Image className='OrSignInWithImages' src={apple}></Image></Col>
                </Row>
            </Container>
        </>
    )
};

export default LoginForm;