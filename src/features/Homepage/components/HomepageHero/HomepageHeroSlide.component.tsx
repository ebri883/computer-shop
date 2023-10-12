import React from "react";
import s from "./HomepageHero.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import Image from "next/image";

export interface IHeroSlideData {
  title: string;
  desc?: string;
  buttonText?: string;
  buttonUrl?: string;
  background: string;
}

const HomepageHeroSlide = ({
  title,
  desc,
  buttonText,
  buttonUrl,
  background,
}: IHeroSlideData) => {
  return (
    <div className={clsx(s._SlideItemWrapper, "container")}>
      <Typography
        variant="h3"
        fontWeight={700}
        className={clsx(s._SlideItemTitle, "white")}
      >
        {title}
      </Typography>
      {desc && (
        <Typography
          variant="body-lg"
          fontWeight={400}
          className={clsx("white")}
        >
          {desc}
        </Typography>
      )}
      {buttonText && (
        <Link href={buttonUrl ? buttonUrl : ""} className={clsx("button-1")}>
          {buttonText}
        </Link>
      )}
      <Image
        width={1920}
        height={775}
        alt={background.split("/")?.[background.split("/").length - 1]}
        src={background}
        loading="eager"
        className={clsx(s._Background)}
      />
    </div>
  );
};

export default HomepageHeroSlide;
