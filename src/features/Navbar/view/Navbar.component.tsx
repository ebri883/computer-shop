import React, { useRef, useState } from "react";
import s from "./Navbar.module.scss";
import clsx from "clsx";
import NavbarInfo from "../components/Navbarinfo";
import NavbarMain from "../components/NavbarMain";
import NavbarTemporalSection from "../components/NavbarTemporalSection";
import useGetNavbarPassedHeight from "../hooks/useGetNavbarPassedHeight.hook";
import useSearchInput from "../hooks/useSearchInput.hooks";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTemporalSectionClosed, setIsTemporalSectionClosed] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarPassedHeight = useGetNavbarPassedHeight({ navbarRef: navbarRef });

  const handleOnClickNavbarTemporalSectionIc = () => {
    setIsTemporalSectionClosed(true);
  };

  const { handleOnKeyDownInputSearch } = useSearchInput();

  return (
    <div className={clsx(s._Wrapper)} ref={navbarRef}>
      <div className="container">
        <NavbarInfo />
        <NavbarMain
          onClickDropdownTriggers={(dropdwonOpenStatus) =>
            setIsDropdownOpen(dropdwonOpenStatus)
          }
          onKeyDownInputSearch={(e) => handleOnKeyDownInputSearch(e)}
          isDropdownOpen={isDropdownOpen}
          navbarHeight={navbarPassedHeight}
        />
        {!isTemporalSectionClosed && (
          <NavbarTemporalSection
            onClickNavbarTemporalSectionIc={
              handleOnClickNavbarTemporalSectionIc
            }
          >
            Dapatkan diskon ongkir untuk pembelian minimal Rp 500.000
          </NavbarTemporalSection>
        )}
      </div>
    </div>
  );
};

export default Navbar;
