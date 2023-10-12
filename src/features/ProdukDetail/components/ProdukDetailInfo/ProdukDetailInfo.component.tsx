import React, { useEffect, useState } from "react";
import s from "./ProdukDetailInfo.module.scss";
import clsx from "clsx";
import { IProduk } from "@/interfaces/produk.interface";
import ProdukSpeksifikasiItem from "./ProdukSpeksifikasiItem.component";
import { useRouter } from "next/router";

type TProdukDetailInfo = "desc" | "spec";

interface ITabItem {
  label: string;
  value: TProdukDetailInfo;
}

export interface IProdukDetailInfoProps
  extends Pick<IProduk, "productDescription" | "productSpecification"> {}

const arrTab: ITabItem[] = [
  { label: "Deskripsi", value: "desc" },
  { label: "Spesifikasi", value: "spec" },
];

const ProdukDetailInfo = ({
  productDescription,
  productSpecification,
}: IProdukDetailInfoProps) => {
  const [activeTab, setActiveTab] = useState<TProdukDetailInfo>("desc");

  if (!productDescription && !productSpecification) return;

  return (
    <div className={clsx(s._Wrapper, "container")}>
      <div className={clsx(s._TabWrapper)}>
        {arrTab?.map((item, key) => (
          <div
            key={key}
            className={clsx(s._TabItem, activeTab === item.value && s._Active)}
            onClick={() => setActiveTab(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div
        className={clsx(s._ContentWrapper, activeTab === "spec" && s._IsSpec)}
      >
        {activeTab === "desc" ? (
          <div
            dangerouslySetInnerHTML={{ __html: productDescription }}
            style={{ fontFamily: "'Inter', sans-serif" }}
            className={clsx("gray-4")}
          ></div>
        ) : (
          <>
            {productSpecification?.map((item, key) => (
              <ProdukSpeksifikasiItem
                key={key}
                name={item.name}
                value={item.value}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProdukDetailInfo;
