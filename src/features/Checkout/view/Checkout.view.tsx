import React, { useState } from "react";
import clsx from "clsx";
import s from "./Checkout.module.scss";
import CheckoutTotalPrice from "../components/CheckoutTotalPrice";
import CheckoutPayment from "../components/CheckoutPayment";
import CheckoutFillData from "../components/CheckoutFillData";
import CheckoutStepProgress from "../components/CheckoutStepProgress";
import { Typography } from "@/components/atoms/Typography";

export type TCheckoutStep = "address" | "payment";
type TStepFunctions = {
  [K in TCheckoutStep]: () => void;
};

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<TCheckoutStep>("address");

  const handleOnClickTotalButton = () => {
    const stepFunctions: TStepFunctions = {
      address: () => {
        setCurrentStep("payment");
      },
      payment: () => {
        setCurrentStep("address");
      },
    };

    stepFunctions?.[currentStep]();
  };

  const handleOnClickProgressItem = (itemStep: TCheckoutStep) => {
    setCurrentStep(itemStep);
  };

  return (
    <div className={clsx(s._Wrapper)}>
      <div className="container">
        <Typography
          component="h1"
          variant="h4"
          fontWeight={700}
          className={clsx("gray-4")}
        >
          Checkout
        </Typography>
        <div className={clsx(s._CheckoutForm)}>
          <CheckoutStepProgress
            onClickProgressItem={handleOnClickProgressItem}
            currentStep={currentStep}
          />
          {currentStep === "address" ? (
            <CheckoutFillData />
          ) : currentStep === "payment" ? (
            <CheckoutPayment />
          ) : (
            ""
          )}
        </div>
        <CheckoutTotalPrice
          className={clsx(s._TotalPrice)}
          onClickTotalButton={handleOnClickTotalButton}
        />
      </div>
    </div>
  );
};

export default Checkout;
