import React, { useEffect, useState } from "react";
import s from "./Produk.module.scss";
import clsx from "clsx";
import { brandData } from "@/data/brand.data";
import ProdukFilter from "../components/ProdukFilter/ProdukFilter.component";
import { IFilterGroupProps } from "../components/ProdukFilter/ProdukFilterGroup.component";
import { TBrand } from "@/types/brand.type";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { IBreadcrumbItemProps } from "@/components/atoms/Breadcrumb/Breadcrumb.component";
import { PATHS } from "@/constants/PATHS";
import { useRouter } from "next/router";
import { produkKategoriData } from "@/data/produkKategori.data";
import CardCta from "@/components/molecules/CardCta";
import SectionUsp from "@/components/organisms/SectionUsp";
import ProdukOverview from "../../../components/organisms/SectionProdukOverview/SectionProdukOverview.component";
import { produkData } from "@/data/produk.data";
import useProcessProductList from "../../../hooks/useProcessProductList.hook";
import { IProduk } from "@/interfaces/produk.interface";
import SectionProdukOverview from "../../../components/organisms/SectionProdukOverview/SectionProdukOverview.component";

const arrFilterGroupBrand: IFilterGroupProps = {
  name: "Brand",
  arrItem: Object.keys(brandData)?.map((brandItem) => {
    return {
      ["label"]: brandItem,
      ["value"]: `${brandData[brandItem as TBrand]}`,
    };
  }),
};

const arrBreadcrumbItem: IBreadcrumbItemProps[] = [
  {
    breadcrumbTitle: "Home",
    breadcrumbUrl: `${PATHS.homepage}`,
  },
  {
    breadcrumbTitle: "Kategori",
    breadcrumbUrl: `${PATHS.kategoriProduk}`,
  },
];

const Produk = () => {
  const { query } = useRouter();
  const [arrProductData, totalProductData, isLoadingProduct] =
    useProcessProductList({ productData: produkData });

  const currentOverview: string = query?.cat
    ? produkKategoriData.find(
        (kategori) => kategori.categorySlug === query?.cat
      )?.categoryName || "Produk"
    : "Produk";

  const currentBreadcrumb: IBreadcrumbItemProps = {
    breadcrumbTitle: currentOverview,
    breadcrumbUrl: "",
  };
  arrBreadcrumbItem.splice(2, 1, currentBreadcrumb);

  return (
    <div className={clsx(s._Wrapper)}>
      <Breadcrumb className="container" arrBreadcrumbItem={arrBreadcrumbItem} />
      <div className={clsx(s._ProductOverviewWrapper, "container")}>
        <ProdukFilter
          arrFilterGroup={[arrFilterGroupBrand]}
          className={clsx(s._Filter)}
        />
        <SectionProdukOverview
          className={s._Overview}
          produkOverviewTitle={currentOverview}
          produkOverviewTotal={(totalProductData as number) || 0}
          produkOverviewProducts={arrProductData?.length ? arrProductData : []}
          isLoadingProduct={isLoadingProduct}
        />
      </div>
      <CardCta />
      <SectionUsp />
    </div>
  );
};

export default Produk;
