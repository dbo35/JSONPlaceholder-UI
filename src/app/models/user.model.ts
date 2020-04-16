export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export class UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserAddressGeo;
}

export class UserAddressGeo {
  lat: string;
  lng: string;
}
