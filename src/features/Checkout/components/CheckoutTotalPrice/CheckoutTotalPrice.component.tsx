import React from "react";
import s from "./CheckoutTotalPrice.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
import { IShippingMethod } from "@/interfaces/shippingMethod.interface";
import { IUser, IUserCartData } from "@/interfaces/user.interface";

interface ICheckoutTotalPriceProps
  extends Pick<IShippingMethod, "shippingMethodPrice">,
    Pick<IUserCartData, "userCartTotal" | "userCartProduct"> {
  className?: string;
  onClickTotalButton: () => void;
}

const CheckoutTotalPrice = ({
  shippingMethodPrice,
  userCartTotal,
  userCartProduct,
  onClickTotalButton,
  className,
}: ICheckoutTotalPriceProps) => {
  const handleOnClickTotalButton = () => {
    if (onClickTotalButton) {
      onClickTotalButton();
    }
  };

  const subTotal = userCartTotal;
  const displayedSubtotal = subTotal
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");
  const shippingPrice = shippingMethodPrice;
  const displayedShippingPrice = shippingPrice
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");
  const totalPrice = shippingPrice + subTotal;
  const displayedTotalPrice = totalPrice
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");

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
        {userCartProduct?.map((item, key) => (
          <div key={key} className={clsx(s._OrderItem)}>
            <Image
              src={item.productPicture}
              alt={item.productSlug}
              width={100}
              height={100}
              loading="lazy"
            />
            <div className={clsx(s._TextWrapper)}>
              <Typography variant="body-sm" className={clsx("gray-4")}>
                {item.productName}
              </Typography>
              <Typography variant="body-sm" className={clsx("gray-4")}>
                {item.produkQuantity} X Rp{" "}
                {(
                  (item.productPrice -
                    item.productPrice / item.productSalePercent) *
                  item.produkQuantity
                )
                  .toLocaleString()
                  .split(".")[0]
                  .replaceAll(",", ".")}
              </Typography>
              <Typography
                variant="body-sm"
                style={{ textDecoration: "line-through" }}
                className={clsx("gray-4")}
              >
                Rp{" "}
                {(item.productPrice * item.produkQuantity)
                  .toLocaleString()
                  .split(".")[0]
                  .replaceAll(",", ".")}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={clsx(s._SubtotalWrapper)}>
        <Typography className={clsx("gray-4", s._SubtotalItem)}>
          <span>Subtotal</span>
          <span>Rp {displayedSubtotal}</span>
        </Typography>
        <Typography className={clsx("gray-4", s._SubtotalItem)}>
          <span>Pengiriman</span>
          <span>Rp {displayedShippingPrice}</span>
        </Typography>
      </div>
      <div className={clsx(s._TotalWrapper)}>
        <Typography
          variant="body-lg"
          fontWeight={700}
          className={clsx("gray-4", s._TotalItem)}
        >
          <span>Total belanja </span>
          <span>Rp {displayedTotalPrice}</span>
        </Typography>
        <button className={clsx("button-1")} onClick={handleOnClickTotalButton}>
          Lanjut ke pembayaran
        </button>
      </div>
    </div>
  );
};

export default CheckoutTotalPrice;
