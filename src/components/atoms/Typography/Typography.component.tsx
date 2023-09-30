import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";
import { TTypographyComponent, TTypographyVariant } from "./Typography.types";

interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TTypographyVariant;
  component?: TTypographyComponent;
  children?: ReactNode;
  fontWeight?: 400 | 500 | 700;
  htmlFor?: string;
}

const Typography = ({
  component = "p",
  variant = "body-md",
  children,
  className,
  fontWeight,
  style,
  ...props
}: ITypographyProps) => {
  const element = React.createElement(
    component,
    {
      ...props,
      style: {
        ...(fontWeight ? { fontWeight: `${fontWeight}` } : {}),
        ...style,
      },
      className: clsx(`${variant}`, className),
    },
    children
  );
  return element;
};

export default Typography;
