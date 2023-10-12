import { produkImagesRoot } from "@/constants/other";
import { IProduk } from "@/interfaces/produk.interface";

const generateProductSlug = (productName: string): string => {
  return productName.replaceAll(" ", "-").toLowerCase();
};

export const produkData: IProduk[] = [
  {
    productName: "Macbook Pro 2020",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "Macbook Pro 2020"
    )}-thumb.png`,
    productSlug: `${generateProductSlug("Macbook Pro 2020")}`,
    productPrice: 20599000,
    productSalePercent: 10,
    productCategory: ["mac", "laptop"],
    productBrand: "Apple",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-1.png`,
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-2.png`,
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-3.png`,
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-4.png`,
    ],
    productAddedDate: "2023-10-01 14:09:22",
    productSellCount: 1,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
      {
        name: "Layar",
        value: "Retina",
      },
    ],
  },
  {
    productName: "Asus ROG STRIX-G15 G513RC-R735B7G-O Ryzen7",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: `${generateProductSlug("produk 2")}`,
    productPrice: 18952000,
    productSalePercent: 0,
    productCategory: ["laptop"],
    productBrand: "Asus",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
    ],
    productAddedDate: "2023-10-01 16:09:22",
    productSellCount: 3,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Produk 3",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: `${generateProductSlug("Produk 3")}`,
    productPrice: 14999999,
    productSalePercent: 5,
    productCategory: ["laptop"],
    productBrand: "Asus",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
    ],
    productAddedDate: "2023-10-02 17:09:22",
    productSellCount: 0,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Produk 4",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: `${generateProductSlug("produk 4")}`,
    productPrice: 21990000,
    productSalePercent: 0,
    productCategory: ["laptop"],
    productBrand: "Asus",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
    ],
    productAddedDate: "2023-10-01 20:09:22",
    productSellCount: 2,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Product 5",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: `${generateProductSlug("produk 5")}`,
    productPrice: 7500000,
    productSalePercent: 0,
    productCategory: ["laptop"],
    productBrand: "Asus",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
    ],
    productAddedDate: "2023-09-01 16:09:22",
    productSellCount: 0,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Produk 6",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: `${generateProductSlug("produk 6")}`,
    productPrice: 2000000,
    productSalePercent: 0,
    productCategory: ["laptop"],
    productBrand: "Asus",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
      `${produkImagesRoot}/${generateProductSlug("produk 2")}-gal-1.jpg`,
    ],
    productAddedDate: "2023-10-01 16:09:22",
    productSellCount: 1,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Produk 7",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "Macbook Pro 2020"
    )}-thumb.png`,
    productSlug: `${generateProductSlug("produk 7")}`,
    productPrice: 32990000,
    productSalePercent: 10,
    productCategory: ["mac"],
    productBrand: "Dell",
    productGallery: [
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-1.png`,
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-2.png`,
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-3.png`,
      `${produkImagesRoot}/${generateProductSlug(
        "Macbook Pro 2020"
      )}-gal-4.png`,
    ],
    productAddedDate: "2023-10-04 14:09:22",
    productSellCount: 0,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
      {
        name: "Layar",
        value: "Retina",
      },
    ],
  },
  {
    productName: "Product 8",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: "product-8",
    productPrice: 12500000,
    productSalePercent: 15,
    productCategory: ["laptop"],
    productBrand: "Lenovo",
    productGallery: [
      `${produkImagesRoot}/Product8-gal-1.jpg`,
      `${produkImagesRoot}/Product8-gal-2.jpg`,
      `${produkImagesRoot}/Product8-gal-3.jpg`,
    ],
    productAddedDate: "2023-09-02 12:09:22",
    productSellCount: 5,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Product 9",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: "product-9",
    productPrice: 15999000,
    productSalePercent: 5,
    productCategory: ["laptop"],
    productBrand: "HP",
    productGallery: [
      `${produkImagesRoot}/Product9-gal-1.jpg`,
      `${produkImagesRoot}/Product9-gal-2.jpg`,
      `${produkImagesRoot}/Product9-gal-3.jpg`,
    ],
    productAddedDate: "2023-09-02 15:09:22",
    productSellCount: 8,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
  {
    productName: "Product 10",
    productPicture: `${produkImagesRoot}/${generateProductSlug(
      "produk 2"
    )}-gal-1.jpg`,
    productSlug: "product-10",
    productPrice: 8999000,
    productSalePercent: 0,
    productCategory: ["laptop"],
    productBrand: "Acer",
    productGallery: [
      `${produkImagesRoot}/Product10-gal-1.jpg`,
      `${produkImagesRoot}/Product10-gal-2.jpg`,
      `${produkImagesRoot}/Product10-gal-3.jpg`,
    ],
    productAddedDate: "2023-09-03 18:09:22",
    productSellCount: 3,
    productDescription: "<p>Test Macbook Pro 2020</p>",
    productSpecification: [
      {
        name: "Processor",
        value: "Apple silicon M1",
      },
    ],
  },
];
