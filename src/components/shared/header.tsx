import React, { FC } from "react";
import { Container } from "./container";
import Link from "next/link";
import { Icon } from "../ui/icon";
import { Navigation } from "./navigation";

interface headerProps {}

export const Header: FC<headerProps> = ({}) => {
  return (
    <header className="py-4 top-5 sticky">
      <Container className="flex justify-between">
        <Link href={"/"} className="inline-flex p-4 rounded-2xl bg-white">
          <Icon name="PenTool" />
        </Link>
        <div className="flex items-center">
          <Navigation
            type="ul"
            className="flex-1"
            classListItemLik="px-5 py-3"
            navList={[
              ["Головна", "/"],
              ["Блог", "/blog"],
            ]}
          />
        </div>
      </Container>
    </header>
  );
};
