import { PATHS } from "@/constants/PATHS";
import { useRouter } from "next/router";
import React from "react";

const useSearchInput = () => {
  const router = useRouter();
  const handleOnKeyDownInputSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Enter") {
      router.push(
        {
          pathname: PATHS.produk,
          query: {
            s: e.currentTarget.value,
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  };
  return {
    handleOnKeyDownInputSearch,
  };
};

export default useSearchInput;
