import dynamic from "next/dynamic";

const HomepageView = dynamic(() => import("@/features/Homepage/view"), {
  ssr: false,
});

const Homepage = () => {
  return <HomepageView />;
};

export default Homepage;
