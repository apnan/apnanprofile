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

  @media (max-width: 768px) {
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
            I find immense joy in spending quality time with my family. Cooking and traveling are two passions that invigorate me.<br></br> During my work hours, I embrace the opportunity to acquire fresh skills and enhance existing ones. The thrill of crafting efficient and elegant solutions to challenges inspires me, and I take delight in exploring innovative approaches to overcome obstacles.<br></br> Furthermore, fostering positive relationships with my colleagues and customers is a core value that I hold dear in any professional setting.
          </Description>
        </TextContainer>
      </FlexRow>
    </Container>
  );
}
