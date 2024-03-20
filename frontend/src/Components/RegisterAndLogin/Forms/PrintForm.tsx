import React, { useState } from "react";
import './RegisterForm.css';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";



const PrintForm: React.FC = () => {

    const [formState, setFormState] = useState<string>('signin');


    return (
        <>
            {formState === "signin" ? (
                <>
                    <LoginForm formState={formState} setFormState={setFormState} />
                </>
            )
                : (
                    <RegisterForm formState={formState} setFormState={setFormState} />
                )}

        </>
    )
};

export default PrintForm;
