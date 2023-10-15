import React, { useState } from "react";
import s from "./ProdukDetailPicture.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { IProduk } from "@/interfaces/produk.interface";
import SliderContainer from "@/components/molecules/SliderContainer";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import { swiperModules } from "@/components/molecules/SliderContainer/SliderContainer.component";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export interface IProdukDetailPictureProps
  extends Pick<IProduk, "productPicture" | "productGallery" | "productSlug"> {}

const ProdukDetailPicture = ({
  productPicture,
  productGallery,
  productSlug,
}: IProdukDetailPictureProps) => {
  const [sliderEl, setSliderEl] = useState<Swiper>();

  return (
    <div className={clsx(s._Wrapper)}>
      <div className={clsx(s._BigPicture)}>
        <SliderContainer
          slidesPerView={1}
          withArrow={true}
          prevClass={s._Prev}
          nextClass={s._Next}
          thumbs={{ swiper: sliderEl }}
          modules={[...swiperModules, Thumbs]}
        >
          <SwiperSlide>
            <Image
              src={productPicture}
              width={570}
              height={570}
              alt={"productThubnail"}
              priority
            />
          </SwiperSlide>
          {productGallery?.map((item, key) => (
            <SwiperSlide key={key}>
              <Image
                src={item}
                width={570}
                height={570}
                loading="lazy"
                alt={`product-gallery-${key + 1}`}
              />
            </SwiperSlide>
          ))}
        </SliderContainer>
      </div>
      <div className={clsx(s._GalleryWrapper)}>
        <SliderContainer
          onSwiper={setSliderEl}
          slidesPerView={4}
          spaceBetween={12}
        >
          <SwiperSlide>
            <Image
              src={productPicture}
              width={570}
              height={570}
              loading="lazy"
              alt={`product-gallery-0`}
            />
          </SwiperSlide>
          {productGallery?.map((item, key) => (
            <SwiperSlide key={key}>
              <Image
                src={item}
                width={570}
                height={570}
                loading="lazy"
                alt={`product-gallery-${key + 1}`}
              />
            </SwiperSlide>
          ))}
        </SliderContainer>
      </div>
    </div>
  );
};

export default ProdukDetailPicture;
