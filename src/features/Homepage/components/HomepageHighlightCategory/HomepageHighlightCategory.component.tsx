import React from "react";
import s from "./HomepageHighlightCategory.module.scss";
import clsx from "clsx";
import SectionHighlightOverview from "@/layout/SectionHighlightOverview/SectionHighlightOverview.layout";
import CardCategoryHighlightItem from "@/components/molecules/CardCategoryHighlightItem";
import { ICardCategoryHighlightItemProps } from "@/components/molecules/CardCategoryHighlightItem/CardCategoryHighlightItem.components";
import { PATHS } from "@/constants/PATHS";

interface IHomepageHighlightCategoryProps {
  title: string;
  detailText?: string;
  detailUrl?: string;
  ArrCardCategory: ICardCategoryHighlightItemProps[];
}

const HomepageHighlightCategory = ({
  title,
  detailText,
  detailUrl,
  ArrCardCategory,
}: IHomepageHighlightCategoryProps) => {
  return (
    <div className={clsx(s._Wrapper)}>
      <SectionHighlightOverview
        title={title}
        detailText={detailText}
        detailUrl={detailUrl}
        bodyClass={s._ListCategory}
      >
        {ArrCardCategory?.map((cardCategoryItem, key) => {
          return (
            <CardCategoryHighlightItem
              key={key}
              categoryName={cardCategoryItem?.categoryName}
              categorySlug={`${PATHS.produk}?cat=${cardCategoryItem?.categorySlug}`}
              categoryPicure={cardCategoryItem?.categoryPicure}
            />
          );
        })}
      </SectionHighlightOverview>
    </div>
  );
};

export default HomepageHighlightCategory;
