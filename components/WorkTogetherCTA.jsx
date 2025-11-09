import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import { BodyText, FluidContainer } from "@/styles/ui";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 80px 20px;
`;

const CtaTitle = styled.h2`
  color: ${(props) => props.theme.colors.title};
  font-weight: 900;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 0 16px 0;

  font-size: 60px;
  @media (max-width: 1400px) { font-size: 52px; }
  @media (max-width: 1100px) { font-size: 44px; }
  @media (max-width: 900px)  { font-size: 38px; }
`;

const CtaSubtitle = styled(BodyText)`
  color: ${(props) => props.theme.colors.subtitle};
  text-align: center;
  max-width: 800px;
  margin-bottom: 28px;
`;

const EmailLink = styled.a`
  color: ${(props) => props.theme.colors.title};
  font-weight: 800;
  text-decoration: none;
  font-size: 20px;
  margin-top: 12px;

  &:hover { color: ${(props) => props.theme.colors.branding}; }
`;

export default function WorkTogetherCTA() {
  return (
    <FluidContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <Section id="section-work-together">
          <CtaTitle>LET'S WORK TOGETHER!</CtaTitle>
          <CtaSubtitle centerText>
            Feel free to reach out if you're looking for a developer, have a question,
            or are interested in building some super cool stuff together.
          </CtaSubtitle>
          <BodyText centerText>Say hello:</BodyText>
          <EmailLink href="mailto:muzammiljavedd@gmail.com">muzammiljavedd@gmail.com</EmailLink>
        </Section>
      </ScrollAnimation>
    </FluidContainer>
  );
}