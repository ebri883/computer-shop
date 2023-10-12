import { IProduk } from "@/interfaces/produk.interface";

const useGenerateRandomProduct = (
  produkData: IProduk[],
  generatedLength?: number
) => {
  if (!generatedLength) generatedLength = 6;
  const inputedProdukData = [...produkData];
  for (let i = generatedLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputedProdukData[i], inputedProdukData[j]] = [
      inputedProdukData[j],
      inputedProdukData[i],
    ];
  }

  let newProdukData: IProduk[] = [];
  for (let i = 0; i < generatedLength; i++) {
    newProdukData = [...newProdukData, inputedProdukData[i]];
  }

  return newProdukData;
};

export default useGenerateRandomProduct;
