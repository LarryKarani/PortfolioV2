import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a frontend software engineer with a passion for building
          intuitive and responsive user interfaces. With over 5 years of
          experience in the industry, I have a strong foundation in HTML, CSS,
          and JavaScript, and have been using React, TypeScript, and Next.js to
          build scalable and maintainable web applications.
        </SectionText>
        <Button onClick={props.handleClick}>Get In Touch</Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero;