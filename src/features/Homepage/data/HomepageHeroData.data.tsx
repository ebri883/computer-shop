import { PATHS } from "@/constants/PATHS";
import { IHeroSlideData } from "../components/HomepageHero/HomepageHeroSlide.component";
import { imagesRoot } from "@/constants/other";

export const arrHomepageHeroSlideData: IHeroSlideData[] = [
  {
    title: "Semakin produktif dirumah dengan pilihan terbaik",
    desc: "MacBook Pro (M1) 2020 mulai dari Rp 20.599.000",
    buttonText: "Beli Sekarang",
    buttonUrl: `${PATHS.produk}/macbook-pro-2020`,
    background: `${imagesRoot}/homepage/hero_bg-1.webp`,
  },
  {
    title: "Lewati batasanmu dengan performa sang Monster",
    desc: "Asus ROG STRIX-G15 G513RC-R735B7G-O mulai dari Rp18.952.000",
    buttonText: "Beli Sekarang",
    buttonUrl: `${PATHS.produk}/asus-rog-strix-g15`,
    background: `${imagesRoot}/homepage/hero_bg-2.webp`,
  },
];
