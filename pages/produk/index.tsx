import dynamic from "next/dynamic";

const ProdukView = dynamic(() => import("@/features/Produk/view"), {
  ssr: false,
});

const Produk = () => {
  return <ProdukView />;
};

export default Produk;
