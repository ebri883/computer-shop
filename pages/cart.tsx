import dynamic from "next/dynamic";

const CartView = dynamic(() => import("@/features/Cart/view"), {
  ssr: false,
});

const SearchPage = () => {
  return <CartView />;
};

export default SearchPage;
