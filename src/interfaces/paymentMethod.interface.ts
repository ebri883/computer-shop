export interface IPaymentMethodGroupItem {
  name: string;
  image: string;
  slug: string;
}

export interface IPaymentMethod {
  groupName: string;
  groupItem: IPaymentMethodGroupItem[];
}
