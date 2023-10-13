import React from "react";
import s from "./Cart.module.scss";
import clsx from "clsx";
import CartItem from "../components/CartItem";
import CartCardTotal from "../components/CartCardTotal/CartCardTotal.component";
import { Typography } from "@/components/atoms/Typography";
import { produkData } from "@/data/produk.data";

const Cart = () => {
  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        <Typography
          component="h1"
          variant="h4"
          fontWeight={700}
          className={clsx("gray-4")}
        >
          Keranjang Belanja
        </Typography>
        <div className={clsx(s._CartContent)}>
          <div className={clsx(s._ItemList)}>
            {produkData?.map((item, key) => (
              <CartItem
                key={key}
                productName={item.productName}
                productPicture={item.productPicture}
                productPrice={item.productPrice}
                productSalePercent={item.productSalePercent}
              />
            ))}
          </div>
          <CartCardTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
