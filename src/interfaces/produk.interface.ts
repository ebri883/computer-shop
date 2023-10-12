import { brandData } from "@/data/brand.data";
import { TBrand } from "@/types/brand.type";
import { TProdukKategori } from "@/types/produkKategori.type";

export interface IProdukSpecification {
  name: string;
  value: string;
}

export interface IProduk {
  productName: string;
  productSlug: string;
  productPrice: number;
  productSalePercent: number;
  productPicture: string;
  productGallery: string[];
  productCategory: TProdukKategori[];
  productBrand: TBrand;
  productAddedDate: string;
  productSellCount: number;
  productDescription: string;
  productSpecification: IProdukSpecification[];
}
