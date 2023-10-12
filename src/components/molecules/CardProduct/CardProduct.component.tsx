import React from "react";
import s from "./CardProduct.module.scss";
import clsx from "clsx";
import { IProduk } from "@/interfaces/produk.interface";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import { PATHS } from "@/constants/PATHS";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";
import SalePrice from "../SalePrice";

export interface ICardProductProps
  extends Pick<
    IProduk,
    | "productName"
    | "productSlug"
    | "productPicture"
    | "productPrice"
    | "productSalePercent"
  > {}

const CardProduct = ({
  productName,
  productSlug,
  productPicture,
  productPrice,
  productSalePercent,
}: ICardProductProps) => {
  const { actualDisplayPrice, finalDisplayPrice, isSale } =
    useGetProductFinalPrice({
      productPrice: productPrice,
      productSalePercent: productSalePercent,
    });

  return (
    <div className={clsx(s._Wrapper)}>
      <Link href={`${PATHS.produk}${productSlug}`}>
        <Image
          src={productPicture}
          alt={productSlug}
          width={178}
          height={178}
          loading="lazy"
        />
        <Typography
          variant="body-md"
          fontWeight={500}
          className={clsx(s._ProductName, "gray-3")}
        >
          {productName}
        </Typography>
        {isSale && (
          <SalePrice
            actualDisplayPrice={actualDisplayPrice}
            productSalePercent={productSalePercent}
            className={clsx(s._ProductPrice, s._ProductSalePrice)}
          />
        )}
        <Typography
          variant="body-md"
          className={clsx(s._ProductPrice, isSale ? "red-2" : "gray-3")}
        >
          Rp {finalDisplayPrice}
        </Typography>
      </Link>
    </div>
  );
};

export default CardProduct;
