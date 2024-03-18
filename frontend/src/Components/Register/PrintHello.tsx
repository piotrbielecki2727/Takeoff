import React, { useState, useEffect } from 'react';
import { Fade } from 'react-bootstrap';

const PrintHello: React.FC = () => {
    const texts: string[] = ["Hello", "Aloha", "Witaj",  "Bonjour", "Hola",  "Ciao", "Hallå", "Hola", "Hi"  ];
    const [index, setIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false); // Ustaw widoczność na false, aby wywołać animację fade-out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setVisible(true); // Ustaw widoczność na true, aby wywołać animację fade-in
            }, 400); // Odczekaj 500 ms przed zmianą tekstu

        }, 3000); // zmiana tekstu co 3 sekundy

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Fade in={visible}>
                <h3 className='Hellotitle'>{texts[index]}</h3>
            </Fade>
        </div>
    );
};

export default PrintHello;
