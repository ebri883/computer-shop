import clsx from "clsx";
import React, {
  ChangeEvent,
  FormEvent,
  RefObject,
  useRef,
  useState,
} from "react";
import s from "./CheckoutFillData.module.scss";
import { Typography } from "@/components/atoms/Typography";
import { IUser } from "@/interfaces/user.interface";
import { Icon } from "@/components/atoms/Icon";
import PopupContainer from "@/components/molecules/PopupContainer";
import { jasaPengirimanData } from "@/data/jasaPengiriman.data";
import { IShippingMethod } from "@/interfaces/shippingMethod.interface";

export interface ICheckoutFillDataProps
  extends Pick<
    IUser,
    | "userName"
    | "userPhoneNumber"
    | "userAddress"
    | "userVillageAddress"
    | "userCityAddress"
    | "userDistrictAddress"
    | "userStateAddress"
    | "userPostCode"
  > {
  onSubmitFormAddress: (e: FormEvent<HTMLFormElement>) => void;
  onChangeShippingMethod: (shippingItemData: IShippingMethod) => void;
}

const CheckoutFillData = ({
  userName,
  userPhoneNumber,
  userAddress,
  userVillageAddress,
  userDistrictAddress,
  userCityAddress,
  userStateAddress,
  userPostCode,
  onSubmitFormAddress,
  onChangeShippingMethod,
}: ICheckoutFillDataProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleOnClickSubmitButton = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event("submit", { bubbles: true }));
    }
  };

  const handleOnSubmitAddress = (e: FormEvent<HTMLFormElement>) => {
    if (onSubmitFormAddress) {
      onSubmitFormAddress(e);
    }
    setIsPopupOpen(false);
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
          onClick={() => setIsPopupOpen(false)}
          className={s._Close}
        />
      </div>
    );
  };

  const popupBody = () => {
    return (
      <div className={clsx(s._PopupBody)}>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmitAddress(e);
          }}
        >
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="name">Nama lengkap</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              id="name"
              name="userName"
              defaultValue={userName}
            />
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="phone">Nomor ponsel</label>
            <input
              type="number"
              placeholder="Nomor ponsel"
              id="phone"
              name="userPhoneNumber"
              defaultValue={userPhoneNumber}
            />
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="address">Alamat lengkap</label>
            <textarea
              rows={3}
              placeholder="Alamat lengkap"
              id="address"
              name="userAddress"
              defaultValue={userAddress}
            />
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="province">Provinsi</label>
            <select
              placeholder="Provinsi"
              id="province"
              name="userStateAddress"
              defaultValue={userStateAddress}
            >
              <option selected style={{ display: "none" }}>
                Provinsi
              </option>
              <option value={"Jawa Tengah"}>Jawa Tengah</option>
              <option value={"Special Region of Yogyakarta"}>
                Special Region of Yogyakarta
              </option>
            </select>
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="city">Provinsi</label>
            <select
              placeholder="Kota"
              id="city"
              name="userCityAddress"
              defaultValue={userCityAddress}
            >
              <option selected style={{ display: "none" }}>
                Kota
              </option>
              <option value={"Bantul Regency"}>Bantul Regency</option>
              <option value={"Sleman"}>Sleman</option>
            </select>
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="district">Kecamatan</label>
            <select
              placeholder="Kota"
              id="district"
              name="userDistrictAddress"
              defaultValue={userDistrictAddress}
            >
              <option selected style={{ display: "none" }}>
                Kecamatan
              </option>
              <option value={"Baturetno, Banguntapan"}>
                Baturetno, Banguntapan
              </option>
              <option value={"Ngaglik"}>Ngaglik</option>
            </select>
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="village">Kelurahan</label>
            <select
              placeholder="Kelurahan"
              id="village"
              name="userVillageAddress"
              defaultValue={userVillageAddress}
            >
              <option style={{ display: "none" }}>Kelurahan</option>
              <option value={"Banguntapan, Pelem"}>Banguntapan, Pelem</option>
              <option value={"Sinduharjo"}>Sinduharjo</option>
            </select>
          </div>
          <div className={clsx(s._InputGroup)}>
            <label htmlFor="postcode">Kode pos</label>
            <input
              type="text"
              id="postcode"
              name="userPostCode"
              placeholder="Kode pos"
              defaultValue={userPostCode}
            />
          </div>
        </form>
      </div>
    );
  };

  const popupFoot = () => {
    return (
      <div className={clsx(s._PopupFoot)}>
        <button
          className={clsx("button-secondary")}
          onClick={() => setIsPopupOpen(false)}
        >
          Batal
        </button>
        <button
          className={clsx("button-1")}
          onClick={handleOnClickSubmitButton}
        >
          Simpan alamat
        </button>
      </div>
    );
  };

  const handleOnChangeShippingMethod = (shippingItemData: IShippingMethod) => {
    if (onChangeShippingMethod) {
      onChangeShippingMethod(shippingItemData);
    }
  };

  return (
    <div className={clsx(s._Wrapper)}>
      <div className={clsx(s._CardAddress)}>
        <Typography
          variant="h6"
          fontWeight={700}
          className={clsx("gray-4", s._Title)}
        >
          Alamat Pengiriman
        </Typography>
        <Typography variant="body-lg" className={clsx("gray4", s._Name)}>
          {userName} {userPhoneNumber && `(${userPhoneNumber})`}
        </Typography>
        <Typography variant="body-md" className={clsx("gray4", s._Address)}>
          {userAddress && `${userAddress},`}{" "}
          {userVillageAddress && `${userVillageAddress},`}{" "}
          {userDistrictAddress && `${userDistrictAddress},`}{" "}
          {userCityAddress && `${userCityAddress},`}{" "}
          {userStateAddress && `${userStateAddress},`} {userPostCode}
        </Typography>
        <button className={s._ButtonEdit} onClick={() => setIsPopupOpen(true)}>
          Ubah alamat
        </button>
      </div>

      <div className={clsx(s._CardShippingMethod)}>
        <Typography
          variant="h6"
          fontWeight={700}
          className={clsx("gray-4", s._Title)}
        >
          Pilih metode pengiriman
        </Typography>
        <div className={clsx(s._ShippingList)}>
          {jasaPengirimanData.map((item) => (
            <div
              className={clsx(s._ShippingItem)}
              key={item.shippingMethodSlug}
            >
              <input
                type="radio"
                name="shipping"
                value={item.shippingMethodSlug}
                id={item.shippingMethodSlug}
                onChange={() => handleOnChangeShippingMethod(item)}
                checked={
                  item.shippingMethodName ===
                  jasaPengirimanData[0].shippingMethodName
                }
              />
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
              <label
                htmlFor={item.shippingMethodSlug}
                className={clsx("body-md", "gray-4")}
              >
                Rp{" "}
                {item.shippingMethodPrice
                  .toLocaleString()
                  .split(".")[0]
                  .replaceAll(",", ".")}{" "}
                {item.shippingMethodName}
              </label>
            </div>
          ))}
        </div>
      </div>
      <PopupContainer
        bodyElement={popupBody()}
        headElement={popupHead()}
        footElement={popupFoot()}
        isOpen={isPopupOpen}
        className={s._PopupWrapper}
      />
    </div>
  );
};

export default CheckoutFillData;
