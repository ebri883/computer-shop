import React from "react";
import s from "./CardCta.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { imagesRoot } from "@/constants/other";
import { Typography } from "@/components/atoms/Typography";

export interface ICardCtaProps {
  cardCtaTitle?: string;
  cardCtaButtonText?: string;
  cardCtaInputPlaceholder?: string;
  onClickCardCtaButton?: () => void;
}

const CardCta = ({
  cardCtaTitle = "Dapatkan penawaran terbaik melalui email-mu",
  cardCtaButtonText = "Daftar Sekarang",
  cardCtaInputPlaceholder = "Email-mu",
  onClickCardCtaButton = () => true,
}: ICardCtaProps) => {
  const handleOnClickButton = () => {
    onClickCardCtaButton();
  };
  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        <Image
          width={1410}
          height={356}
          src={`${imagesRoot}/card-cta/card-cta.webp`}
          alt={"card-cta"}
          loading="lazy"
        />
        <Typography variant="h4" fontWeight={700} className={clsx("white")}>
          {cardCtaTitle}
        </Typography>
        <div className={clsx(s._FormWrapper)}>
          <input placeholder={cardCtaInputPlaceholder} />
          <button
            onClick={handleOnClickButton}
            className={clsx("button-1", "body-md")}
          >
            {cardCtaButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCta;
