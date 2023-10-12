import { Typography } from "@/components/atoms/Typography";
import { IFilterItem } from "@/features/Produk/components/ProdukFilter/ProdukFilterGroup.component";
import clsx from "clsx";
import s from "./Sort.module.scss";
import React, { ChangeEvent } from "react";
import useAppendParam from "@/hooks/useAppendParam.hook";
import { PATHS } from "@/constants/PATHS";
import { useRouter } from "next/router";

interface ISortProps {
  sortQuery?: string;
  arrSortItem?: IFilterItem[];
  sortPath?: keyof typeof PATHS;
  onChangeSort?: (e: ChangeEvent, sortQuery: string) => void;
}

const arrSortItemData: IFilterItem[] = [
  {
    label: "A-Z",
    value: "ascName",
  },
  {
    label: "Z-A",
    value: "descName",
  },
  {
    label: "Termahal",
    value: "descPrice",
  },
  {
    label: "Temurah",
    value: "ascPrice",
  },
  {
    label: "Terbaru",
    value: "ascDate",
  },
];

const Sort = ({
  sortQuery = "sort",
  sortPath = "produk",
  arrSortItem = arrSortItemData,
  onChangeSort,
}: ISortProps) => {
  const { query, isReady } = useRouter();
  const { appendInjectParam } = useAppendParam();

  const handleOnChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChangeSort) return onChangeSort(e, sortQuery);

    appendInjectParam({
      path: sortPath,
      query: {
        [sortQuery]: e.currentTarget.value,
      },
    });

    e.currentTarget.blur();
  };

  return (
    <div className={clsx(s._Wrapper)}>
      <Typography className="gray-3" style={{ textTransform: "uppercase" }}>
        Urut Berdasarkan
      </Typography>
      <div className={s._SelectWrapper}>
        <select onChange={handleOnChangeSort}>
          {arrSortItem.length &&
            isReady &&
            arrSortItem.map((item, key) => (
              <option
                key={key}
                value={item.value}
                selected={query?.[`${sortQuery}`] === item.value}
              >
                {item.label}
              </option>
            ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.095"
          height="8.048"
          viewBox="0 0 14.095 8.048"
        >
          <path
            id="Icon_feather-chevron-down"
            data-name="Icon feather-chevron-down"
            d="M9,13.5l5.634,5.634L20.267,13.5"
            transform="translate(-7.586 -12.086)"
            fill="none"
            stroke="#575757"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sort;
