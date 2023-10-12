import dynamic from "next/dynamic";

const ProdukDetailView = dynamic(() => import("@/features/ProdukDetail/view"), {
  ssr: false,
});

const ProdukDetail = () => {
  return <ProdukDetailView />;
};

export default ProdukDetail;
