import React from "react";
import LoginRegisterWindow from "../Components/RegisterAndLogin/LoginRegisterWindow";
import PrintButton from "../Components/PrintButton";
import TryGetRole from "../Routing/TryGetRole";
import TryGetUserId from "../Routing/TryGetUserId";

const HomePage: React.FC = () => {

    const role = TryGetRole();
    const userId = TryGetUserId();


    return (
        <>{role} {userId}</>
    )
};

export default HomePage;
