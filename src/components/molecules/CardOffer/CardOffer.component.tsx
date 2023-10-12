import React from "react";
import s from "./CardOffer.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import Image from "next/image";

export interface ICardOfferProps {
  cardOfferTitle: string;
  cardOfferButtonText: string;
  cardOfferButtonUrl: string;
  cardOfferBackground: string;
}

const CardOffer = ({
  cardOfferTitle,
  cardOfferButtonText,
  cardOfferButtonUrl,
  cardOfferBackground,
}: ICardOfferProps) => {
  return (
    <div className={clsx(s._Wrapper)}>
      <Typography
        variant="h5"
        fontWeight={700}
        className={clsx(s._Title, "white")}
      >
        {cardOfferTitle}
      </Typography>
      <Link
        href={cardOfferButtonUrl ? cardOfferButtonUrl : ""}
        className={clsx("button-1")}
      >
        {cardOfferButtonText}
      </Link>
      <Image
        src={cardOfferBackground}
        alt={
          cardOfferBackground.split("/")[
            cardOfferBackground.split("/").length - 1
          ]
        }
        width={690}
        height={370}
        loading="lazy"
      />
    </div>
  );
};

export default CardOffer;
