import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

const Browse = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <h2>Select a subject.</h2>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <TutorCards>
        <Card onClick={handleShow}>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>Math</Subject>
            <Body>Joey Lee</Body>
            <Stars>4.7<AiFillStar /></Stars>
          </Personal>
          <Subjects>
            <ul>
              Subjects:
              <li>Calculus</li>
              <li>English</li>
              <li>Chemistry</li>
            </ul>
          </Subjects>
        </Card>
        <Card onClick={handleShow}>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>Chemistry</Subject>
            <Body>Winnie Pooh</Body>
            <Stars>4.5<AiFillStar /></Stars>
          </Personal>
          <Subjects>
            <ul>
              Subjects:
              <li>Calculus</li>
              <li>English</li>
              <li>Chemistry</li>
            </ul>
          </Subjects>
        </Card>
        <Card onClick={handleShow}>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>Physics</Subject>
            <Body>Tom Jerry</Body>
            <Stars>4.0<AiFillStar /></Stars>
          </Personal>
          <Subjects>
            <ul>
              Subjects:
              <li>Calculus</li>
              <li>English</li>
              <li>Chemistry</li>
            </ul>
          </Subjects>
        </Card>
        <Card onClick={handleShow}>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>English</Subject>
            <Body>Evan Yan</Body>
            <Stars>4.0<AiFillStar /></Stars>
          </Personal>
          <Subjects>
            <ul>
              Subjects:
              <li>Calculus</li>
              <li>English</li>
              <li>Chemistry</li>
            </ul>
          </Subjects>
        </Card>
      </TutorCards>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Header>Schedule</Header>

        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Schedule a time</Form.Label>
              <Form.Control
                type="email"
                placeholder="3:00pm, lunchtime, etc.."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="email"
                placeholder="room A201, library, etc.."
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>What do you want to learn/review?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>

      </Modal>
      <Spacer></Spacer>
    </div>
  )
}

export default Browse

export const Spacer = styled.div
  `
padding-bottom:300px;
`
export const Header = styled.div`
position:relative;
font-weight:700;
font-size:2rem;
`

export const TutorCards = styled.div`
padding-top:50px;
display:flex;
gap:1rem;
flex-wrap:wrap;
`
export const Card = styled.div`
width:397px;
height:170px;
background-color:white;
border-radius:8px;
padding-left:32px;
padding-right:32px;
padding-top:32px;
padding-bottom:32px;
display:flex;
transition: box-shadow .2s;
  &:hover {
    box-shadow: 0 0 15px rgba(20,20,20,.2); 
    cursor:pointer;
}

`
export const Personal = styled.div`
padding-left:10px;
`
export const Body = styled.div`

`
export const Subject = styled.div`

font-weight:700;
`
export const Stars = styled.div`


`
export const Subjects = styled.div`
  padding-left:50px;
  ul{
    list-style-type: none;
  }
 
`
export const Icon = styled.div`

`