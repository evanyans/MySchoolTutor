import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
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
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Browse

export const Spacer = styled.div
`
padding-left:10px;
`