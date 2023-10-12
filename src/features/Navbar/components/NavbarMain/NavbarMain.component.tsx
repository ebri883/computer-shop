import React from "react";
import s from "./NavbarMain.module.scss";
import { Icon } from "@/components/atoms/Icon";
import NavbarDropdown from "../NavbarDropdown";
import clsx from "clsx";
import Link from "next/link";
import { PATHS } from "@/constants/PATHS";

interface INavbarMainProps {
  isDropdownOpen: boolean;
  navbarHeight: number;
  onClickDropdownTriggers: (dropdownOpenStatus: boolean) => void;
  onKeyDownInputSearch: (search: React.KeyboardEvent<HTMLInputElement>) => void;
}

const NavbarMain = ({
  isDropdownOpen,
  navbarHeight,
  onClickDropdownTriggers,
  onKeyDownInputSearch,
}: INavbarMainProps) => {
  const handleOnKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDownInputSearch(e);
  };
  return (
    <div className={s._Wrapper}>
      <div className="container">
        <Link href={PATHS.homepage}>
          <Icon iconName="IcSiteLogo" width={226} height={47} />
        </Link>
        <NavbarDropdown
          onClickDropdownTriggers={(dropdownOpenStatus) =>
            onClickDropdownTriggers(dropdownOpenStatus)
          }
          isDropdownOpen={isDropdownOpen}
          navbarHeight={navbarHeight}
        />
        <div className={clsx(s._InputSearchWrapper)}>
          <input
            type="text"
            id="navSearch"
            className={clsx(s._InputSearch, "body-sm")}
            placeholder="Cari produk di komputech"
            onKeyDown={(e) => handleOnKeyDownInput(e)}
          />
          <label htmlFor="navSearch">
            <Icon iconName="IcFeatherSearch" size={14.235} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
