import { FC } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";
import { cn } from "@/src/lib/utils";

interface BlogsProps {}

type TSortBlogsButton = {
  title: string;
  list?: string[];
};

type ContentItem = {
  type: "text" | "bold" | "italic";
  text: string;
};

const sortBlogsButton: TSortBlogsButton[] = [
  { title: "Нові" },
  { title: "Старі" },
  { title: "Перегляди", list: ["Більше", "Меньше"] },
];

const blogs = [
  {
    title: "Theme 1",
    desc: [
      {
        content: [
          {
            type: "text" as const,
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue",
          },
          {
            type: "bold" as const,
            text: "dignissim; nullam aliquet arcu",
          },
          {
            type: "italic" as const,
            text: "dignissim; nullam aliquet arcu",
          },
          {
            type: "text" as const,
            text: " interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti.",
          },
        ],
      },
      {
        content: [
          {
            type: "text" as const,
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue",
          },
          {
            type: "bold" as const,
            text: "dignissim; nullam aliquet arcu",
          },
          {
            type: "italic" as const,
            text: "dignissim; nullam aliquet arcu",
          },
          {
            type: "text" as const,
            text: " interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti.",
          },
        ],
      },
    ],
    date: "16 вересня 2024",
    views: 0,
    subData: [
      {
        title: "Theme 1.1",
        desc: [
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue dignissim; nullam aliquet arcu interdum mauris.",
        ],
      },
      {
        title: "Theme 1.2",
        desc: [
          {
            content: [
              {
                type: "text" as const,
                text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue",
              },
              {
                type: "bold" as const,
                text: "dignissim; nullam aliquet arcu",
              },
              {
                type: "italic" as const,
                text: "dignissim; nullam aliquet arcu",
              },
              {
                type: "text" as const,
                text: " interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti.",
              },
            ],
          },
          {
            content: [
              {
                type: "text" as const,
                text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sit morbi congue",
              },
              {
                type: "bold" as const,
                text: "dignissim; nullam aliquet arcu",
              },
              {
                type: "italic" as const,
                text: "dignissim; nullam aliquet arcu",
              },
              {
                type: "text" as const,
                text: " interdum mauris. Natoque consectetur augue bibendum; donec nunc arcu nam hendrerit potenti.",
              },
            ],
          },
        ],
      },
    ],
  },
];

const FormattedText: FC<{ content: ContentItem[] }> = ({ content }) => (
  <p>
    {content.map((item, idx) => (
      <span
        key={idx}
        className={cn(
          item.type === "bold" ? "font-bold" : undefined,
          item.type === "italic" ? "italic" : undefined,
          content.length - 1 === idx ? "pr-0" : "pr-1"
        )}
      >
        {item.text}
      </span>
    ))}
  </p>
);

export const Blogs: FC<BlogsProps> = ({}) => {
  return (
    <Section id="blogs" className="h-screen pt-24">
      <Container className="h-auto">
        <header className="mb-10">
          <span className="mb-2 inline-block text-white/60">Сортувати по:</span>
          <ol className="flex items-center gap-3">
            {sortBlogsButton.map((item, index) => (
              <li key={index}>
                <Button
                  className={cn(
                    "bg-transparent border border-blog-yellow text-blog-yellow hover:bg-blog-yellow hover:text-black"
                  )}
                  rounded={"lg"}
                >
                  {item.title} {item?.list && <Icon name="ChevronDown" />}
                </Button>

                {item?.list && (
                  <ul className="hidden">
                    {item.list.map((item__button, index__button) => (
                      <Button
                        className="border border-blog-yellow"
                        rounded={"lg"}
                        key={index__button}
                      >
                        {item__button}
                      </Button>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </header>
        <div className="mb-10">
          {blogs.map((item, index) => (
            <section key={index} className="flex gap-10">
              <div className="flex flex-col items-center justify-start md:justify-center">
                <div className="w-[100px] h-[100px] bg-blog-dark rounded-full"></div>
                <div className="flex-grow w-1 bg-blog-dark rounded-b-2xl"></div>
              </div>

              <div className="mt-6">
                <header className="flex flex-col gap-4 mb-4">
                  <h2 className="text-white flex items-center gap-4 text-5xl font-bold">
                    <Icon name="Hash" className="text-blog-dark size-10" />
                    {item.title}
                  </h2>
                  <div className="text-blog-yellow flex items-center gap-3 ml-3">
                    <span className="flex items-center gap-3">
                      <Icon name="CalendarDays" className="size-6" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-3">
                      <Icon name="Eye" className="size-6" /> {item.views}{" "}
                    </span>
                  </div>
                </header>
                {item.desc && (
                  <article className="flex flex-col gap-3 text-lg pl-3">
                    {item.desc.map((desc, descIndex) =>
                      typeof desc === "string" ? (
                        <p key={descIndex} className="flex gap-5">
                          {desc}
                        </p>
                      ) : (
                        <FormattedText key={descIndex} content={desc.content} />
                      )
                    )}
                  </article>
                )}
                <div className="mt-4 pl-8 flex flex-col gap-3">
                  {item.subData.map((subItem, subIndex) => (
                    <div key={subIndex} className="mb-3">
                      <h3 className="text-3xl text-white font-semibold flex items-center gap-3">
                        <Icon name="Hash" className="text-blog-dark size-6" />
                        {subItem.title}
                      </h3>
                      <article className="flex flex-col gap-3 text-lg pl-4">
                        {subItem.desc.map((desc, descIndex) =>
                          typeof desc === "string" ? (
                            <p key={descIndex} className="flex gap-5">
                              {desc}
                            </p>
                          ) : (
                            <FormattedText
                              key={descIndex}
                              content={desc.content}
                            />
                          )
                        )}
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
};
