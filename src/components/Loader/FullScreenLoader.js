import { CircularProgress } from '@mui/material';
import React from 'react';

const FullScreenLoader = () => {
   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
         }}
      >
         <CircularProgress size={50} />
      </div>
   );
};

export default FullScreenLoader;
