import React, { FC } from "react";
import { Container } from "./container";
import Link from "next/link";
import { Icon } from "../ui/icon";
import { Navigation } from "./navigation";
import { Button } from "../ui/button";
import { cn } from "@/src/lib/utils";

interface headerProps {}

export const Header: FC<headerProps> = ({}) => {
  return (
    <header className="py-4 top-5 fixed w-full">
      <Container className="flex justify-between">
        <Link href={"/"} className="inline-flex justify-center items-center h-14 w-14 rounded-2xl bg-white text-black">
          <Icon name="PenTool" />
        </Link>
        <div className="flex items-center">
          <Navigation
            type="ul"
            className="flex-1"
            classListItemLik={cn("px-5 py-3 tex-xl")}
            navList={[
              ["Головна", "/"],
              ["Блог", "/blog"],
            ]}
          />
          <Button className="font-semibold">Ввійти</Button>
        </div>
      </Container>
    </header>
  );
};
