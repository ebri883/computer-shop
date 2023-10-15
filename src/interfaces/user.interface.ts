import { IProduk } from "./produk.interface";

export interface IUserCartProduk extends IProduk {
  produkQuantity: number;
}

export interface IUserCartData {
  userCartProduct: IUserCartProduk[];
  userCartTotal: number;
}

export interface IUser {
  userName: string;
  userPhoneNumber: string;
  userAddress: string;
  userStateAddress: string;
  userCityAddress: string;
  userDistrictAddress: string;
  userVillageAddress: string;
  userPostCode: string;
  userCartData: IUserCartData;
}
