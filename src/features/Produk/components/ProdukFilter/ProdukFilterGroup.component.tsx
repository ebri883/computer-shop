import React from "react";
import s from "./ProdukFilter.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import { PATHS } from "@/constants/PATHS";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IFilterItem {
  label: string;
  value: string;
}

export interface IFilterGroupProps {
  name: string;
  arrItem: IFilterItem[];
}

const ProdukFilterGroup = ({ name, arrItem }: IFilterGroupProps) => {
  const { query } = useRouter();
  delete query?.page;
  return (
    <div className={clsx(s._GroupWrapper)}>
      <Typography variant="body-md" fontWeight={700} className={clsx("gray-4")}>
        {name}
      </Typography>
      {arrItem
        ? arrItem.map((item, key) => (
            <Link
              href={{
                pathname: `${PATHS.produk}`,
                query: { ...query, brand: item.value },
              }}
              key={key}
              className={clsx(
                "body-md",
                item.value === query?.brand ? "red-1" : "gray-4"
              )}
            >
              {item.label}
            </Link>
          ))
        : ""}
    </div>
  );
};

export default ProdukFilterGroup;
