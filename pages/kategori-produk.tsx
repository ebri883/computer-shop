import dynamic from "next/dynamic";

const KategoriProdukView = dynamic(() => import("@/features/KategoriProduk"), {
  ssr: false,
});

const Homepage = () => {
  return <KategoriProdukView />;
};

export default Homepage;
