import { IJasaPengiriman } from "@/interfaces/jasaPengiriman";
import { IShippingMethod } from "@/interfaces/shippingMethod.interface";

export const jasaPengirimanData: IShippingMethod[] = [
  {
    shippingMethodName: "JNE (REG)",
    shippingMethodPrice: 18000,
    shippingMethodSlug: "jne",
  },
  {
    shippingMethodName: "Sicepat (REG)",
    shippingMethodPrice: 17000,
    shippingMethodSlug: "sicepat",
  },
];
