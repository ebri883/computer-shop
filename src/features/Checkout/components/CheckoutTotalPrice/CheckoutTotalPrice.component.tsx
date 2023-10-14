import React from "react";
import s from "./CheckoutTotalPrice.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

interface ICheckoutTotalPriceProps {
  className?: string;
  onClickTotalButton: () => void;
}

const CheckoutTotalPrice = ({
  onClickTotalButton,
  className,
}: ICheckoutTotalPriceProps) => {
  const handleOnClickTotalButton = () => {
    if (onClickTotalButton) {
      onClickTotalButton();
    }
  };
  return (
    <div className={clsx(s._Wrapper, className)}>
      <Typography
        variant="h6"
        fontWeight={700}
        className={clsx("gray-4", s._Title)}
      >
        Ringkasan pesanan
      </Typography>
      <div className={clsx(s._OrderList)}>
        <div className={clsx(s._OrderItem)}>
          <Image
            src={""}
            alt={"item"}
            width={100}
            height={100}
            loading="lazy"
          />
          <div className={clsx(s._TextWrapper)}>
            <Typography variant="body-sm" className={clsx("gray-4")}>
              Macbook Pro 2020
            </Typography>
            <Typography variant="body-sm" className={clsx("gray-4")}>
              1 X Rp 10.000
            </Typography>
          </div>
        </div>
      </div>
      <div className={clsx(s._SubtotalWrapper)}>
        <Typography className={clsx("gray-4", s._SubtotalItem)}>
          <span>Subtotal</span>
          <span>Rp 10.000</span>
        </Typography>
        <Typography className={clsx("gray-4", s._SubtotalItem)}>
          <span>Pengiriman</span>
          <span>Rp 3.000</span>
        </Typography>
      </div>
      <div className={clsx(s._TotalWrapper)}>
        <Typography
          variant="body-lg"
          fontWeight={700}
          className={clsx("gray-4", s._TotalItem)}
        >
          <span>Total belanja </span>
          <span>Rp 13.000</span>
        </Typography>
        <button className={clsx("button-1")} onClick={handleOnClickTotalButton}>
          Lanjut ke pembayaran
        </button>
      </div>
    </div>
  );
};

export default CheckoutTotalPrice;
