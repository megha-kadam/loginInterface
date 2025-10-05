export interface IlogIn{
    email : string
    password : string
}

export interface Isignup{
    email : string
    password : string
}
// export interface Idata{
//  appVersion : null
//     createDate : string
//     deviceModel : null
//     deviceToken : null
//     deviceType : null
//     dob : null
//     email : string
//     firstName : string
//     flag : string
//     gender : null
//     homeTown : string
//     id : string
//     image : string
//     isEmailVerified : number
//     isPhoneVerified : number
//     isSocialRegister : number 
//     lastName : string
//     nationality : string
//     osVersion : null
//     password : string
//     phone : string 
//     phoneCode : string
//     sessionToken : string
//     socialRegisterType : null 
//     walletAmount : string
// }
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