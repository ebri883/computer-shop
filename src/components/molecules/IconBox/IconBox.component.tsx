import React, { ReactNode } from "react";
import s from "./IconBox.module.scss";
import clsx from "clsx";
import { Icon, TIconName } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";

interface IIconBoxProps {
  iconName: TIconName;
  iconSize?: number;
  className?: string;
  children: ReactNode;
  iconWidth?: number;
  iconHeight?: number;
}

const IconBox = ({
  iconName,
  iconSize = 17,
  iconWidth = iconSize,
  iconHeight = iconSize,
  className,
  children,
}: IIconBoxProps) => {
  return (
    <div className={clsx(s._Wrapper, className)}>
      <Icon iconName={iconName} width={iconWidth} height={iconHeight} />
      {children}
    </div>
  );
};

export default IconBox;
