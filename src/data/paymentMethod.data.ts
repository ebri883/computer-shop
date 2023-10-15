import { paymentMethodImagesRoot } from "@/constants/other";
import { IPaymentMethod } from "@/interfaces/paymentMethod.interface";

export const paymentMethodData: IPaymentMethod[] = [
  {
    groupName: "Kartu Kredit atau debit",
    groupItem: [
      {
        name: "VISA",
        image: `${paymentMethodImagesRoot}/VISA.png`,
        slug: "visa",
      },
    ],
  },
  {
    groupName: "Transfer bank (konfirmasi manual)",
    groupItem: [
      {
        name: "Transfer BCA",
        image: `${paymentMethodImagesRoot}/BCA.png`,
        slug: "bca-transfer",
      },
    ],
  },
  {
    groupName: "Virtual Account",
    groupItem: [
      {
        name: "BCA Virtual Account",
        image: `${paymentMethodImagesRoot}/BCA.png`,
        slug: "bca-virtual-account",
      },
    ],
  },
];
