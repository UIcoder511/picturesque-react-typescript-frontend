import React, { useContext } from 'react';
import { pageToSectionMap } from './../../pages/Pages';
import AsideLink from './AsideLink/AsideLink';
import { Box, Button } from '@mui/material';
import Logo from './../../ui/Logo/Logo';
import User from '../User/User';
import { GlobalContext } from './../../Init';
import { storeActions } from 'store/store';
import { Store } from 'hooks/store';

const Aside = ({ activeLink = '', setActiveLink }) => {
   const [_, dispatch] = Store.useStore();
   const handleLogout = () => {
      dispatch({ type: storeActions.LOGOUT });
   };

   return (
      <Box
         component="aside"
         sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.common.white,
            height: '100%',
            width: '200px',
            borderRadius: (theme) => theme.shape.borderRadius,
            alignItems: 'center',
         }}
      >
         <Logo />
         <User />
         <Box
            sx={{
               flex: 1,
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               //   justifyContent: "center",
            }}
         >
            {Object.values(pageToSectionMap).map(({ title, key, icon }) => (
               <AsideLink
                  key={key}
                  Icon={icon}
                  title={title}
                  isActive={activeLink === key}
                  onClick={() => setActiveLink(key)}
               />
            ))}
         </Box>
         <Button
            sx={{
               margin: '10px',
               borderRadius: '10px',
               border: ' 2px solid #fff',
               color: '#fff',

               '&:hover': {
                  border: ' 2px solid #fff',
                  opacity: 0.6,
               },
            }}
            variant="outlined"
            onClick={handleLogout}
         >
            Logout
         </Button>
      </Box>
   );
};

export default Aside;
