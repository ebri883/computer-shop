import React from "react";
import s from "./HomepageHighlightProduk.module.scss";
import SectionHighlightOverview, {
  ISectionHighlightOverviewProps,
} from "@/layout/SectionHighlightOverview/SectionHighlightOverview.layout";
import CardProduct from "@/components/molecules/CardProduct";
import { ICardProductProps } from "@/components/molecules/CardProduct/CardProduct.component";

interface IHomepageHighlightProdukProps
  extends Pick<
    ISectionHighlightOverviewProps,
    "title" | "detailText" | "detailUrl"
  > {
  arrCardProduct: ICardProductProps[];
}

const HomepageHighlightProduk = ({
  title,
  detailText,
  detailUrl,
  arrCardProduct,
}: IHomepageHighlightProdukProps) => {
  return (
    <div className={s._Wrapper}>
      <SectionHighlightOverview
        title={title}
        detailText={detailText}
        bodyClass={s._ListProduct}
        detailUrl={detailUrl}
      >
        {arrCardProduct.map((cardItem, key) => {
          return (
            <CardProduct
              key={key}
              productName={cardItem?.productName}
              productSlug={`/${cardItem.productSlug}`}
              productPicture={cardItem.productPicture}
              productPrice={cardItem.productPrice}
              productSalePercent={cardItem.productSalePercent}
            />
          );
        })}
      </SectionHighlightOverview>
    </div>
  );
};

export default HomepageHighlightProduk;
