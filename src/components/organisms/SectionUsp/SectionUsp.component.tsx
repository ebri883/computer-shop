import CardUsp, {
  ICardUspProps,
} from "@/components/molecules/CardUsp/CardUsp.component";
import { arrCardUspData } from "./SectionUsp.data";
import s from "./SectionUsp.module.scss";
import React from "react";
import clsx from "clsx";

export interface ISectionUspProps {
  arrCardUsp?: ICardUspProps[];
}

const SectionUsp = ({ arrCardUsp = arrCardUspData }: ISectionUspProps) => {
  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        {arrCardUsp?.map((uspItemData, key) => {
          return (
            <CardUsp
              key={key}
              cardUspTitle={uspItemData.cardUspTitle}
              cardUspDescription={uspItemData.cardUspDescription}
              cardUspIconName={uspItemData.cardUspIconName}
              cardUspIconWidth={53}
              cardUspIconHeight={53}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionUsp;
