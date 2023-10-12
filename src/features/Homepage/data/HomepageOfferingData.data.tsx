import { ICardOfferProps } from "@/components/molecules/CardOffer/CardOffer.component";
import { PATHS } from "@/constants/PATHS";
import { homepageImagesRoot } from "@/constants/other";

export const arrHomepageOfferingData: ICardOfferProps[] = [
  {
    cardOfferTitle: "Koleksi laptop terbaik untuk anak sekolah",
    cardOfferButtonText: "Beli sekarang",
    cardOfferButtonUrl: `${PATHS.produk}`,
    cardOfferBackground: `${homepageImagesRoot}/card_offer-1.png`,
  },
  {
    cardOfferTitle: "Dapatkan spesial diskon di bulan Agustus dari DELL",
    cardOfferButtonText: "Beli sekarang",
    cardOfferButtonUrl: `${PATHS.produk}`,
    cardOfferBackground: `${homepageImagesRoot}/card_offer-2.png`,
  },
];
