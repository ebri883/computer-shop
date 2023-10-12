import dynamic from "next/dynamic";

const SearchView = dynamic(() => import("@/features/Search/view"), {
  ssr: false,
});

const SearchPage = () => {
  return <SearchView />;
};

export default SearchPage;
