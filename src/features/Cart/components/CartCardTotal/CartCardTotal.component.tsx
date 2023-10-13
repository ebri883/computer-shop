import React from "react";
import s from "./CartCardTotal.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";

interface ICartCardTotalProps {
  cartTotal?: number;
}

const CartCardTotal = ({ cartTotal = 1000 }: ICartCardTotalProps) => {
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
        Rp {cartTotal}
      </Typography>
      <button className="button-1">Lanjut ke checkout</button>
    </div>
  );
};

export default CartCardTotal;
