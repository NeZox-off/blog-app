import { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import Image from "next/image";

interface AboutProps {}

export const About: FC<AboutProps> = ({}) => {
  return (
    <Section className="h-screen relative overflow-hidden">
      <Container className="flex h-full justify-start items-center">
        <div>
          <div>
            <h2>Про мене</h2>
            <div></div>
          </div>
          <div>
            <span>P</span>
            <div>
              <p>
                <span>Я – Fullstack Developer</span>, який спеціалізується на
                створенні ефективних та інноваційних веб-додатків. Моя головна
                експертиза полягає в роботі з фронтенд і бекенд технологіями,
                такими як React/Next.js для інтерфейсів та NestJS для серверної
                частини. Програмування – це не лише моя професія, а й моя
                пристрасть. Я завжди шукаю нові способи покращити процес
                розробки та забезпечити, щоб мої проекти були не тільки
                естетично привабливими, але й максимально функціональними.
              </p>
              <div>
                <p>
                  Цей блог – це простір, де я відкрито ділюся своїми знаннями та
                  досвідом. Ось основні теми, які я розглядаю:
                </p>
                <ul>
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
                    розробки, налаштувати CI/CD і покращити продуктивність
                    роботи над проектами.
                  </li>
                  <li>
                    Технологічні інновації: мої роздуми про майбутнє
                    веб-розробки, нові технології та підходи, які змінюють
                    індустрію.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Image
        src={"/svg/grids.svg"}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
        className="absolute inset-0"
        alt="Lines svg"
      />
    </Section>
  );
};
