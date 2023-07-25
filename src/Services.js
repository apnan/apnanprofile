import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section `
  padding: 60px 0;
`;

const AboutText = styled.p `
  font-size: 18px;
  line-height: 1.6;
`;

const AboutHeading = styled.h4 `
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const HighlightText = styled.span `
  color: #ff8800;
`;

export default function About() {
    return ( <
        AboutSection >
        <
        h2 > About Me < /h2> <
        AboutText >
        <
        AboutHeading > Hello there!I 'm a passionate web developer with a strong focus on React.js and Styled-Components. My expertise lies in building modern and responsive websites that bring ideas to life.</AboutHeading> <
        /AboutText> <
        AboutText >
        <
        HighlightText > 🔧Proficient in Cutting - Edge Technologies🔧 < /HighlightText>
        Beyond my proficiency in HTML, CSS, JavaScript, and React JS, I harness the power of tools like Figma and GitHub to streamline the design and development process, ensuring seamless collaboration and efficient workflows.My agile learning mindset has led me to embrace backend technologies like MongoDB and Firebase, allowing me to deliver full - stack solutions that elevate user experiences.Additionally, I excel at deploying applications with Docker and Heroku
        for smooth and scalable performance. <
        /AboutText> <
        AboutText >
        <
        HighlightText > 👥Collaborative and Agile Developer👥 < /HighlightText>
        Collaboration is at the heart of my approach to web development.As a firm believer in the power of teamwork, I thrive in Agile environments, collaborating seamlessly within diverse and dynamic teams.My hands - on experience in conducting Jest tests guarantees that my code is robust, reliable, and free of errors, consistently delivering a seamless user experience. <
        /AboutText> <
        AboutText >
        <
        HighlightText > 📈Continuously Growing and Learning📈 < /HighlightText>
        In an ever - evolving tech landscape, I remain committed to staying at the forefront of industry trends and continuously honing my skills.Actively engaging in online courses and industry events, I seek opportunities
        for growth and innovation to push the boundaries of what 's possible in web development. <
        /AboutText> <
        AboutText >
        My dedication to crafting exceptional digital experiences drives me to take on new challenges and embrace emerging technologies.Together, we can create web solutions that captivate audiences and make a meaningful impact. <
        /AboutText> <
        /AboutSection>
    );
}