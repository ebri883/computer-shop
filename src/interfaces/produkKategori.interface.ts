import { TProdukKategori } from "@/types/produkKategori.type";

export interface IProdukKategori {
  categoryName: string;
  categoryPicure: string;
  categorySlug: string;
  categoryParent?: TProdukKategori[];
}
