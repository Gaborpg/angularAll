export interface IUserDetailsDTO {
  name: string;
  placeOfBirth: string;
  postcode: string;
  city: string;
  mobileNumber: string;
  email: string;
  password: string;
}

export class UserDetails implements IUserDetailsDTO {
  name: string;
  placeOfBirth: string;
  postcode: string;
  city: string;
  mobileNumber: string;
  email: string;
  password: string;
  constructor(user: IUserDetailsDTO) {
    this.name = user.name;
    this.placeOfBirth = user.placeOfBirth;
    this.postcode = user.postcode;
    this.city = user.city;
    this.mobileNumber = user.mobileNumber;
    this.email = user.email;
    this.password = user.password;
  }
}

export interface ILoginDetails {
  user: string;
  password: string;
}
