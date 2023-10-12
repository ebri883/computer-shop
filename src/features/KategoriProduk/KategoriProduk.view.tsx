import React from "react";
import s from "./KategoriProduk.module.scss";
import clsx from "clsx";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { IBreadcrumbItemProps } from "@/components/atoms/Breadcrumb/Breadcrumb.component";
import { PATHS } from "@/constants/PATHS";
import HomepageHighlightCategory from "@/features/Homepage/components/HomepageHighlightCategory";
import { produkKategoriData } from "@/data/produkKategori.data";
import CardCta from "@/components/molecules/CardCta";
import SectionUsp from "@/components/organisms/SectionUsp";
import { TProdukKategori } from "@/types/produkKategori.type";

const arrBreadcrumbKategoriPageData: IBreadcrumbItemProps[] = [
  {
    breadcrumbTitle: "Home",
    breadcrumbUrl: PATHS.homepage,
  },
  {
    breadcrumbTitle: "Kategori",
    breadcrumbUrl: PATHS.kategoriProduk,
  },
];

const KategoriProduk = () => {
  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        <Breadcrumb arrBreadcrumbItem={arrBreadcrumbKategoriPageData} />
      </div>
      <HomepageHighlightCategory
        title="Semua Kategori"
        ArrCardCategory={produkKategoriData}
      />
      <CardCta />
      <SectionUsp />
    </div>
  );
};

export default KategoriProduk;
