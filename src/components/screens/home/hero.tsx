import React, { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";

interface heroProps {}

export const Hero: FC<heroProps> = () => {
  return (
    <Section className="h-screen relative overflow-hidden">
      <Container className="flex h-full justify-start items-center">
        <div>
          <div className="mb-20">
            <h1 className="text-6xl mb-3">Привіт! Це Поляков Максим</h1>
            <p className="text-xl max-w-3xl text-white/60">
              Ласкаво прошу до мого особистого блогу, де я ділюся своїм досвідом
              у веб-розробці та інсайтами про технології. Тут ви знайдете статті
              про сучасну розробку, а також мої думки про саморозвиток,
              продуктивність і нові виклики у світі IT.
            </p>
          </div>
          <Button>
            Блог <Icon name="ChevronRight" />
          </Button>
        </div>
      </Container>
      <div className="absolute bg-white w-full"></div>
      <div className="absolute bg-white w-full bottom-0"></div>
    </Section>
  );
};
