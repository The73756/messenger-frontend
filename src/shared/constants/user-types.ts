export interface IUser {
  aboutMe: string;
  birthday: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  nickname: string;
  phone: string;
  photo: string[];
  sex: string;
  status: string;
}

export interface ICreateUser {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
