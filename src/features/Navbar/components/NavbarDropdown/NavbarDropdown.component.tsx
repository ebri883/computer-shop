import clsx from "clsx";
import React, { useEffect, useState } from "react";
import s from "./NavbarDropdown.module.scss";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import { produkKategoriData } from "@/data/produkKategori.data";
import { PATHS } from "@/constants/PATHS";
import { useRouter } from "next/router";

interface INavbarDropdownProps {
  onClickDropdownTriggers: (dropdownOpenStatus: boolean) => void;
  isDropdownOpen: boolean;
  navbarHeight: number;
}

const arrDropdownCategoryGroup = [
  {
    name: "Komputer",
    arrChild: produkKategoriData.filter((item) =>
      item.categoryParent?.includes("komputer")
    ),
  },
  {
    name: "Aksesoris",
    arrChild: produkKategoriData.filter((item) =>
      item.categoryParent?.includes("aksesoris")
    ),
  },
];

const NavbarDropdown = ({
  onClickDropdownTriggers,
  isDropdownOpen,
  navbarHeight,
}: INavbarDropdownProps) => {
  const { query, pathname } = useRouter();
  const handleToggleDropdown = () => {
    onClickDropdownTriggers(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    onClickDropdownTriggers(false);
  };

  useEffect(() => {
    if (pathname !== PATHS.search) {
      delete query?.s;
      delete query?.pageOverview;
    }
  }, [pathname]);

  useEffect(() => {
    delete query.s;
    delete query.pageOverview;
  }, [query.cat, query.brand]);

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
        {arrDropdownCategoryGroup &&
          arrDropdownCategoryGroup.map((group, key) => (
            <div key={key} className={clsx(s._DropdownMenu)}>
              <Typography
                fontWeight={700}
                className={(s._CategoryName, "gray-3")}
              >
                {group.name}
              </Typography>
              {group.arrChild &&
                group.arrChild?.map((child, key) => (
                  <Link
                    key={key}
                    href={{
                      pathname: PATHS.produk,
                      query: {
                        ...query,
                        cat: child.categorySlug,
                      },
                    }}
                    onClick={handleCloseDropdown}
                  >
                    <Typography className="gray-3">
                      {child.categoryName}
                    </Typography>
                  </Link>
                ))}
            </div>
          ))}
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
