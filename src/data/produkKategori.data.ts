import { IProdukKategori } from "@/interfaces/produkKategori.interface";

export const produkKategoriTypes = {
  ["komputer"]: "",
  ["aksesoris"]: "",
  ["lainnya"]: "",
  ["laptop"]: "",
  ["mac"]: "",
  ["pc-rakitan"]: "",
  ["monitor"]: "",
  ["processor"]: "",
  ["memori-ram"]: "",
  ["vga-card"]: "",
  ["disk"]: "",
  ["produk-baru"]: "",
};

export const produkKategoriData: IProdukKategori[] = [
  {
    categoryName: "Komputer",
    categoryPicure: "/images/produk/kategori/category-laptop.webp",
    categorySlug: "komputer",
    categoryParent: [],
  },
  {
    categoryName: "Laptop",
    categoryPicure: "/images/produk/kategori/category-laptop.webp",
    categorySlug: "laptop",
    categoryParent: ["komputer"],
  },
  {
    categoryName: "Mac",
    categoryPicure: "/images/produk/kategori/category-mac.webp",
    categorySlug: "mac",
    categoryParent: ["komputer"],
  },
  {
    categoryName: "PC Rakitan",
    categoryPicure: "/images/produk/kategori/category-pc_rakitan.webp",
    categorySlug: "pc-rakitan",
    categoryParent: ["komputer"],
  },
  {
    categoryName: "Monitor",
    categoryPicure: "/images/produk/kategori/category-monitor.webp",
    categorySlug: "monitor",
    categoryParent: ["aksesoris"],
  },
  {
    categoryName: "Processor",
    categoryPicure: "/images/produk/kategori/category-processor.webp",
    categorySlug: "processor",
    categoryParent: ["aksesoris"],
  },
  {
    categoryName: "Memory RAM",
    categoryPicure: "/images/produk/kategori/category-ram.webp",
    categorySlug: "memori-ram",
    categoryParent: ["aksesoris"],
  },
  {
    categoryName: "VGA Card",
    categoryPicure: "/images/produk/kategori/category-vga.webp",
    categorySlug: "vga-card",
    categoryParent: ["aksesoris"],
  },
  {
    categoryName: "Disk",
    categoryPicure: "/images/produk/kategori/category-disk.webp",
    categorySlug: "disk",
    categoryParent: ["aksesoris"],
  },
];
