import s from "./Homepage.module.scss";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import {
  ISliderContainerProps,
  swiperModules,
} from "@/components/molecules/SliderContainer/SliderContainer.component";
import HomepageHero from "../components/HomepageHero";
import { arrHomepageHeroSlideData } from "../data/HomepageHeroData.data";
import HomepageHighlightCategory from "../components/HomepageHighlightCategory";
import { produkKategoriData } from "@/data/produkKategori.data";
import { PATHS } from "@/constants/PATHS";
import { produkData } from "@/data/produk.data";
import HomepageOffering from "../components/HomepageOffering";
import { arrHomepageOfferingData } from "../data/HomepageOfferingData.data";
import HomepageHighlightProduk from "../components/HomepageHighlightProduk";
import CardCta from "@/components/molecules/CardCta";
import SectionUsp from "@/components/organisms/SectionUsp";
import { ICardProductProps } from "@/components/molecules/CardProduct/CardProduct.component";
import useProcessProductList from "@/hooks/useProcessProductList.hook";

const homepageHeroSliderOpttions: ISliderContainerProps = {
  withArrow: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 1,
  modules: [...swiperModules, Autoplay],
};

const Homepage = () => {
  const [arrLatestProduct] = useProcessProductList({
    productData: produkData,
    selectedSort: "descDate",
  });

  const [arrBestSellerProduct] = useProcessProductList({
    productData: produkData,
    selectedSort: "descSellCount",
  });

  return (
    <div className={clsx(s._Wrapper)}>
      <HomepageHero
        heroSliderProps={homepageHeroSliderOpttions}
        heroSlideData={arrHomepageHeroSlideData}
      />
      <HomepageHighlightCategory
        title="Kategori produk"
        detailText="Lihat semua Kategori"
        detailUrl={`${PATHS.kategoriProduk}`}
        ArrCardCategory={
          produkKategoriData.length > 8
            ? produkKategoriData?.toSpliced(8, produkKategoriData.length - 1)
            : produkKategoriData
        }
      />
      {arrLatestProduct && (
        <HomepageHighlightProduk
          title="Produk terbaru"
          detailText="Lihat Semua Produk"
          detailUrl={`${PATHS.produk}?sort=descDate`}
          arrCardProduct={
            arrLatestProduct?.toSpliced(
              6,
              arrLatestProduct.length - 1
            ) as ICardProductProps[]
          }
        />
      )}
      <HomepageOffering arrCardOffer={arrHomepageOfferingData} />
      {arrBestSellerProduct && (
        <HomepageHighlightProduk
          title="Produk terlaris"
          detailText="Lihat Semua Produk"
          detailUrl={`${PATHS.produk}?sort=descSaleCount`}
          arrCardProduct={
            arrBestSellerProduct?.toSpliced(
              6,
              arrBestSellerProduct.length - 1
            ) as ICardProductProps[]
          }
        />
      )}
      <CardCta />
      <SectionUsp />
    </div>
  );
};

export default Homepage;
