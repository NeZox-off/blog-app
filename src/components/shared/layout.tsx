import React, { FC, PropsWithChildren } from "react";
import { Header } from "./header";

interface layoutProps extends PropsWithChildren {}

export const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {children}
      </main>
    </React.Fragment>
  );
};
