import { userApis } from 'apis';
import { LoginDataType, MessageType } from 'apis/userApis';
import React from 'react';
import { storeActions } from 'store/store';
import LoginForm from './LoginForm';
import { Store } from 'hooks/store';

type Props = {};

const Login = (props: Props) => {
   const [state, dispatch] = Store.useStore();

   const handleLogin = async (userData: LoginDataType) => {
      try {
         const { message, status, data } = await userApis.loginUser(
            userData.email,
            userData.password,
         );
         if (data) {
            console.log(data);
            //save token and user object
            dispatch({
               type: storeActions.SET_USER,
               payload: { user: data.user, token: data.token },
            });
         }
         return {
            message: message || '',
            type: status,
         };
      } catch (error) {
         console.log(error);
         return { type: MessageType.Error, message: 'Something Wrong!' };
      }
   };

   return <LoginForm handleLogin={handleLogin} />;
};

export default Login;
