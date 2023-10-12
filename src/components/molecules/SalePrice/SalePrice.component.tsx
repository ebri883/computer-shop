import { Typography } from "@/components/atoms/Typography";
import React from "react";
import s from "./SalePrice.module.scss";
import clsx from "clsx";
import { IProduk } from "@/interfaces/produk.interface";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";

type UseGetProductFinalPriceReturnType = ReturnType<
  typeof useGetProductFinalPrice
>;

interface ISalePriceProps
  extends Pick<UseGetProductFinalPriceReturnType, "actualDisplayPrice">,
    Pick<IProduk, "productSalePercent"> {
  className?: string;
}

const SalePrice = ({
  actualDisplayPrice,
  productSalePercent,
  className,
}: ISalePriceProps) => {
  return (
    <Typography
      component="span"
      variant="body-md"
      fontWeight={500}
      className={clsx(s._Wrapper, "gray-3", className)}
    >
      <Typography component="span">Rp {actualDisplayPrice}</Typography>{" "}
      <Typography
        component="span"
        variant="body-sm"
        className={clsx(s._SalePercentage, "white")}
      >
        {productSalePercent}%
      </Typography>
    </Typography>
  );
};

export default SalePrice;
