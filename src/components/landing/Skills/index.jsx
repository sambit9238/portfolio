import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Sambit and I’m a Data Scientist!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Sambit is a Full Stack Data Scientist with strong foundation on statistics and machine learning. He is well
            suited for startups due to his curiosity on new technology and assiduity on making life better with help of
            it. He has expertise on deep learning model building and productionizing it with a good experience
            especially in NLP field. His Style of work : Requirement Gathering, Data Collection, Feature Engineering,
            Predictive Model Building, Performance Analysis, Deployment. Apart from this he is also well skilled with
            cloud technologies, containerisation, web servers and data pipeline architecture.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
