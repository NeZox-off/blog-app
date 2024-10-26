import { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";

interface AboutProps {}

export const About: FC<AboutProps> = ({}) => {
  return (
    <Section className="h-screen relative overflow-hidden">
      <Container className="flex h-full justify-start items-center">
        <div>
          <div className="mb-6">
            <h2 className="text-5xl mb-4">Про мене</h2>
            <div className="w-52 bg-blog-dark h-1"></div>
          </div>
          <div className="flex items-center gap-32">
            <span className="text-[350px]">P</span>
            <div className="flex flex-col gap-10 max-w-3xl">
              <p className="text-lg">
                <span className="font-bold">Я – Fullstack Developer</span>, який
                спеціалізується на створенні ефективних та інноваційних
                веб-додатків. Моя головна експертиза полягає в роботі з фронтенд
                і бекенд технологіями, такими як React/Next.js для інтерфейсів
                та NestJS для серверної частини. Програмування – це не лише моя
                професія, а й моя пристрасть. Я завжди шукаю нові способи
                покращити процес розробки та забезпечити, щоб мої проекти були
                не тільки естетично привабливими, але й максимально
                функціональними.
              </p>
              <p className="text-lg">
                Цей блог – це простір, де я відкрито ділюся своїми знаннями та
                досвідом. Ось основні теми, які я розглядаю:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  Фронтенд розробка: як створити інтуїтивно зрозумілі і швидкі
                  інтерфейси користувача з використанням React та Next.js.
                </li>
                <li>
                  Бекенд рішення: робота з серверною частиною на NestJS,
                  побудова API та ефективна робота з базами даних.
                </li>
                <li>
                  Продуктивність та інструменти: як автоматизувати процеси
                  розробки, налаштувати CI/CD і покращити продуктивність роботи
                  над проектами.
                </li>
                <li>
                  Технологічні інновації: мої роздуми про майбутнє веб-розробки,
                  нові технології та підходи, які змінюють індустрію.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
