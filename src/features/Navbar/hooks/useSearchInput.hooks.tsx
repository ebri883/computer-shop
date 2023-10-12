import useAppendParam from "@/hooks/useAppendParam.hook";
import React from "react";

const useSearchInput = () => {
  const { appendReplaceParam } = useAppendParam();
  const handleOnKeyDownInputSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Enter" && e.currentTarget.value) {
      appendReplaceParam({
        path: "search",
        query: {
          s: e.currentTarget.value,
        },
      });
    }
  };
  return {
    handleOnKeyDownInputSearch,
  };
};

export default useSearchInput;
