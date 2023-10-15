import React, { ChangeEvent, useState } from "react";
import s from "./ProdukHighLightInfo.module.scss";
import clsx from "clsx";
import { IProduk } from "@/interfaces/produk.interface";
import { Typography } from "@/components/atoms/Typography";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";
import SalePrice from "@/components/molecules/SalePrice";
import useUpdateCartData from "@/hooks/useUpdateCartData.hook";
import Image from "next/image";
import { Icon } from "@/components/atoms/Icon";
import PopupContainer from "@/components/molecules/PopupContainer";
import { useRouter } from "next/navigation";
import { PATHS } from "@/constants/PATHS";

export interface IProdukHighLightInfoProps
  extends Pick<
    IProduk,
    | "productName"
    | "productPrice"
    | "productSalePercent"
    | "productSlug"
    | "productPicture"
  > {
  className?: string;
}

const ProdukHighLightInfo = ({
  productName,
  productPrice,
  productSalePercent,
  productSlug,
  productPicture,
  className,
}: IProdukHighLightInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useUpdateCartData();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { push } = useRouter();

  const {
    actualDisplayPrice,
    actualProductPrice,
    finalPrice,
    finalDisplayPrice,
    isSale,
  } = useGetProductFinalPrice({
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

  const handleOnClickAddToCart = () => {
    addProductToCart({ productSlug, produkQuantity: quantity });
    setIsPopupOpen(true);
  };

  const handleOnClickGoToCart = () => {
    setIsPopupOpen(false);
    push(PATHS.cart);
  };

  const handleOnClickGoToCheckout = async () => {
    await addProductToCart({ productSlug, produkQuantity: quantity });
    setIsPopupOpen(false);
    push(PATHS.checkout);
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
          Produk Berhasil Ditambahkan
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
        <div className={clsx(s._OrderItem)}>
          <Image
            src={productPicture || ""}
            alt={productSlug || ""}
            width={100}
            height={100}
            loading="lazy"
          />
          <div className={clsx(s._TextWrapper)}>
            <Typography variant="body-sm" className={clsx("gray-4")}>
              {productName}
            </Typography>
            <Typography variant="body-sm" className={clsx("gray-4", s._Price)}>
              {quantity} X Rp {displayedTotalPrice}{" "}
              {isSale && (
                <Typography component="span">
                  Rp
                  {(actualProductPrice * quantity)
                    .toLocaleString()
                    .split(".")[0]
                    .replaceAll(",", ".")}
                </Typography>
              )}
            </Typography>
          </div>
        </div>
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
          Kembali belanja
        </button>
        <button className={clsx("button-1")} onClick={handleOnClickGoToCart}>
          Lanjut ke keranjang
        </button>
      </div>
    );
  };

  return (
    <div className={clsx(s._Wrapper, className)}>
      <div className={clsx(s._Container, s._Name)}>
        <Typography variant="h4" fontWeight={700} className={clsx("gray-4")}>
          {productName}
        </Typography>
      </div>
      <div className={clsx(s._Container, s._Price)}>
        <Typography variant="body-lg" className="gray-4">
          Harga
          {isSale && (
            <>
              <br />{" "}
              <Typography component="span" variant="body-md">
                Berakhir dalam tanggal 31 - 08 - 2021
              </Typography>
            </>
          )}
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          className={clsx("red-1", s._PriceWrapper)}
        >
          Rp {finalDisplayPrice}
          {isSale && (
            <SalePrice
              actualDisplayPrice={actualDisplayPrice}
              productSalePercent={productSalePercent}
            />
          )}
        </Typography>
      </div>
      <div className={clsx(s._Container, s._Estimation)}>
        <Typography variant="body-lg" className="gray-4">
          Estimasi
          <br />
          <Typography component="span" variant="body-md">
            Siap kirim dalam 1 - 4 hari
          </Typography>
        </Typography>
      </div>
      <div className={clsx(s._Container, s._Quantity)}>
        <Typography variant="body-lg" className="gray-4">
          Jumlah
        </Typography>
        <div className={clsx(s._InputWrapper)}>
          <button onClick={handleDecrementQuantity}>-</button>
          <input
            type="number"
            onChange={handleOnChangeInputQuantity}
            value={quantity}
          />
          <button onClick={handleIncrementQuantity}>+</button>
          <Typography className={"gray-4"}>
            Total Rp {displayedTotalPrice}
          </Typography>
        </div>
      </div>
      <div className={clsx(s._Container, s._Buttons)}>
        <button className="button-1" onClick={handleOnClickAddToCart}>
          Tambah ke keranjang
        </button>
        <button
          className="button-secondary"
          onClick={handleOnClickGoToCheckout}
        >
          Beli sekarang
        </button>
      </div>
      <PopupContainer
        headElement={popupHead()}
        bodyElement={popupBody()}
        footElement={popupFoot()}
        isOpen={isPopupOpen}
        className={clsx(s._PopupWrapper)}
      />
    </div>
  );
};

export default ProdukHighLightInfo;
