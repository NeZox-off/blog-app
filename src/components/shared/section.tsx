import React, { FC } from "react";

interface sectionProps extends React.HTMLProps<HTMLDivElement> {}

export const Section: FC<sectionProps> = ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};
