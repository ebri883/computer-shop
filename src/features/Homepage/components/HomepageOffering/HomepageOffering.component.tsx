import React from "react";
import s from "./HomepageOffering.module.scss";
import clsx from "clsx";
import CardOffer, {
  ICardOfferProps,
} from "@/components/molecules/CardOffer/CardOffer.component";

interface IHomepageOfferingProps {
  arrCardOffer: ICardOfferProps[];
}

const HomepageOffering = ({ arrCardOffer }: IHomepageOfferingProps) => {
  if (arrCardOffer.length === 0) return;

  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        {arrCardOffer.map((cardOfferItem, key) => {
          return (
            <CardOffer
              key={key}
              cardOfferTitle={cardOfferItem.cardOfferTitle}
              cardOfferButtonText={cardOfferItem.cardOfferButtonText}
              cardOfferButtonUrl={cardOfferItem.cardOfferButtonUrl}
              cardOfferBackground={cardOfferItem.cardOfferBackground}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomepageOffering;
