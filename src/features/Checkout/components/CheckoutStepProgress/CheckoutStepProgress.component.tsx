import React, { useState } from "react";
import s from "./CheckoutStepProgress.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/atoms/Typography";
import { TCheckoutStep } from "../../view/Checkout.view";

interface IProgressItem {
  label: string;
  activeStep: TCheckoutStep;
}

interface ICheckoutStepProgressProps {
  currentStep: TCheckoutStep;
  onClickProgressItem: (step: TCheckoutStep) => void;
}

const arrProgress: IProgressItem[] = [
  { label: "Atur pesanan", activeStep: "address" },
  { label: "Pembayaran", activeStep: "payment" },
];

const CheckoutStepProgress = ({
  currentStep = "address",
  onClickProgressItem,
}: ICheckoutStepProgressProps) => {
  const handleOnClickProgressItem = (step: TCheckoutStep) => {
    if (onClickProgressItem) {
      onClickProgressItem(step);
    }
  };

  return (
    <div className={clsx(s._Wrapper)}>
      {arrProgress?.map((item, key) => (
        <div
          key={key}
          style={{
            width: `calc(100% / ${arrProgress.length} - 10px * ${
              arrProgress.length - 1
            } / ${arrProgress.length})`,
          }}
          className={clsx(s._ProgressItem)}
          onClick={() => handleOnClickProgressItem(item.activeStep)}
        >
          <div className={clsx(s._ProgressTrack)}>
            <span
              style={{ width: item.activeStep <= currentStep ? "100%" : "0" }}
              className={clsx(s._ProgressBar)}
            ></span>
          </div>
          <Typography
            variant="body-lg"
            fontWeight={500}
            className={clsx("gray-4")}
          >
            {key + 1}. {item.label}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default CheckoutStepProgress;
