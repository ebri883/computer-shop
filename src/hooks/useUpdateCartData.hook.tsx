import {
  IUser,
  IUserCartData,
  IUserCartProduk,
} from "@/interfaces/user.interface";
import { useAppSelector } from "./useAppSelector.hook";
import { mutateUserCartData } from "@/store/user/userSlice";
import { useAppDispatch } from "./useAppDispatch.hook";
import { produkData } from "@/data/produk.data";

const useUpdateCartData = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);

  const addProductToCart = (
    newData: Pick<IUserCartProduk, "produkQuantity" | "productSlug">
  ) => {
    const { userCartProduct } = userData?.userCartData || {
      userCartProduct: [],
    };
    const userAddedProduct = newData;
    const existingProduct = userCartProduct.find(
      (item) => item.productSlug === userAddedProduct.productSlug
    );

    let updatedCartProducts = [...userCartProduct];

    if (existingProduct) {
      const currentQuantity = existingProduct.produkQuantity;
      const addedQuantity = userAddedProduct.produkQuantity;

      updatedCartProducts = updatedCartProducts.map((item) =>
        item.productSlug === existingProduct.productSlug
          ? { ...item, produkQuantity: currentQuantity + addedQuantity }
          : item
      );
    } else {
      const addedProductData = produkData.find(
        (item) => item.productSlug === userAddedProduct.productSlug
      );

      if (addedProductData) {
        const addedProduct: IUserCartProduk = {
          ...addedProductData,
          produkQuantity: userAddedProduct.produkQuantity,
        };
        updatedCartProducts = [...updatedCartProducts, addedProduct];
      }
    }

    const totalCartPrice = updateTotalCartPrice(updatedCartProducts);

    const newUserCartData: IUserCartData = {
      userCartProduct: updatedCartProducts,
      userCartTotal: totalCartPrice,
    };

    const newUserData: IUser = { ...userData, userCartData: newUserCartData };

    dispatch(mutateUserCartData(newUserData));
  };

  const removeProductFromCart = (
    newData: Pick<IUserCartProduk, "productSlug">
  ) => {
    const arrUserCartDataProduct = [...userData?.userCartData?.userCartProduct];
    const selectedProduct = newData;
    const selectedProductIndex = arrUserCartDataProduct.findIndex(
      (userCartProduct) =>
        userCartProduct.productSlug === selectedProduct.productSlug
    );

    const newArrUserCartDataProduct = [
      ...arrUserCartDataProduct.slice(0, selectedProductIndex),
      ...arrUserCartDataProduct.slice(selectedProductIndex + 1),
    ];

    const totalCartPrice = updateTotalCartPrice(newArrUserCartDataProduct);

    const newUserCartData: IUserCartData = {
      userCartProduct: newArrUserCartDataProduct,
      userCartTotal: totalCartPrice,
    };
    const newUserData: IUser = { ...userData, userCartData: newUserCartData };
    dispatch(mutateUserCartData(newUserData));
  };

  const updateCartProductQuantity = (
    newData: Pick<IUserCartProduk, "produkQuantity" | "productSlug">
  ) => {
    const { userCartData } = userData ?? {
      userCartData: { userCartProduct: [] },
    };
    const arrUserCartDataProduct = [...userCartData.userCartProduct];
    const { productSlug, produkQuantity } = newData;

    const selectedProductIndex = arrUserCartDataProduct.findIndex(
      (userCartProduct) => userCartProduct.productSlug === productSlug
    );

    const newSelectedProduct: IUserCartProduk = {
      ...arrUserCartDataProduct[selectedProductIndex],
      produkQuantity,
    };

    const newArrUserCartDataProduct = [
      ...arrUserCartDataProduct.slice(0, selectedProductIndex),
      newSelectedProduct,
      ...arrUserCartDataProduct.slice(selectedProductIndex + 1),
    ];

    const totalCartPrice = updateTotalCartPrice(newArrUserCartDataProduct);

    const newUserCartData: IUserCartData = {
      userCartProduct: newArrUserCartDataProduct,
      userCartTotal: totalCartPrice,
    };

    const newUserData: IUser = {
      ...userData,
      userCartData: newUserCartData,
    };

    dispatch(mutateUserCartData(newUserData));
  };

  const updateTotalCartPrice = (arrUserCartProduct: IUserCartProduk[]) => {
    let totalCartPrice = 0;
    arrUserCartProduct.map((cartProductItem) => {
      if (cartProductItem.productSalePercent) {
        return (totalCartPrice +=
          (cartProductItem.productPrice -
            cartProductItem.productPrice / cartProductItem.productSalePercent) *
          cartProductItem.produkQuantity);
      } else {
        return (totalCartPrice +=
          cartProductItem.productPrice * cartProductItem.produkQuantity);
      }
    });

    return totalCartPrice;
  };

  return { updateCartProductQuantity, addProductToCart, removeProductFromCart };
};

export default useUpdateCartData;
