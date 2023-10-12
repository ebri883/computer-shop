import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import splitByCapitalLetter from "@/utils/splitByCapitalLetter.util";
import { IProduk } from "@/interfaces/produk.interface";
import { TProdukSort } from "@/types/produkSort.type";
import { TProdukKategori } from "@/types/produkKategori.type";
import { TBrand } from "@/types/brand.type";

export type TUseProcessProductList = [
  IProduk[] | undefined,
  number | undefined,
  boolean
];

export interface IUseProcessProductList {
  productData: IProduk[];
  selectedSort?: TProdukSort;
  selectedCategory?: TProdukKategori;
  selectedBrand?: TBrand;
  searchValue?: string;
}

const useProcessProductList = ({
  productData,
  selectedCategory,
  selectedBrand,
  selectedSort,
  searchValue,
}: IUseProcessProductList): TUseProcessProductList => {
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [arrProductData, setArrProductData] = useState<IProduk[] | undefined>();
  const { query } = useRouter();

  const totalProductData = arrProductData?.length;

  const newSelectedSort = selectedSort
    ? selectedSort
    : (query?.sort as TProdukSort) || "ascName";
  const newSelectedCategory = selectedCategory
    ? selectedCategory
    : (query?.cat as TProdukKategori);
  const newSelectedBrand = selectedBrand
    ? selectedBrand
    : (query?.brand as TBrand);
  const newSearchValue = searchValue ? searchValue : "";

  const sortProduct = async (newSelectedSort: TProdukSort, data: IProduk[]) => {
    const [sortOrder, sortBy] = splitByCapitalLetter(newSelectedSort) || [
      "asc",
      "Name",
    ];

    const sortFunctions = {
      Name: (a: IProduk, b: IProduk) =>
        sortOrder === "asc"
          ? a.productName.localeCompare(b.productName)
          : b.productName.localeCompare(a.productName),
      Price: (a: IProduk, b: IProduk) =>
        sortOrder === "asc"
          ? a.productPrice - b.productPrice
          : b.productPrice - a.productPrice,
      Date: (a: IProduk, b: IProduk) =>
        sortOrder === "asc"
          ? new Date(a.productAddedDate).getTime() -
            new Date(b.productAddedDate).getTime()
          : new Date(b.productAddedDate).getTime() -
            new Date(a.productAddedDate).getTime(),
      Sell: (a: IProduk, b: IProduk) =>
        sortOrder === "asc"
          ? a.productSellCount - b.productSellCount
          : b.productSellCount - a.productSellCount,
    };

    setArrProductData(
      data.sort(sortFunctions[sortBy as keyof typeof sortFunctions])
    );
    return data.sort(sortFunctions[sortBy as keyof typeof sortFunctions]);
  };

  const categorySelectProduct = async (
    newSelectedCategory: TProdukKategori,
    data: IProduk[]
  ) => {
    if (!newSelectedCategory) return data;
    return data.filter((item) =>
      item.productCategory.includes(newSelectedCategory)
    );
  };

  const brandSelectProduct = async (
    newSelectedBrand: TBrand,
    data: IProduk[]
  ) => {
    if (!newSelectedBrand) return data;
    return data.filter(
      (item) => item.productBrand.toLocaleLowerCase() === newSelectedBrand
    );
  };

  const searchProduct = async (newSearchValue: string, data: IProduk[]) => {
    if (!newSearchValue) return data;
    return data.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(newSearchValue.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    if (!productData) return;

    let processedData: IProduk[] = productData ? [...productData] : [];
    let isProcessComplete = false;
    let processingStartTime: number | null = null;

    const handleLoadingComplete = () => {
      if (!isProcessComplete) {
        setArrProductData(processedData);
        setIsLoadingProduct(false);
        isProcessComplete = true;
      }
    };

    const sequentialProcess = async () => {
      processingStartTime = Date.now();

      try {
        processedData = await categorySelectProduct(
          newSelectedCategory,
          processedData
        );
        processedData = await brandSelectProduct(
          newSelectedBrand,
          processedData
        );
        processedData = await searchProduct(newSearchValue, processedData);
        processedData = await sortProduct(newSelectedSort, processedData);
      } catch (err) {
        console.error(err);
      } finally {
        const minimumLoadingTime = 1000;
        const elapsedTime = processingStartTime
          ? Date.now() - processingStartTime
          : 0;

        if (elapsedTime < minimumLoadingTime) {
          const remainingTime = minimumLoadingTime - elapsedTime;

          setTimeout(() => {
            handleLoadingComplete();
          }, remainingTime);
        }
      }
    };

    setIsLoadingProduct(true);

    sequentialProcess();
  }, [
    newSelectedBrand,
    newSelectedCategory,
    newSelectedSort,
    newSearchValue,
    productData,
  ]);

  return [arrProductData, totalProductData, isLoadingProduct];
};

export default useProcessProductList;
