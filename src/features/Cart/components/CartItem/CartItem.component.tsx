import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./CartItem.module.scss";
import clsx from "clsx";
import Image from "next/image";
import imgTest from "../../../../../public/images/produk/produk/produk-2.jpg";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";
import { IProduk } from "@/interfaces/produk.interface";
import { IUserCartProduk } from "@/interfaces/user.interface";
import Link from "next/link";
import { PATHS } from "@/constants/PATHS";
import { useAppDispatch } from "@/hooks/useAppDispatch.hook";
import { mutateUserCartData } from "@/store/user/userSlice";
import useUpdateCartQuantity from "@/hooks/useUpdateCartData.hook";
import { useAppSelector } from "@/hooks/useAppSelector.hook";
import PopupContainer from "@/components/molecules/PopupContainer";

interface ICartItemProps
  extends Pick<
    IUserCartProduk,
    | "productPrice"
    | "productSalePercent"
    | "productName"
    | "productPicture"
    | "productSlug"
    | "produkQuantity"
  > {}

const CartItem = ({
  productName,
  productPicture,
  productPrice,
  productSalePercent,
  productSlug,
  produkQuantity,
}: ICartItemProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [quantity, setQuantity] = useState(produkQuantity || 1);
  const { updateCartProductQuantity, removeProductFromCart } =
    useUpdateCartQuantity();

  const { actualDisplayPrice, finalPrice, finalDisplayPrice, isSale } =
    useGetProductFinalPrice({
      productPrice: productPrice,
      productSalePercent: productSalePercent,
    });

  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
    updateCartProductQuantity({
      productSlug: productSlug,
      produkQuantity: quantity + 1,
    });
  };

  const handleDecrementQuantity = () => {
    if (quantity <= 1) return setQuantity(1);
    setQuantity((prev) => prev - 1);
    updateCartProductQuantity({
      productSlug: productSlug,
      produkQuantity: quantity - 1,
    });
  };

  const handleOnChangeInputQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const inputedValue = parseInt(e.currentTarget?.value as string);
    if (inputedValue < 1 || e.currentTarget?.value === "") {
      return setQuantity(1);
    }
    setQuantity(inputedValue);
    updateCartProductQuantity({
      productSlug: productSlug,
      produkQuantity: inputedValue,
    });
  };

  const handleOnClickDeleteItem = () => {
    removeProductFromCart({ productSlug });
    setIsPopupOpen(false);
  };

  const displayedTotalPrice = (finalPrice * quantity)
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");

  const popupHead = () => {
    return (
      <div className={clsx(s._PopupHead)}>
        <Typography
          variant="body-xl"
          fontWeight={700}
          className={clsx("gray-4")}
        >
          Hapus produk
        </Typography>
        <Icon
          iconName="IcIonicIosClose"
          size={14}
          onClick={() => setIsPopupOpen(false)}
          className={s._Close}
        />
      </div>
    );
  };

  const popupBody = () => {
    return (
      <div className={clsx(s._PopupBody)}>
        <Typography variant="body-md" className="gray-4">
          Hapus {productName} dari Keranjang Belanja?
        </Typography>
      </div>
    );
  };

  const popupFoot = () => {
    return (
      <div className={clsx(s._PopupFoot)}>
        <button
          className={clsx("button-secondary")}
          onClick={() => setIsPopupOpen(false)}
        >
          Batal
        </button>
        <button className={clsx("button-1")} onClick={handleOnClickDeleteItem}>
          Hapus
        </button>
      </div>
    );
  };

  return (
    <div className={clsx(s._Wrapper)}>
      <Image
        src={productPicture}
        width={100}
        height={100}
        alt={productSlug}
        loading="lazy"
        className={clsx(s._Image)}
      />
      <div className={clsx(s._ProdukInfo)}>
        <Link href={`${PATHS.produk}/${productSlug}`}>
          <Typography variant="body-md" className={clsx("gray-4")}>
            {productName}
          </Typography>
        </Link>
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
            onClick={() => setIsPopupOpen(true)}
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
      <PopupContainer
        headElement={popupHead()}
        bodyElement={popupBody()}
        footElement={popupFoot()}
        isOpen={isPopupOpen}
        className={s._PopupWrapper}
      />
    </div>
  );
};

export default CartItem;
