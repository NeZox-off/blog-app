import { Hero } from "@/src/components/screens/login/hero";
import React, { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  );
};

export default Page;
