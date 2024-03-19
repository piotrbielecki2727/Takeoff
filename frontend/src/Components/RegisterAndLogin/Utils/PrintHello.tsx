import React, { useState, useEffect, forwardRef } from 'react';
import { Fade } from 'react-bootstrap';

const PrintHello = forwardRef<HTMLDivElement>((props, ref) => {
    const texts: string[] = ["Hello", "Aloha", "Witaj", "Bonjour", "Hola", "Ciao", "Hallå", "Hola", "Hi"];
    const [index, setIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setVisible(true);
            }, 400);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Fade in={visible}>
                <h3 className='Hellotitle'>{texts[index]}</h3>
            </Fade>
        </div>
    );
});

export default PrintHello;
