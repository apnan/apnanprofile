import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContent = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const HomeText = styled.p`
  font-size: 26px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Mywork = styled.a`
  color: #0077b5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Home() {
  return (
    <HomePageContainer>
      <HomeContent>
        <TextContainer>
          <HomeText>
            Hi there! I'm Apnan Jahan, a creative FrontEnd developer. I recently completed my studies at Jensen University of Applied Sciences in Stockholm. 🎓 I love to create  websites that stand out and leave a lasting impression on people.<br></br>

            <br></br>I'm also proud of successfully finishing a 10-month internship. My employer praised my dedication and innovative ideas. I'm always excited to take new challenges and projects that come my way.

          </HomeText>
          <HomeText>
            🤝 Let's Team Up to Create Great Digital Experiences! 🤝
          </HomeText>
          <Mywork href="https://github.com/apnan" target="_blank" rel="noopener noreferrer">
            Check My Work
          </Mywork>
        </TextContainer>
      </HomeContent>
    </HomePageContainer>
  );
}
