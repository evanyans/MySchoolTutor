import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';
const Browse = () => {
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
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Rating
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">4.5+</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">4+</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3.5+</Dropdown.Item>
                </Dropdown.Menu> 
              </Dropdown>
              <Spacer></Spacer>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Subject
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Math</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Physics</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Chemistry</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Biology</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Subject"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <TutorCards>
        <Card>
          <Icon><CgProfile size={64}/></Icon>
          <Personal>
            <Subject>Physics</Subject>
            <Body>Evan Yan</Body>
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
        <Card>
          <Icon><CgProfile size={64}/></Icon>
          <Personal>
            <Subject>Physics</Subject>
            <Body>Evan Yan</Body>
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
        <Card>
          <Icon><CgProfile size={64}/></Icon>
          <Personal>
            <Subject>Physics</Subject>
            <Body>Evan Yan</Body>
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
        <Card>
          <Icon><CgProfile size={64}/></Icon>
          <Personal>
            <Subject>Physics</Subject>
            <Body>Evan Yan</Body>
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
      </TutorCards>
    </div>
  )
}

export default Browse

export const Spacer = styled.div
  `
padding-left:10px;
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
background-color:#F3F4F6;
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