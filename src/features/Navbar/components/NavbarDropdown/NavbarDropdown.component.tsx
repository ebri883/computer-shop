import clsx from "clsx";
import React, { useState } from "react";
import s from "./NavbarDropdown.module.scss";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";

interface INavbarDropdownProps {
  onClickDropdownTriggers: (dropdownOpenStatus: boolean) => void;
  isDropdownOpen: boolean;
  navbarHeight: number;
}

const NavbarDropdown = ({
  onClickDropdownTriggers,
  isDropdownOpen,
  navbarHeight,
}: INavbarDropdownProps) => {
  const handleToggleDropdown = () => {
    onClickDropdownTriggers(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    onClickDropdownTriggers(false);
  };

  return (
    <div className={clsx(s._Wrapper, isDropdownOpen && s._DropdownOpened)}>
      <div
        className={clsx(s._DropdownBtn)}
        onClick={() => handleToggleDropdown()}
      >
        <Icon iconName="IcOpenJustifyLeft" width={26.52} height={22.5} />
        <Typography
          variant="body-md"
          className="gray-3"
          style={{ textTransform: "uppercase" }}
        >
          Kategori
        </Typography>
      </div>
      <div className={clsx(s._DropdownMenuCategoryWrapper)}>
        <div className={clsx(s._DropdownMenu)}>
          <Typography fontWeight={700} className={(s._CategoryName, "gray-3")}>
            Komputer
          </Typography>
          <Link href={"/produk?cat=laptop"} onClick={handleCloseDropdown}>
            <Typography className="gray-3">Laptop</Typography>
          </Link>
        </div>
      </div>
      <div
        className={s._Overlay}
        style={{
          height: isDropdownOpen
            ? `calc(100dvh - ${navbarHeight}px)`
            : "100dvh",
        }}
        onClick={handleCloseDropdown}
      ></div>
    </div>
  );
};

export default NavbarDropdown;
