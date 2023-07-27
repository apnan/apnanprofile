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
  font-size: 16px;
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
            Hello there! I'm Apnan Jahan, a detail-oriented and dynamic FrontEnd developer who recently completed my studies at Jensen University of Applied Sciences in Stockholm. 🎓 With a strong foundation in web development and an insatiable drive to deliver exceptional results, I am dedicated to crafting user experiences that leave a lasting impact.
          </HomeText>
          <HomeText>
            🤝 Let's Create Remarkable Digital Experiences Together! 🤝
          </HomeText>
          <Mywork href="https://github.com/apnan" target="_blank" rel="noopener noreferrer">
            Check My Work
          </Mywork>
        </TextContainer>
      </HomeContent>
    </HomePageContainer>
  );
}
