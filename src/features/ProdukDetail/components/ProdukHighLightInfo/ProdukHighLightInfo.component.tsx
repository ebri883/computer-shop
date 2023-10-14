import React, { ChangeEvent, useState } from "react";
import s from "./ProdukHighLightInfo.module.scss";
import clsx from "clsx";
import { IProduk } from "@/interfaces/produk.interface";
import { Typography } from "@/components/atoms/Typography";
import useGetProductFinalPrice from "@/hooks/useGetProductFinalPrice.hook";
import SalePrice from "@/components/molecules/SalePrice";
import useUpdateCartData from "@/hooks/useUpdateCartData.hook";

export interface IProdukHighLightInfoProps
  extends Pick<
    IProduk,
    "productName" | "productPrice" | "productSalePercent" | "productSlug"
  > {
  className?: string;
}

const ProdukHighLightInfo = ({
  productName,
  productPrice,
  productSalePercent,
  productSlug,
  className,
}: IProdukHighLightInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useUpdateCartData();

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

  const handleOnClickAddToCart = () => {
    addProductToCart({ productSlug, produkQuantity: quantity });
  };

  const displayedTotalPrice = (finalPrice * quantity)
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");

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
        <button className="button-secondary">Beli sekarang</button>
      </div>
    </div>
  );
};

export default ProdukHighLightInfo;
