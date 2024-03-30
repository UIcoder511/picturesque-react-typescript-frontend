import { userApis } from 'apis';
import React from 'react';
import RegisterForm from './RegisterForm';
import { MessageType, RegistrationDataType } from 'apis/userApis';
import { Store } from 'hooks/store';
import { storeActions } from 'store/store';

type Props = {};

const Register: React.FC<Props> = (props) => {
   const [state, dispatch] = Store.useStore();

   const handleRegister = async (userData: RegistrationDataType) => {
      try {
         const { message, status, data } =
            await userApis.registerUser(userData);
         if (data) {
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

   return <RegisterForm handleRegister={handleRegister} />;
};

export default Register;
