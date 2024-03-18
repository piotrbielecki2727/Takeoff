import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Window.css';
import logo from '../../Assets/takeoff.png';
import RegisterForm from './RegisterForm';

function Window() {
    return (
        <Container className='RegisterContainer'>
            <Row>
                <Col className='ColLeft' xl={5} xs={0} lg={5} md={5}>
                    <Image className='LogoImage' src={logo}></Image>
                </Col>
                <Col className='ColRight' xl={7} xs={12} lg={7} md={7}>
                    <RegisterForm />
                </Col>
            </Row >
        </Container >
    );
}

export default Window;