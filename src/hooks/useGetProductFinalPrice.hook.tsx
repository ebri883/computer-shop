import { IProduk } from "@/interfaces/produk.interface";

interface IUseGetProductFinalPriceProps
  extends Pick<IProduk, "productPrice" | "productSalePercent"> {}

const useGetProductFinalPrice = ({
  productPrice,
  productSalePercent,
}: IUseGetProductFinalPriceProps) => {
  let finalPrice = productPrice;
  let isSale = false;

  if (productPrice && productSalePercent) {
    finalPrice = productPrice - productPrice / productSalePercent;
    isSale = true;
  }

  const finalDisplayPrice = finalPrice
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");

  const actualDisplayPrice = productPrice
    .toLocaleString()
    .split(".")[0]
    .replaceAll(",", ".");

  return {
    actualProductPrice: productPrice,
    actualDisplayPrice,
    finalPrice,
    isSale,
    finalDisplayPrice,
  };
};

export default useGetProductFinalPrice;
