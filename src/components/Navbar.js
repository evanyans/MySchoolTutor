import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
function Navigation() {
    return (
        <>
            <style type="text/css">
                {`
                    .container {
                        padding-top:10px;
                        font-weight:600;
                        font-size:18px;
                        padding-bottom:15px;
                    }

                `}
            </style>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Generic Secondary School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/MySchoolTutor/home">Home</Nav.Link>
                            <Nav.Link href="/MySchoolTutor/browse">Browse</Nav.Link>
                            <Nav.Link href="/MySchoolTutor/history">History</Nav.Link>
                            
                        </Nav>
                        <Button variant="dark">000S-Name</Button>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            <Line></Line>
        </>
    );
}

export default Navigation;

export const Line = styled.div`
    content: " ";
    display: block;
    border-bottom: 0.5px solid #9E9E9E;

`