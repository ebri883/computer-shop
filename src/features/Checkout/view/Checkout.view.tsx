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
import { IPaymentMethodGroupItem } from "@/interfaces/paymentMethod.interface";
import { paymentMethodData } from "@/data/paymentMethod.data";
import { Icon } from "@/components/atoms/Icon";
import IconBox from "@/components/molecules/IconBox";
import PopupContainer from "@/components/molecules/PopupContainer";
import { useRouter } from "next/router";
import { PATHS } from "@/constants/PATHS";

export type TCheckoutStep = "address" | "payment";
type TStepFunctions = {
  [K in TCheckoutStep]: () => void;
};

const Checkout = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState<IShippingMethod>(jasaPengirimanData[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<IPaymentMethodGroupItem>(paymentMethodData[0].groupItem[0]);
  const [currentStep, setCurrentStep] = useState<TCheckoutStep>("address");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOnClickTotalButton = () => {
    const stepFunctions: TStepFunctions = {
      address: () => {
        setCurrentStep("payment");
      },
      payment: () => {
        setIsPopupOpen(true);
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

  const handleOnChangePaymentMethod = (
    paymentItem: IPaymentMethodGroupItem
  ) => {
    setSelectedPaymentMethod(paymentItem);
  };

  const handleOnClickClosePaymentPopup = () => {
    setIsPopupOpen(false);
    push(PATHS.homepage);
  };

  const popupHead = () => {
    return (
      <div className={clsx(s._PopupHead)}>
        <Typography
          variant="body-xl"
          fontWeight={700}
          className={clsx("gray-4")}
        >
          Pengaturan Alamat
        </Typography>
        <Icon
          iconName="IcIonicIosClose"
          size={14}
          onClick={() => handleOnClickClosePaymentPopup()}
          className={s._Close}
        />
      </div>
    );
  };

  const popupBody = () => {
    return (
      <div className={clsx(s._PopupBody)}>
        <div className={clsx(s._BodyItem)}>
          <Typography variant="body-md" className="gray-4">
            No Virtual Account BCA
          </Typography>
          <Typography variant="body-lg" className="gray-4">
            10382717157
          </Typography>
          <div className={s._IconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g
                id="Icon_feather-copy"
                data-name="Icon feather-copy"
                transform="translate(-2 -2)"
              >
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M15.4,13.5h8.55a1.9,1.9,0,0,1,1.9,1.9v8.55a1.9,1.9,0,0,1-1.9,1.9H15.4a1.9,1.9,0,0,1-1.9-1.9V15.4A1.9,1.9,0,0,1,15.4,13.5Z"
                  transform="translate(-3.85 -3.85)"
                  fill="none"
                  stroke="#06f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M5.85,15.35H4.9A1.9,1.9,0,0,1,3,13.45V4.9A1.9,1.9,0,0,1,4.9,3h8.55a1.9,1.9,0,0,1,1.9,1.9v.95"
                  fill="none"
                  stroke="#06f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            <Typography style={{ color: "#0066FF" }}>Salin</Typography>
          </div>
        </div>
        <div className={clsx(s._BodyItem)}>
          <Typography variant="body-md" className="gray-4">
            Jumlah yang harus dibayar
          </Typography>
          <Typography variant="body-lg" className="gray-4">
            Rp 36.850.000
          </Typography>
          <div className={s._IconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g
                id="Icon_feather-copy"
                data-name="Icon feather-copy"
                transform="translate(-2 -2)"
              >
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M15.4,13.5h8.55a1.9,1.9,0,0,1,1.9,1.9v8.55a1.9,1.9,0,0,1-1.9,1.9H15.4a1.9,1.9,0,0,1-1.9-1.9V15.4A1.9,1.9,0,0,1,15.4,13.5Z"
                  transform="translate(-3.85 -3.85)"
                  fill="none"
                  stroke="#06f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M5.85,15.35H4.9A1.9,1.9,0,0,1,3,13.45V4.9A1.9,1.9,0,0,1,4.9,3h8.55a1.9,1.9,0,0,1,1.9,1.9v.95"
                  fill="none"
                  stroke="#06f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            <Typography style={{ color: "#0066FF" }}>Salin</Typography>
          </div>
        </div>
        <div className={clsx(s._BodyItem)}>
          <Typography className={clsx("gray-4", s._Notification)}>
            Pastikan nominal yang kamu bayar sesuai dengan total belanja,
            sebelum{" "}
            <Typography component="span" fontWeight={700}>
              09 Agustus 2021, pukul 15:26 WIB
            </Typography>
          </Typography>
        </div>
      </div>
    );
  };

  const popupFoot = () => {
    return (
      <div className={clsx(s._PopupFoot)}>
        <Typography variant="body-sm" className={clsx("gray-4")}>
          Anda dapat melihat detail belanja ini melalui halaman akun/profile
        </Typography>
        <div className={clsx(s._ContactWrapper)}>
          <a href="https://wa.me/62812223444" target="_blank">
            <IconBox iconName="IcAwesomeWhatsapp" className={clsx("gray-3")}>
              <Typography variant="body-sm">081-222-3444</Typography>
            </IconBox>
          </a>
          <a href="mailto:sales@komputec.com">
            <IconBox
              iconName="IcFeathermail"
              iconSize={20}
              className={clsx("gray-3")}
            >
              <Typography variant="body-sm">sales@komputec.com</Typography>
            </IconBox>
          </a>
        </div>
      </div>
    );
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
            <CheckoutPayment
              onChangePaymentMethod={(paymentItem) =>
                handleOnChangePaymentMethod(paymentItem)
              }
              slug={selectedPaymentMethod.slug}
            />
          ) : (
            ""
          )}
        </div>
        <CheckoutTotalPrice
          currentStep={currentStep}
          userCartProduct={userData?.userCartData?.userCartProduct || []}
          shippingMethodPrice={selectedShippingMethod?.shippingMethodPrice || 0}
          userCartTotal={userData?.userCartData?.userCartTotal || 0}
          className={clsx(s._TotalPrice)}
          onClickTotalButton={handleOnClickTotalButton}
        />
      </div>
      <PopupContainer
        headElement={popupHead()}
        bodyElement={popupBody()}
        footElement={popupFoot()}
        isOpen={isPopupOpen}
        className={s._PopupWrapper}
      />
    </div>
  );
};

export default Checkout;
