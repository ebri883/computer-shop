import clsx from "clsx";
import React from "react";
import s from "./CheckoutPayment.module.scss";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

const CheckoutPayment = () => {
  return (
    <div className={clsx(s._Wrapper)}>
      <div className={clsx(s._CardPayment)}>
        <Typography
          variant="h6"
          fontWeight={700}
          className={clsx("gray-4", s._Title)}
        >
          Metode pembayaran
        </Typography>
        <div className={clsx(s._PaymentWrapper)}>
          <div className={clsx(s._PaymentGroup)}>
            <Typography
              variant="body-lg"
              fontWeight={700}
              className={clsx("gray-4")}
            >
              Kartu kredit atau debit
            </Typography>
            <div className={clsx(s._InputWrapper)}>
              <div className={clsx(s._InputGroup)}>
                <input type="radio" name="paymentmethod" id="visa" />
                <div className={clsx(s._RadioChecked)}>
                  <svg width={20} height={20} viewBox="0 0 512 512">
                    <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
                    <path
                      className={clsx(s._Dot)}
                      d="M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z"
                    />
                  </svg>
                </div>
                <div className={clsx(s._RadioUnchecked)}>
                  <svg width={20} height={20} viewBox="0 0 512 512">
                    <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
                  </svg>
                </div>
                <label htmlFor="visa" className={clsx("body-md", "gray-4")}>
                  <Image
                    src={""}
                    alt="visa"
                    width={72}
                    height={36}
                    loading="lazy"
                  />{" "}
                  Visa
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CheckoutPayment;
