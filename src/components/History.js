import React from 'react'
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
const History = () => {
  return (
    <div>

      <TutorCards>
        <Card>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>Math</Subject>
            <Body>Joey Lee</Body>
            <Stars>4.7<AiFillStar /></Stars>
          </Personal>
          
          <Subjects>
            <ul>
              Summary:
              <li>Learned Limits</li>
              <li>Learned Derivatives</li>
            </ul>
          </Subjects>
          <ExtraInfo>
          <Date>
            Date:<br></br>01/07/2005
          </Date>
          <Date>
            Time:<br></br>1hr5m
          </Date>
          <Date>
            Location:<br></br>Cafeteria
          </Date>
          
          <Rate>
            You rated:
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
          </Rate>
          </ExtraInfo>
        </Card>
        <Card>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>Math</Subject>
            <Body>Joey Lee</Body>
            <Stars>4.5<AiFillStar /></Stars>
          </Personal>
          <Subjects>
          <ul>
              Summary:
              <li>Learned Addition</li>
              <li>Learned Subtraction</li>
            </ul>
          </Subjects>
          <ExtraInfo>
          <Date>
            Date:<br></br>01/07/2005
          </Date>
          <Date>
            Time:<br></br>1hr5m
          </Date>
          <Date>
            Location:<br></br>Cafeteria
          </Date>
          <Rate>
            You rated:
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
          </Rate>
          </ExtraInfo>
        </Card>
        <Card>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>Physics</Subject>
            <Body>Tom Jerry</Body>
            <Stars>4.0<AiFillStar /></Stars>
          </Personal>
          <Subjects>
          <ul>
              Summary:
              <li>Practiced Momentum </li>
              <li>Introduction to Torque</li>
            </ul>
          </Subjects>
          <ExtraInfo>
          <Date>
            Date:<br></br>01/07/2005
          </Date>
          <Date>
            Time:<br></br>1hr5m
          </Date>
          <Date>
            Location:<br></br>Cafeteria
          </Date>
          <Rate>
            You rated:
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
          </Rate>
          </ExtraInfo>
        </Card>
        <Card>
          <Icon><CgProfile size={64} /></Icon>
          <Personal>
            <Subject>English</Subject>
            <Body>Evan Yan</Body>
            <Stars>4.0<AiFillStar /></Stars>
          </Personal>
          <Subjects>
          <ul>
              Summary:
              <li>Fixed grammar mistakes</li>
              <li>Proof read essay</li>
            </ul>
          </Subjects>
          <ExtraInfo>
          <Date>
            Date:<br></br>01/07/2005
          </Date>
          <Date>
            Time:<br></br>1hr5m
          </Date>
          <Date>
            Location:<br></br>Cafeteria
          </Date>
          <Rate>
            You rated:
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
          </Rate>
          </ExtraInfo>
        </Card>
        <Spacer></Spacer>
      </TutorCards>
    </div>
  )
}

export default History

export const Star = styled.div`
  text-align:right;
  margin-right:32px;
  color:#FFE234;
`

export const Spacer = styled.div
  `
padding-bottom:150px;
`
export const Date = styled.div`
padding-left:100px;

`
export const ExtraInfo = styled.div`
position:absolute;
padding-left: 400px;
display:flex;

`
export const Rate = styled.div`
padding-left:210px;
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
font-size:16px;
`
export const Card = styled.div`
width:1293px;
height:136px;
background-color:white;
border-radius:8px;
padding-left:32px;
padding-right:35px;
padding-top:32px;
padding-bottom:32px;
display:flex;
transition: box-shadow .2s;
  &:hover {
    box-shadow: 0 0 15px rgba(20,20,20,.2); 
}

`
export const Personal = styled.div`
padding-left:90px;
padding-right:10px;
position:absolute;
`
export const Body = styled.div`

`
export const Subject = styled.div`

font-weight:700;
`
export const Stars = styled.div`


`
export const Subjects = styled.div`
  padding-left:120px;
  ul{
    list-style-type: none;
  }
 
`
export const Icon = styled.div`

`