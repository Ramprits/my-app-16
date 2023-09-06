export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  addresses: IAddress[];
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
}
