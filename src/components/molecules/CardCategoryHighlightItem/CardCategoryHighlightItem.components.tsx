import React from "react";
import s from "./CardCategoryHighlightItem.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

export interface ICardCategoryHighlightItemProps {
  categoryName: string;
  categoryPicure: string;
  categorySlug: string;
}

const CardCategoryHighlightItem = ({
  categoryName,
  categoryPicure,
  categorySlug,
}: ICardCategoryHighlightItemProps) => {
  return (
    <div className={clsx(s._Wrapper)}>
      <Link href={categorySlug}>
        <Image
          src={categoryPicure}
          alt={"cat-pic"}
          loading="lazy"
          width={251}
          height={251}
        />
        <Typography
          variant="body-xl"
          className={clsx("gray-3", s._CategoryName)}
        >
          {categoryName}
        </Typography>
      </Link>
    </div>
  );
};

export default CardCategoryHighlightItem;
