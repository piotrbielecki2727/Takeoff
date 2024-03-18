import React, { useState } from "react";
import './RegisterForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Image, Button, Form, Fade } from "react-bootstrap";
import apple from '../../Assets/apple.png';
import google from '../../Assets/google.png';
import fb from '../../Assets/fb.png';
import PrintHello from "./PrintHello";




const RegisterForm: React.FC = () => {

    const [formState, setFormState] = useState<string>('signin');


    function ChangeFormState(): void {
        if (formState === "signin")
            setFormState('signup')
        else
            setFormState('signin');
    }

    return (
        <>
            {formState === "signin" ? (
                <>
                    <Form className="SignupForm">
                        <Fade in>
                           <PrintHello/>
                        </Fade>
                        <h4 className='title'>Sign in to your account</h4>
                        <hr></hr>
                        <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                            <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faEnvelope} /></Form.Label>
                            <Form.Control className="FormControl" type="email" placeholder="Enter your email..." />
                        </Form.Group>

                        <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                            <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faLock} /></Form.Label>
                            <Form.Control className="FormControl" type="password" placeholder="Enter your password..." />
                        </Form.Group>
                        <span className="ForgotPasswordText">Forgot password?</span>
                        <Button className="signInButton" type="submit">Sign in</Button>
                    </Form >
                    <div className="signinsignupChange">Don't have an account? Click <a className="LinkText" onClick={ChangeFormState}> here </a> to sign up!</div>
                    <Container className="OrSignInWithContainer">
                        <Row>
                            <Col><Image className='OrSignInWithImages' src={google}></Image></Col>
                            <Col><Image className='OrSignInWithImages' src={fb}></Image></Col>
                            <Col><Image className='OrSignInWithImages' src={apple}></Image></Col>
                        </Row>
                    </Container>


                </>
            )
                : (
                    <>
                        <Form className="SignupForm">
                            <h3 className="Hellotitle"></h3>
                            <h4 className='title'>Create your account</h4>
                            <hr></hr>
                            <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                                <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faUser} /></Form.Label>
                                <Form.Control className="FormControl" type="text" placeholder="Enter your name..." />
                            </Form.Group >

                            <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                                <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faEnvelope} /></Form.Label>
                                <Form.Control className="FormControl" type="email" placeholder="Enter your email..." />
                            </Form.Group>

                            <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                                <Form.Label className="FormLabel"><FontAwesomeIcon size="lg" icon={faLock} /></Form.Label>
                                <Form.Control className="FormControl" type="password" placeholder="Enter your password..." />
                            </Form.Group>
                            <Form.Group className="FormGroup" controlId="exampleForm.ControlInput1">
                                <Form.Check className="RadioCheck" type="radio" label="Accept the terms and conditions" />
                            </Form.Group>
                            <Button className="signUpButton" type="submit">Sign up</Button>
                        </Form >
                        <div className="signinsignupChange">You have an account? Click <a className="LinkText" onClick={ChangeFormState}>here </a> to log in!</div>
                    </>
                )}

        </>
    )
};

export default RegisterForm;
