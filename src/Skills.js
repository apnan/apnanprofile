import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReactIcon } from './icons/react.svg';
import { ReactComponent as JavascriptIcon } from './icons/javascript.svg';
import { ReactComponent as CssIcon } from './icons/css.svg';
import { ReactComponent as HtmlIcon } from './icons/html.svg';
import { ReactComponent as FigmaIcon } from './icons/figma.svg';
import { ReactComponent as MongodbIcon } from './icons/mongodb.svg';
import { ReactComponent as FirebaseIcon } from './icons/firebase.svg';
import { ReactComponent as GithubIcon } from './icons/githab.svg';
import { ReactComponent as CollabIcon } from './icons/collab.svg';

const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
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

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const IconItem = styled.div`
  flex: 0 0 100px;
  margin: 10px;
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.3s, filter 0.3s, box-shadow 0.3s;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    transform: translateY(0);

    &:hover {
      transform: translateY(-5px);
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

const FlexItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export default function FlexContainer() {
  return (
    <Container>
      <Heading>My Skills</Heading>
      <FlexRow>
        <FlexItem>
          <FlexColumn>
            <IconContainer>
              <IconItem>
                <ReactIcon />
              </IconItem>
              <IconItem>
                <JavascriptIcon />
              </IconItem>
              <IconItem>
                <HtmlIcon />
              </IconItem>
              <IconItem>
                <CssIcon />
              </IconItem>
              <IconItem>
                <FigmaIcon />
              </IconItem>
              <IconItem>
                <MongodbIcon />
              </IconItem>
              <IconItem>
                <FirebaseIcon />
              </IconItem>
              <IconItem>
                <GithubIcon />
              </IconItem>
              <IconItem>
                <CollabIcon />
              </IconItem>
            </IconContainer>
          </FlexColumn>
        </FlexItem>
      </FlexRow>
    </Container>
  );
}
