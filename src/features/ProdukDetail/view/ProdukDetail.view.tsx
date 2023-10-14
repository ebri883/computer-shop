import clsx from "clsx";
import React, { useEffect, useState } from "react";
import s from "./ProdukDetail.module.scss";
import { useRouter } from "next/router";
import ProdukDetailPicture from "../components/ProdukDetailPicture";
import { produkData } from "@/data/produk.data";
import { IProduk } from "@/interfaces/produk.interface";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { IBreadcrumbItemProps } from "@/components/atoms/Breadcrumb/Breadcrumb.component";
import { PATHS } from "@/constants/PATHS";
import ProdukHighLightInfo from "../components/ProdukHighLightInfo";
import CardCta from "@/components/molecules/CardCta";
import SectionUsp from "@/components/organisms/SectionUsp";
import HomepageHighlightProduk from "@/features/Homepage/components/HomepageHighlightProduk";
import useGenerateRandomProduct from "@/hooks/useGenerateRandomProduct.hook";
import ProdukDetailInfo from "../components/ProdukDetailInfo";

const arrBreadcrumbItem: IBreadcrumbItemProps[] = [
  { breadcrumbTitle: "Home", breadcrumbUrl: PATHS.homepage },
  { breadcrumbTitle: "Produk", breadcrumbUrl: PATHS.produk },
];

const ProdukDetail = () => {
  const { asPath, isReady } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const generatedProduk = useGenerateRandomProduct(produkData);

  const [currentProductData, setCurrentProductData] = useState<IProduk>();

  useEffect(() => {
    if (!isReady) return;
    let arrPathProduct = asPath.split("/");
    const getCurrentProductSlug = arrPathProduct[arrPathProduct.length - 1];

    const getCurrentProductData = [...produkData]?.find(
      (item) => item?.productSlug === getCurrentProductSlug
    );
    setCurrentProductData(getCurrentProductData);

    arrBreadcrumbItem.splice(2, 1, {
      breadcrumbTitle: getCurrentProductData?.productName || "",
      breadcrumbUrl: asPath,
    });
  }, [isReady, asPath]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, [asPath]);

  if (isLoading) return;

  return (
    <div className={clsx(s._Wrapper)}>
      <Breadcrumb className="container" arrBreadcrumbItem={arrBreadcrumbItem} />
      <div className={clsx(s._ProdukHighLightInfoWrapper, "container")}>
        <ProdukDetailPicture
          productPicture={currentProductData?.productPicture || ""}
          productGallery={currentProductData?.productGallery || []}
          productSlug={currentProductData?.productSlug || ""}
        />
        <ProdukHighLightInfo
          className={s._ProductHighlightInfo}
          productSlug={currentProductData?.productSlug || ""}
          productName={currentProductData?.productName || ""}
          productPrice={currentProductData?.productPrice || 0}
          productSalePercent={currentProductData?.productSalePercent || 0}
        />
      </div>
      <ProdukDetailInfo
        productDescription={currentProductData?.productDescription || ""}
        productSpecification={currentProductData?.productSpecification || []}
      />
      <HomepageHighlightProduk
        title="Produk Lainnya"
        arrCardProduct={generatedProduk}
      />
      <CardCta />
      <SectionUsp />
    </div>
  );
};

export default ProdukDetail;
