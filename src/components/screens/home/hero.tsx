import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";

interface heroProps {}

export const Hero: FC<heroProps> = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};
