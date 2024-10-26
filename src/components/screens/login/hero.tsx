import { FC } from "react";
import { Section } from "../../shared/section";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";
import { Container } from "../../shared/container";
import Link from "next/link";

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
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
      <div className="fixed bg-black/80 inset-0 flex justify-center items-center">
        <form className="max-w-md w-full bg-white py-10 px-9 rounded-3xl">
          <div className="flex flex-col justify-center items-center text-center gap-7 mb-6">
            <h2 className="text-blog-yellow text-3xl">Увійти тут</h2>
            <p className="max-w-72 mx-auto text-balance text-blog-dark text-lg font-semibold">
              З поверненням, вас за вами сумували!
            </p>
          </div>
          <div className="flex flex-col gap-4 mb-3">
            <div className="relative z-0">
              <input
                type="text"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-blog-dark bg-transparent border-0 border-b-2 appearance-none border-blog-dark focus:outline-none focus:ring-0 focus:border-blog-yellow  peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-blog-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blog-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-blog-dark bg-transparent border-0 border-b-2 appearance-none border-blog-dark focus:outline-none focus:ring-0 focus:border-blog-yellow peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-blog-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blog-yellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
            </div>
          </div>
          <Link
            href={"/login"}
            className="text-blog-yellow flex justify-end mb-3 hover:underline"
          >
            Забули пароль?
          </Link>
          <Button type="button" className="w-full py-5 shadow-lg font-bold mb-7" variant={"yellow"}>Увійдіть в систему</Button>
          <Link href={"/login"} className="text-blog-dark/80 flex justify-center text-center font-semibold hover:underline">Створіть новий обліковий запис</Link>
        </form>
      </div>
    </Section>
  );
};
