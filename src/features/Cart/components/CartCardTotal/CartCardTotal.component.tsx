import React from "react";
import s from "./CartCardTotal.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import { useRouter } from "next/router";
import { PATHS } from "@/constants/PATHS";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";

interface ICartCardTotalProps {
  cartTotal: number;
}

const CartCardTotal = ({ cartTotal }: ICartCardTotalProps) => {
  const { finalDisplayPrice } = useGetProductFinalPrice({
    productPrice: cartTotal,
    productSalePercent: 0,
  });

  const { push } = useRouter();

  const handleOnClickCheckout = () => {
    push(PATHS.checkout, undefined, { shallow: true });
  };

  return (
    <div className={clsx(s._Wrapper)}>
      <Typography variant="body-lg" className={clsx("gray-4")}>
        Total pesanan
      </Typography>
      <Typography
        variant="body-lg"
        fontWeight={700}
        className={clsx("gray-4", s._TotalPrice)}
      >
        Rp {finalDisplayPrice}
      </Typography>
      <button className="button-1" onClick={handleOnClickCheckout}>
        Lanjut ke checkout
      </button>
    </div>
  );
};

export default CartCardTotal;
