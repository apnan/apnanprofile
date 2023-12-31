import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PhoneIcon } from './icons/phone.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as EmailIcon } from './icons/email.svg';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h4`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

const IconWrapper = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const LinkedInLink = styled.a`
  color: #0077b5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const HomeText = styled.p`
  font-size: 26px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
  flex: 0 0 50%; /* 50% width for text to make room for the image */
`;

export default function ContactPage() {
  return (
    <Container>
      <Heading>Contact Me</Heading>
      <HomeText>Feel free to get in touch if you have any questions, or just want to say hi 😊</HomeText>
      <ContactItem>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
        +46 762 91 93 12
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <HomeIcon />
        </IconWrapper>
       Stockholm,Sweden
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <EmailIcon />
        </IconWrapper>
       aishajahan2015@gmail.com
      </ContactItem>
      <ContactItem>
        <IconWrapper>
          <LinkedInIcon />
        </IconWrapper>
        <LinkedInLink href=" https://www.linkedin.com/in/apnan-jahan-1a6a8511a/" target="_blank" rel="noopener noreferrer">
        Apnan Jahan
        </LinkedInLink>
        </ContactItem>
    </Container>
  );
}
