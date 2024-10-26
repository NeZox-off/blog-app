import { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Icon } from "../../ui/icon";
import Link from "next/link";

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <Section className="h-screen relative overflow-hidden">
      <Container className="flex flex-col h-full justify-center items-center">
        <h1 className="text-6xl text-blog-yellow my-64">Блог</h1>
        <div className="flex flex-col gap-3 items-center animate-bounce">
          <p className="text-white/60">Перейти до блогу</p>
          <Link
            href={"/blog#blogs"}
            className="h-11 w-11 bg-blog-dark text-white rounded-full inline-flex justify-center items-center"
          >
            <Icon name="ChevronDown" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
