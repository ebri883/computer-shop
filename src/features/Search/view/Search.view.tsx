import React from "react";
import s from "./Search.module.scss";
import clsx from "clsx";
import SectionProdukOverview from "@/components/organisms/SectionProdukOverview";
import useProcessProductList from "@/hooks/useProcessProductList.hook";
import { produkData } from "@/data/produk.data";
import { ICardProductProps } from "@/components/molecules/CardProduct/CardProduct.component";
import CardCta from "@/components/molecules/CardCta";
import SectionUsp from "@/components/organisms/SectionUsp";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { IBreadcrumbItemProps } from "@/components/atoms/Breadcrumb/Breadcrumb.component";
import { PATHS } from "@/constants/PATHS";
import { useRouter } from "next/router";

const arrBreadcrumbItem: IBreadcrumbItemProps[] = [
  {
    breadcrumbTitle: "Home",
    breadcrumbUrl: `${PATHS.homepage}`,
  },
];

const Search = () => {
  const { query } = useRouter();
  const [arrSearchedProduct, countSearch, isLoadingProduct] =
    useProcessProductList({
      productData: produkData,
      searchValue: (query.s as string) || "",
    });

  const searchValue: string = (query?.s as string) || "";

  arrBreadcrumbItem.splice(1, 1, {
    breadcrumbTitle: `Pencarian "${searchValue}"`,
    breadcrumbUrl: "#",
  });

  return (
    <div className={clsx(s._Wrapper)}>
      <Breadcrumb className="container" arrBreadcrumbItem={arrBreadcrumbItem} />
      <div className="container">
        <SectionProdukOverview
          produkOverviewTitle={`Hasil pencarian "${searchValue}"`}
          produkOverviewProducts={arrSearchedProduct as ICardProductProps[]}
          isLoadingProduct={isLoadingProduct}
          produkOverviewTotal={countSearch || 0}
          produkOverviewCardPerRow={6}
          produkOverviewCardSortPath="search"
          produkOverviewCardPaginationPath="search"
        />
      </div>
      <CardCta />
      <SectionUsp />
    </div>
  );
};

export default Search;
