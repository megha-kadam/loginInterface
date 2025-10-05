export interface IlogIn{
    email : string
    password : string
}

export interface Isignup{
    email : string
    password : string
}

export interface Idata {
  id: string;
  sessionToken: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string | null;
  image: string;
  phoneCode: string;
  phone: string;
  nationality: string;
  isPhoneVerified: number;
  isEmailVerified: number;
  deviceToken:  null;
  deviceType:  null;
  deviceModel:  null;
  appVersion: string | null;
  osVersion: string | null;
  createDate: string;
  gender: string | null;
  password: string;
  isSocialRegister: number;
  socialRegisterType: string | null;
  homeTown: string;
  flag: string;
  walletAmount: string;
  
}

export interface IlogRes{
   data : Idata
   status : number;
   message : string;

}