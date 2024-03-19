const ChangeFormState = (currenState: string, setState: (state: string) => void) => {
    if (currenState === "signin")
        setState('signup')

    else
        setState('signin');
}

export default ChangeFormState;