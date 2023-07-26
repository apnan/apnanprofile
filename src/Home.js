import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const HomeContent = styled.div`
  max-width: 1000px; 
  width: 100%; 
  padding: 20px;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const HomeText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
  flex: 0 0 50%; /* 50% width for text to make room for the image */
`;

const ImageContainer = styled.div`
  flex: 0 0 48%; /* 48% width for the image */
  text-align: right;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
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
        <div>
          <HomeText>
            🚀 Passionate About Creating Outstanding User Experiences 🚀
          </HomeText>
          <HomeText>
            Hello there! I'm Apnan Jahan, a detail-oriented and dynamic FrontEnd developer who recently completed my studies at Jensen University of Applied Sciences in Stockholm. 🎓 With a strong foundation in web development and an insatiable drive to deliver exceptional results, I am dedicated to crafting user experiences that leave a lasting impact.
          </HomeText>
         <HomeText>💼 Notable Accomplishments and Recognition 💼</HomeText>
         <HomeText>I take pride in my ability to tackle complex problems and deliver innovative solutions. My dedication and commitment have earned me recognition from clients and colleagues alike, bolstering my confidence in pushing the boundaries of web development.</HomeText>
          <HomeText>
          🤝 Let's Create Remarkable Digital Experiences Together! 🤝</HomeText>
          <HomeText>Ready to embark on this exciting journey together? Let's connect and explore the endless possibilities.</HomeText>
          <Mywork href=" https://github.com/apnan" target="_blank" rel="noopener noreferrer">
       Check My Work
        </Mywork>
        </div>
        <ImageContainer>
        <ProfileImage src="/me.jpg" alt="Profile Image" />
        </ImageContainer>
      </HomeContent>
    </HomePageContainer>
  );
}
