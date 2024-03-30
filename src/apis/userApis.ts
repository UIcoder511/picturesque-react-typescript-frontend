import axios from 'axios';
import endpoints from './endpoints';

export interface RegistrationDataType {
   name: string;
   password: string;
   passwordConfirm: string;
   email: string;
}

export interface LoginDataType {
   email: string;
   password: string;
}

export enum MessageType {
   Success = 'success',
   Error = 'error',
}
export interface ResType {
   status: MessageType;
   data: any;
   message?: string;
}

export const loginUser = (
   email: string,
   password: string,
): Promise<ResType> => {
   return axios
      .post(endpoints.USERS.LOGIN_USER, { email, password })
      .then((res) => res.data)
      .catch((e) => e.response.data);
};

export const registerUser = (data: RegistrationDataType): Promise<ResType> => {
   return axios
      .post(endpoints.USERS.REGISTER_USER, data)
      .then((res) => res.data)
      .catch((e) => e.response.data);
};
export const getUser = (): Promise<ResType> => {
   return axios.get(endpoints.USERS.GET_USER_DATA).then((res) => res.data);
   // .catch((e) => e.response.data);
};

export const getLikedPhotosOfUser = (userId: string): Promise<any> => {
   return axios
      .get(endpoints.USERS.GET_LIKED_PHOTOS_OF_USER + '/' + userId)
      .then((res) => res.data);
};
