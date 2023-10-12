import clsx from "clsx";
import React from "react";
import s from "./ProdukDetailInfo.module.scss";
import { IProdukSpecification } from "@/interfaces/produk.interface";

const ProdukSpeksifikasiItem = ({ name, value }: IProdukSpecification) => {
  return (
    <div className={clsx(s._WrapperSpecItem)}>
      <div className={clsx(s._Name)}>{name}</div>
      <div className={clsx(s._Detail)}>{value}</div>
    </div>
  );
};

export default ProdukSpeksifikasiItem;
