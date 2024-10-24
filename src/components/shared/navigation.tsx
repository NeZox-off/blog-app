"use client";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  classListItem = "",
  classListItemLik = "",
  ...props
}) => {
  const pathname = usePathname();
  return (
    <nav {...props}>
      {React.createElement(
        type,
        {
          className: "flex items-center gap-3",
        },
        navList.map(([title, url], index) => (
          <li key={index} className={cn(classListItem)}>
            <Link
              href={url}
              className={cn(
                'px-5 py-3 rounded-2xl transition-all hover:opacity-80',
                classListItemLik,
                pathname === url ? "bg-blog-dark text-white" : "hover:bg-blog-dark"
              )}
            >
              {title}
            </Link>
          </li>
        ))
      )}
    </nav>
  );
};
