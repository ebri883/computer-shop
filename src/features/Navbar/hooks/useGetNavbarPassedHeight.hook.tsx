import React from "react";

interface IUseGetNavbarPassedHeightProps {
  navbarRef: React.RefObject<HTMLDivElement>;
}

const useGetNavbarPassedHeight = ({
  navbarRef,
}: IUseGetNavbarPassedHeightProps) => {
  const navbarFullHeight = navbarRef?.current?.clientHeight || 0;
  const navbarTemporalSectionHeight =
    navbarRef?.current?.querySelector(".navbar-temporal-section")
      ?.clientHeight || 0;
  const navbarPassedHeight = navbarFullHeight - navbarTemporalSectionHeight;

  return navbarPassedHeight;
};

export default useGetNavbarPassedHeight;
