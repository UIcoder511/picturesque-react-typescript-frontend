import React, { useEffect } from 'react';
import App from './App';

import reducer, { initState, storeActions } from 'store/store';
import { Store } from 'hooks/store';
import { ThemeProvider, createTheme } from '@mui/material';

Store.initializeStore(initState, reducer);

const Init = () => {
   return (
      <ThemeProvider
         theme={createTheme({ palette: { primary: { main: '#151f32' } } })}
      >
         <App />
      </ThemeProvider>
   );
};

export default Init;
