import React from "react";
import s from "./CardUsp.module.scss";
import { Icon, TIconName } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import clsx from "clsx";

export interface ICardUspProps {
  cardUspIconName: TIconName;
  cardUspIconWidth?: number;
  cardUspIconHeight?: number;
  cardUspTitle: string;
  cardUspDescription: string;
}

const CardUsp = ({
  cardUspIconName,
  cardUspIconWidth,
  cardUspIconHeight,
  cardUspTitle,
  cardUspDescription,
}: ICardUspProps) => {
  return (
    <div className={s._Wrapper}>
      <Icon
        iconName={cardUspIconName}
        width={cardUspIconWidth}
        height={cardUspIconHeight}
      />
      <Typography variant="body-md" className={clsx("gray-4", s._Title)}>
        {cardUspTitle}
      </Typography>
      <Typography variant="body-sm" className={clsx("gray-3", s._Description)}>
        {cardUspDescription}
      </Typography>
    </div>
  );
};

export default CardUsp;
