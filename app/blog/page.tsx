import { Blogs } from "@/src/components/screens/blog/blogs";
import { Hero } from "@/src/components/screens/blog/hero";
import React, { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <React.Fragment>
      <Hero />
      <Blogs />
    </React.Fragment>
  );
};

export default Page;
