import React, { useEffect, useMemo } from "react";
import s from "./Cart.module.scss";
import clsx from "clsx";
import CartItem from "../components/CartItem";
import CartCardTotal from "../components/CartCardTotal/CartCardTotal.component";
import { Typography } from "@/components/atoms/Typography";
import { useAppSelector } from "@/hooks/useAppSelector.hook";

const Cart = () => {
  const { userData } = useAppSelector((state) => state.user);

  const arrCartProduct = useMemo(() => {
    return [...userData.userCartData.userCartProduct];
  }, [userData]);

  const cartTotalPrice = userData.userCartData?.userCartTotal;

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
            {arrCartProduct?.map((item, key) => (
              <CartItem
                key={item.productSlug}
                productName={item.productName}
                productPicture={item.productPicture}
                productPrice={item.productPrice}
                productSalePercent={item.productSalePercent}
                productSlug={item.productSlug}
                produkQuantity={item.produkQuantity}
              />
            ))}
          </div>
          <CartCardTotal cartTotal={cartTotalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
