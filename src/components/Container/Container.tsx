import React from "react";
import type { ReactNode } from "react";
import { classNames } from "@/utils";

interface ContainerProps {
  size?: "sm" | "lg";
  className?: string;
  children?: ReactNode;
}

const styles = {
  sm: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12",
  lg: "mx-auto w-full px-[1rem] md:px-0 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]",
};

const Container: React.FC<ContainerProps> = ({
  size = "lg",
  className = "",
  children,
  ...props
}) => {
  return (
    <section className={classNames(styles[size], className)} {...props}>
      {children}
    </section>
  );
};

export default Container;
