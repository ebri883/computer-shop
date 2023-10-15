import React, { FormEvent, useState } from "react";
import clsx from "clsx";
import s from "./Checkout.module.scss";
import CheckoutTotalPrice from "../components/CheckoutTotalPrice";
import CheckoutPayment from "../components/CheckoutPayment";
import CheckoutFillData from "../components/CheckoutFillData";
import CheckoutStepProgress from "../components/CheckoutStepProgress";
import { Typography } from "@/components/atoms/Typography";
import { useAppSelector } from "@/hooks/useAppSelector.hook";
import { useAppDispatch } from "@/hooks/useAppDispatch.hook";
import { mutateUserCartData } from "@/store/user/userSlice";
import { IShippingMethod } from "@/interfaces/shippingMethod.interface";
import { jasaPengirimanData } from "@/data/jasaPengiriman.data";

export type TCheckoutStep = "address" | "payment";
type TStepFunctions = {
  [K in TCheckoutStep]: () => void;
};

const Checkout = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState<IShippingMethod>(jasaPengirimanData[0]);
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

  const handleOnSubmitFormAddress = (e: FormEvent<HTMLFormElement>) => {
    const formDataEntries = new FormData(e.currentTarget);
    const jsonDataEntries = Object.fromEntries(formDataEntries);
    dispatch(mutateUserCartData({ ...userData, ...jsonDataEntries }));
  };

  const handleOnChangeShippingMethod = (shippingItemData: IShippingMethod) => {
    setSelectedShippingMethod(shippingItemData);
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
            <CheckoutFillData
              userName={userData.userName}
              userPhoneNumber={userData.userPhoneNumber}
              userAddress={userData.userAddress}
              userVillageAddress={userData.userVillageAddress}
              userDistrictAddress={userData.userDistrictAddress}
              userCityAddress={userData.userCityAddress}
              userStateAddress={userData.userStateAddress}
              userPostCode={userData.userPostCode}
              currentShippingMethod={selectedShippingMethod.shippingMethodSlug}
              onSubmitFormAddress={handleOnSubmitFormAddress}
              onChangeShippingMethod={handleOnChangeShippingMethod}
            />
          ) : currentStep === "payment" ? (
            <CheckoutPayment />
          ) : (
            ""
          )}
        </div>
        <CheckoutTotalPrice
          userCartProduct={userData?.userCartData?.userCartProduct || []}
          shippingMethodPrice={selectedShippingMethod?.shippingMethodPrice || 0}
          userCartTotal={userData?.userCartData?.userCartTotal || 0}
          className={clsx(s._TotalPrice)}
          onClickTotalButton={handleOnClickTotalButton}
        />
      </div>
    </div>
  );
};

export default Checkout;
