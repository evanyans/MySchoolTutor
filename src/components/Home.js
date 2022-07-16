import React from 'react'
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <div>
      <Titletext>Quick Help</Titletext>
      <Subtext>Need a quick homework solution or explanation?</Subtext>
      <Tutors>
        <Tutor>
          <Profile>
            <Icon></Icon>
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
            <Info>
              <Name>Chad Smith</Name>
              <Name><b>Mathematics</b></Name>
              <Name>Grade 12</Name>
              <StatName>
                Calculus 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <StatName>
                Physics 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <StatName>
                Pre-Calculus 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <Bio>Info<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Bio>
            </Info>
            <Message>
              <Button variant="dark">Message</Button>
            </Message>
          </Profile>

        </Tutor>
        <Tutor>
          <Profile>
            <Icon></Icon>
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
            <Info>
              <Name>Jennie Jane</Name>
              <Name><b>English</b></Name>
              <Name>Grade 12</Name>
              <StatName>
                English 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <StatName>
                Law 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <StatName>
                Geography 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <Bio>Info<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Bio>
            </Info>
            <Message>
              <Button variant="dark">Message</Button>
            </Message>
          </Profile>

        </Tutor>
        <Tutor>
          <Profile>
            <Icon></Icon>
            <Star><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></Star>
            <Info>
              <Name>Gordon Ramsay</Name>
              <Name><b>Chemistry</b></Name>
              <Name>Grade 11</Name>
              <StatName>
                Chemistry 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <StatName>
                Physics 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <StatName>
                Psychology 12: 99%
              </StatName>
              <StatBar><InnerBar></InnerBar></StatBar>
              <Bio>Info<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Bio>
            </Info>
            <Message>
              <Button variant="dark">Message</Button>
            </Message>
          </Profile>

        </Tutor>
        
      </Tutors>
    </div>
  )
}

export default Home

export const Titletext = styled.div`
  font-weight:800;
  font-size:5em;
`

export const Subtext = styled.div`
  font-weight:400;
  margin-top:15px;
  font-size:1.4em;
  padding-bottom:1.5em;
`

export const Tutors = styled.div`
  display:flex;
  gap:30px;

`
export const Message = styled.div`
  text-align:right;
  padding-right:32px;
  padding-top:32px;

`
export const Bio = styled.div`
  padding-top:20px;
  font-size:16px;

`
export const InnerBar = styled.div`
  margin-top:5px;
  width:310px;
  height:4px;
  background: #4A4A4A;
  border-radius:100px;

`
export const StatBar = styled.div`
  margin-top:5px;
  width:320px;
  height:4px;
  background: #929292;
  border-radius:100px;
`
export const StatName = styled.div`
  font-size:16px;
  padding-top:10px;

`
export const Info = styled.div`
  padding-top:-10px;


`

export const Star = styled.div`
  text-align:right;
  margin-right:32px;
  color:#FFE234;
`

export const Tutor = styled.div`
  width: 384px;
  height:580px;
  background:white;
  border-radius:10px;
  transition: box-shadow .2s;
  &:hover {
    box-shadow: 0 0 15px rgba(20,20,20,.2); 
}
`

export const Name = styled.div`

`

export const Profile = styled.div`
  padding-left:32px;
  padding-top:32px;
  font-size:20px;
`

export const Icon = styled.span`
  height: 64px;
  width: 64px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
`

