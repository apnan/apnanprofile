import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h4`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;



const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 0 0 48%; /* 48% width for the image */
  text-align: right;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  flex: 0 0 48%;
  text-align: left;
  padding: 20px;
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-top: 100px;
    flex: 0 0 100%;
  }
`;

export default function FlexContainer() {
  return (
    <Container>
      <Heading>About Me</Heading>
      <FlexRow>
        <ImageContainer>
          <ProfileImage src="/me.jpg" alt="Profile Image" />
        </ImageContainer>
        <TextContainer>
          <Description>
          I really love spending great time with my family, and it makes me so happy. Cooking and traveling are two things I absolutely love to do. <br></br>
          At work, I enjoy learning new things and getting even better at things I already know. I really like coming up with smart and stylish solutions to problems—it's exciting!I also enjoy finding new and creative ways to solve problems. <br></br>
          Building good relationships with my co-workers and customers is something that's really important to me in any job. <br></br>    
          </Description>
        </TextContainer>
      </FlexRow>
    </Container>
  );
}
