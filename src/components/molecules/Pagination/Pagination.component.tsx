import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { PATHS } from "@/constants/PATHS";
import useAppendParam from "@/hooks/useAppendParam.hook";
import { useRouter } from "next/router";
import s from "./Pagination.module.scss";

export interface IPaginationItem {
  label: string;
  value: string;
}

export interface IPaginationProps {
  arrNumbers: IPaginationItem[];
  paginationPath?: keyof typeof PATHS;
  paginationQueryParam?: string;
  onClickPrev?: () => void;
  onClickNext?: () => void;
}

const Pagination = ({
  paginationPath = "produk",
  paginationQueryParam = "overviewPage",
  arrNumbers,
  onClickNext,
  onClickPrev,
}: IPaginationProps) => {
  const { query } = useRouter();
  const { appendInjectParam } = useAppendParam();

  const handleOnClickPrev = () => {
    if (onClickPrev) onClickPrev();
    const currentPage = query?.[paginationQueryParam] || "1";
    const gotoPrevPage = parseInt(currentPage as string) - 1;
    if (gotoPrevPage > 0) {
      appendInjectParam({
        path: paginationPath,
        query: { ...query, [paginationQueryParam]: gotoPrevPage.toString() },
      });
    }
  };

  const handleOnClickNext = () => {
    if (onClickNext) onClickNext();
    const currentPage = query?.[paginationQueryParam] || "1";
    const gotoNextPage = parseInt(currentPage as string) + 1;
    if (gotoNextPage <= arrNumbers.length) {
      appendInjectParam({
        path: paginationPath,
        query: { [paginationQueryParam]: gotoNextPage.toString() },
      });
    }
  };

  return (
    <div className={clsx(s._Wrapper)}>
      <button
        onClick={handleOnClickPrev}
        disabled={
          parseInt((query?.[paginationQueryParam] as string) || "1") <= 1
        }
      >
        Sebelumnya
      </button>
      <div className={clsx(s._NumberWrapper)}>
        {arrNumbers?.map((number, key) => (
          <Link
            key={key}
            href={{
              pathname: PATHS[paginationPath],
              query: { [paginationQueryParam]: number.value },
            }}
            className={clsx(
              number.value === (query?.[paginationQueryParam] || "1") &&
                s._Active
            )}
          >
            {number.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleOnClickNext}
        disabled={
          parseInt((query?.[paginationQueryParam] as string) || "1") >=
          arrNumbers.length
        }
      >
        Selanjutnya
      </button>
    </div>
  );
};

export default Pagination;
