import { IUser } from "@/interfaces/user.interface";
import { produkData } from "./produk.data";

export const currentDummyUser: IUser = {
  userName: "Herosimo Nurjati",
  userPhoneNumber: "081232425",
  userAddress: "RT01 / RW02, Banguntapan",
  userVillageAddress: "Pelem",
  userDistrictAddress: "Baturetno, Banguntapan",
  userCityAddress: "Bantul Regency",
  userStateAddress: "Special Region of Yogyakarta",
  userPostCode: "55197",
  userCartData: {
    userCartProduct: [
      { ...produkData[0], produkQuantity: 2 },
      { ...produkData[1], produkQuantity: 1 },
    ],
    userCartTotal:
      produkData[0].productPrice * 2 + produkData[1].productPrice * 1,
  },
};
