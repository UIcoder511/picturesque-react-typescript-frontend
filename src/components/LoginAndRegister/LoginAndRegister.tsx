import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import LoginRegisterForm from './LoginRegisterForm';

import { storeActions } from 'store/store';
// import { GlobalContext } from '../../Init';
import logoURL from '../../assets/logo_outlined.png';
import endpoints from '../../apis/endpoints';
import Register from './Register';
import { Store } from 'hooks/store';
import Login from './Login';

const LoginAndRegister = () => {
   // const { dispatch } = React.useContext(GlobalContext);

   const [isLogin, setIsLogin] = useState<boolean>(true);

   return (
      <Box
         sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <Box
            sx={{
               height: 'auto',
               width: '200px',
               marginTop: '-80px',
               marginBottom: '10px',
            }}
            component={'img'}
            src={logoURL}
         />

         <Box
            sx={{
               width: 'max-content',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               border: (theme) => '3px solid' + theme.palette.primary.main,
               borderRadius: (theme) => theme.shape.borderRadius,
               padding: '20px',
               '& *': {
                  fontFamily: 'PlusJakartaDisplay-Regular',
               },
            }}
         >
            {isLogin ? <Login /> : <Register />}
         </Box>
      </Box>
   );
};

export default LoginAndRegister;
