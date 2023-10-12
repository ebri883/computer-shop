import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import s from "./SectionProdukOverview.module.scss";
import CardProduct from "@/components/molecules/CardProduct";
import { Typography } from "@/components/atoms/Typography";
import Sort from "@/components/molecules/Sort";
import Pagination from "@/components/molecules/Pagination";
import { IPaginationItem } from "@/components/molecules/Pagination/Pagination.component";
import { ICardProductProps } from "@/components/molecules/CardProduct/CardProduct.component";
import { PATHS } from "@/constants/PATHS";

interface IProdukOverviewProps {
  produkOverviewTitle: string;
  produkOverviewTotal: number;
  produkOverviewProducts: ICardProductProps[];
  produkOverviewCardPerRow?: number;
  produkOverviewCardPerPage?: number;
  produkOverviewCardSortPath?: keyof typeof PATHS;
  produkOverviewCardPaginationPath?: keyof typeof PATHS;
  isLoadingProduct: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SectionProdukOverview = ({
  produkOverviewTitle,
  produkOverviewTotal,
  produkOverviewProducts,
  produkOverviewCardPerRow = 5,
  produkOverviewCardPerPage = 15,
  produkOverviewCardSortPath,
  produkOverviewCardPaginationPath,
  isLoadingProduct,
  className,
  style,
}: IProdukOverviewProps) => {
  const { query } = useRouter();
  const [currentProdukOverviewProducts, setCurrentProdukOverviewProducts] =
    useState<ICardProductProps[]>([]);
  const [arrPagination, setArrPagination] = useState<IPaginationItem[]>([]);
  const currentPage: number = parseInt(query?.overviewPage as string) || 1;

  const calculatePaginationTotal = () => {
    const total = Math.floor(
      (produkOverviewProducts?.length || 0) / produkOverviewCardPerPage
    );
    return (
      total +
      (total * produkOverviewCardPerPage < produkOverviewProducts?.length
        ? 1
        : 0)
    );
  };

  useEffect(() => {
    let temporalPaginationArray: IPaginationItem[] = [];

    for (let i = 1; i <= calculatePaginationTotal(); i++) {
      temporalPaginationArray = [
        ...temporalPaginationArray,
        { label: `${i}`, value: `${i}` },
      ];
    }

    setArrPagination(temporalPaginationArray);
  }, [isLoadingProduct]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * produkOverviewCardPerPage;
    const displayedItems = produkOverviewProducts?.slice(
      startIndex,
      startIndex + produkOverviewCardPerPage
    );

    setCurrentProdukOverviewProducts(displayedItems);
  }, [query?.overviewPage, produkOverviewProducts, currentPage]);

  return (
    <div style={style} className={clsx(s._Wrapper, className)}>
      <div className={clsx(s._Head)}>
        <div className={clsx(s._TitleWrapper)}>
          <Typography component="h1" variant="h4" fontWeight={700}>
            {produkOverviewTitle}
          </Typography>
          <Typography variant="body-md">
            {!isLoadingProduct &&
              `Menampilkan produk ${produkOverviewProducts?.length || 0} dari
            ${produkOverviewTotal} produk`}
          </Typography>
        </div>
        <Sort sortPath={produkOverviewCardSortPath} />
      </div>
      <div
        className={clsx(
          produkOverviewProducts?.length && !isLoadingProduct && s._Body
        )}
        style={{
          gridTemplateColumns: `repeat(${produkOverviewCardPerRow}, calc(100% / ${produkOverviewCardPerRow} - 30px * ${
            produkOverviewCardPerRow - 1
          } / ${produkOverviewCardPerRow}))`,
        }}
      >
        {isLoadingProduct ? (
          <Typography variant="h4" fontWeight={700} className="gray-3">
            Sedang memuat
          </Typography>
        ) : currentProdukOverviewProducts?.length && !isLoadingProduct ? (
          currentProdukOverviewProducts.map((product, key) => (
            <CardProduct
              key={key}
              productName={product.productName}
              productPrice={product.productPrice}
              productSalePercent={product.productSalePercent}
              productPicture={product.productPicture}
              productSlug={`/${product.productSlug}`}
            />
          ))
        ) : produkOverviewTotal === 0 ? (
          <Typography variant="h4" fontWeight={700} className="gray-3">
            Produk tidak ditemukan
          </Typography>
        ) : (
          ""
        )}
      </div>
      {arrPagination.length > 1 && (
        <div className={clsx(s._Foot)}>
          <Pagination
            arrNumbers={arrPagination}
            paginationPath={produkOverviewCardPaginationPath}
          />
        </div>
      )}
    </div>
  );
};

export default SectionProdukOverview;
