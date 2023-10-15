import dynamic from "next/dynamic";

const CheckoutView = dynamic(() => import("@/features/Checkout/view"), {
  ssr: false,
});

const Checkout = () => {
  return <CheckoutView />;
};

export default Checkout;
