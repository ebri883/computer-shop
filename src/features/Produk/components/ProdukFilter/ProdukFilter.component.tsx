import React from "react";
import s from "./ProdukFilter.module.scss";
import clsx from "clsx";
import ProdukFilterGroup, {
  IFilterGroupProps,
} from "./ProdukFilterGroup.component";
import { Typography } from "@/components/atoms/Typography";
import { useRouter } from "next/router";
import useAppendParam from "@/hooks/useAppendParam.hook";

export interface IProductFilterProps {
  arrFilterGroup: IFilterGroupProps[];
  className?: string;
}

const ProdukFilter = ({ arrFilterGroup, className }: IProductFilterProps) => {
  const { query } = useRouter();
  const { appendReplaceParam } = useAppendParam();
  const onClickClearFilter = () => {
    appendReplaceParam({
      path: "produk",
      query: {},
    });
  };
  return (
    <div className={clsx(s._Wrapper, className)}>
      {Object.keys(query).length ? (
        <button
          style={{ fontSize: "14px" }}
          onClick={onClickClearFilter}
          className="button-1"
        >
          Bersihkan filter
        </button>
      ) : (
        ""
      )}
      {arrFilterGroup &&
        arrFilterGroup.map((filterGroup, key) => (
          <ProdukFilterGroup
            key={key}
            name={filterGroup.name}
            arrItem={filterGroup.arrItem}
          />
        ))}
      <div className={clsx(s._PriceWrapper)}>
        <Typography variant="body-md" fontWeight={700} className="gray-4">
          Harga
        </Typography>
        <form onSubmit={() => true}>
          <input type="number" name="startPrice" placeholder="Minimum" />
          <input type="number" name="endPrice" placeholder="Maximum" />
          <button style={{ fontSize: "14px" }} className="button-1">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProdukFilter;
