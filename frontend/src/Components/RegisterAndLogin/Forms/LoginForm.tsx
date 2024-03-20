import React, { useState } from "react";
import './RegisterForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Image, Button, Form, Fade } from "react-bootstrap";
import apple from '../../../Assets/apple.png';
import google from '../../../Assets/google.png';
import fb from '../../../Assets/fb.png';
import PrintHello from "../Utils/PrintHello";
import ChangeFormState from "../Utils/ChangeFormState";
import { useFormValues } from "../Utils/ChangeFormValues";
import { Register } from "../Services/RegisterService";


interface LoginFormProps {
    formState: string,
    setFormState: React.Dispatch<React.SetStateAction<string>>;
}


const LoginForm: React.FC<LoginFormProps> = ({ formState, setFormState }) => {

    const { formValues, onChangeFormValues } = useFormValues();
    const [validated, setValidated] = useState<boolean>(false);


    const handleChangeFormState = () => {
        ChangeFormState(formState, setFormState);
    }

    const handleOnSubmitForm = (event: {
        currentTarget: any; preventDefault: () => void;
    }) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            console.log('niezła chujnia');
        }
        else {
            Register(formValues);

        }
        setValidated(true);
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
                        required
                    />
                    <Form.Control.Feedback className="Feedback" type="invalid">Enter your email!</Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="FormGroup" controlId="FormGroupPassword">
                    <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faLock} /></Form.Label>
                    <Form.Control
                        value={formValues.password}
                        name="password"
                        onChange={onChangeFormValues}
                        className="FormControl"
                        type="password"
                        placeholder="Enter your password..."
                        required
                    />
                    <Form.Control.Feedback className="Feedback" type="invalid">Enter your password!</Form.Control.Feedback>

                </Form.Group>
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