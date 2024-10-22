import { cn } from "@/src/lib/utils";
import React, { FC } from "react";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("container mx-auto", className)} {...props}>
      {children}
    </div>
  );
};
