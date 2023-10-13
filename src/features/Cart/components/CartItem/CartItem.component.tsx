import React, { ChangeEvent, useState } from "react";
import s from "./CartItem.module.scss";
import clsx from "clsx";
import Image from "next/image";
import imgTest from "../../../../../public/images/produk/produk/produk-2.jpg";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";
import { IProduk } from "@/interfaces/produk.interface";

interface ICartItemProps
  extends Pick<
    IProduk,
    "productPrice" | "productSalePercent" | "productName" | "productPicture"
  > {}

const CartItem = ({
  productName,
  productPicture,
  productPrice,
  productSalePercent,
}: ICartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const { actualDisplayPrice, finalPrice, finalDisplayPrice, isSale } =
    useGetProductFinalPrice({
      productPrice: productPrice,
      productSalePercent: productSalePercent,
    });

  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity <= 1) return setQuantity(1);
    setQuantity((prev) => prev - 1);
  };

  const handleOnChangeInputQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const inputedValue = parseInt(e.currentTarget?.value as string);
    if (inputedValue < 1 || e.currentTarget?.value === "") {
      return setQuantity(1);
    }
    setQuantity(inputedValue);
  };

  const displayedTotalPrice = (finalPrice * quantity)
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");

  return (
    <div className={clsx(s._Wrapper)}>
      <Image
        src={imgTest}
        width={100}
        height={100}
        alt="test"
        loading="lazy"
        className={clsx(s._Image)}
      />
      <div className={clsx(s._ProdukInfo)}>
        <Typography variant="body-md" className={clsx("gray-4")}>
          {productName}
        </Typography>
        <Typography variant="body-md" className={clsx("gray-4")}>
          Rp {finalDisplayPrice}
        </Typography>
        {isSale && (
          <Typography
            variant="body-sm"
            className={clsx("gray-3", s._SalePrice)}
          >
            Rp {actualDisplayPrice}
          </Typography>
        )}
      </div>
      <div className={clsx(s._Quantity)}>
        <div className={clsx(s._InputWrapper)}>
          <Icon
            iconName="IcFeatherTrash"
            height={19}
            width={17}
            className={clsx("red-1")}
          />
          <button onClick={handleDecrementQuantity}>-</button>
          <input
            type="number"
            onChange={handleOnChangeInputQuantity}
            value={quantity}
          />
          <button onClick={handleIncrementQuantity}>+</button>
          <Typography className={clsx("gray-4", s._TotalPrice)}>
            Rp {displayedTotalPrice}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
