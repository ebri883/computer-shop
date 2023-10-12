import React from "react";
import s from "./HomepageHero.module.scss";
import clsx from "clsx";
import SliderContainer from "@/components/molecules/SliderContainer";
import { SwiperSlide } from "swiper/react";
import { ISliderContainerProps } from "@/components/molecules/SliderContainer/SliderContainer.component";
import HomepageHeroSlide, {
  IHeroSlideData,
} from "./HomepageHeroSlide.component";

interface IHomepageHeroProps {
  heroSliderProps: ISliderContainerProps;
  heroSlideData: IHeroSlideData[];
}

const HomepageHero = ({
  heroSlideData,
  heroSliderProps,
}: IHomepageHeroProps) => {
  if (heroSlideData.length === 0) return;
  return (
    <div className={clsx(s._Wrapper)}>
      <SliderContainer {...heroSliderProps}>
        {heroSlideData.map((slideItem, key) => {
          return (
            <SwiperSlide key={key}>
              <HomepageHeroSlide
                title={slideItem.title}
                desc={slideItem.desc}
                buttonText={slideItem.buttonText}
                buttonUrl={slideItem.buttonUrl}
                background={slideItem.background}
              />
            </SwiperSlide>
          );
        })}
      </SliderContainer>
    </div>
  );
};

export default HomepageHero;
