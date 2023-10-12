import React, { ReactNode, useEffect, useRef, useState } from "react";
import s from "./SliderContainer.module.scss";
import clsx from "clsx";
import { Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";
import { SwiperModule, SwiperOptions } from "swiper/types";

export interface ISliderContainerProps extends SwiperOptions, SwiperProps {
  withArrow?: boolean;
  children?: ReactNode;
  prevClass?: string;
  nextClass?: string;
}

export const swiperModules: SwiperModule[] = [A11y, Navigation];

const SliderContainer = ({
  children,
  withArrow = false,
  prevClass,
  nextClass,
  ...rest
}: ISliderContainerProps) => {
  const [sliderIsLoading, setSliderIsLoading] = useState(true);

  const prevArrowRef = useRef<HTMLButtonElement>(null);
  const nextArrowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (withArrow) {
      setSliderIsLoading(true);
      if (prevArrowRef && nextArrowRef) setSliderIsLoading(false);
    } else {
      setSliderIsLoading(false);
    }
  }, [prevArrowRef, nextArrowRef, withArrow]);

  return (
    <div className={clsx(s._Wrapper)}>
      {withArrow && (
        <>
          <button
            className={clsx(s._SwiperArrow, s._Prev, prevClass)}
            ref={prevArrowRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.983"
              height="36.965"
              viewBox="0 0 20.983 36.965"
            >
              <path
                id="Icon_feather-chevron-left"
                data-name="Icon feather-chevron-left"
                d="M28.447,38.894,13.5,23.947,28.447,9"
                transform="translate(-11 -5.464)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
            </svg>
          </button>
          <button
            className={clsx(s._SwiperArrow, s._Next, nextClass)}
            ref={nextArrowRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.983"
              height="36.965"
              viewBox="0 0 20.983 36.965"
            >
              <path
                id="Icon_feather-chevron-right"
                data-name="Icon feather-chevron-right"
                d="M13.5,38.894,28.447,23.947,13.5,9"
                transform="translate(-9.964 -5.464)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
            </svg>
          </button>
        </>
      )}
      {!sliderIsLoading && (
        <Swiper
          navigation={{
            prevEl: prevArrowRef ? prevArrowRef?.current : null,
            nextEl: nextArrowRef ? nextArrowRef?.current : null,
          }}
          modules={swiperModules}
          {...rest}
        >
          {children}
        </Swiper>
      )}
    </div>
  );
};

export default SliderContainer;
