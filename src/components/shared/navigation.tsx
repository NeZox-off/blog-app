import Link from "next/link";
import React, { FC } from "react";

interface navigationProps extends React.HTMLProps<HTMLDivElement> {
  navList: [string, string][];
  type: "ul" | "ol";
  classListItem?: string;
  classListItemLik: string;
}

export const Navigation: FC<navigationProps> = ({
  navList,
  type,
  classListItem = '',
  classListItemLik= '',
  ...props
}) => {
  return (
    <nav {...props}>
      {React.createElement(
        type,
        {
            className: "flex items-center "
        },
        navList.map(([title, url], index) => (
          <li key={index} className={classListItem}>
            <Link href={url} className={classListItemLik}>{title}</Link>
          </li>
        ))
      )}
    </nav>
  );
};
