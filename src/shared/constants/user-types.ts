export interface UserUpdate {
  // id: string;
  // email: string;
  // nickname: string;
  // firstName: string;
  // lastName: string;
  // birthday: string;
  // sex: string;
  // photo: string[];
  // phone: number;
  // status: string;
  // aboutMe: string;
  // roles: string[];
  id: string;
  email: string;
  createdAt: string;
  nickname?: string;
  firstName?: string;
  lastName?: string;
  birthday?: string;
  sex?: string;
  photo: string[];
  phone?: number;
  status?: string;
  aboutMe?: string;
  roles: string[];
}
