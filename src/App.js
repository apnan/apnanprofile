import React from 'react';
import styled from 'styled-components';
import {  Element } from 'react-scroll';
import Home from './Home';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  width: 100%;
  text-align: center;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    margin-left: 20px;
    cursor: pointer;

    &:hover {
      color: #ff8800;
    }
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  width: 100%;
  bottom: 0;
  left: 0;
`;

function App() {
  return (
    <Container>
      <Navbar>
        <Logo>My Portfolio</Logo>
      </Navbar>
      <Element name="home">
        <Home />
      </Element>
      <Element name="skills">
        <Skills />
        <Element name="about">
        <About/>
        </Element>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer>&copy; 2023 My Portfolio. All rights reserved.</Footer>
    </Container>
  );
}

export default App;
