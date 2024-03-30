import React, { useEffect } from 'react';
import PhotographerCards from './../../components/PhotographerCards/PhotographerCards';

import { GlobalContext } from './../../Init';
import { photographerApis } from 'apis';
import { storeActions } from 'store/store';
import { Store } from 'hooks/store';

const PhotographerPage = () => {
   const [state, dispatch] = Store.useStore();

   const { photographers } = state;

   useEffect(() => {
      console.log('initt');
      photographerApis.getAllPhotographers().then(({ data }) => {
         dispatch({
            type: storeActions.SET_PHOTOGRAPHERS,
            payload: data,
         });
      });
   }, []);

   return (
      <>
         <PhotographerCards photographers={photographers} />
      </>
   );
};

export default PhotographerPage;
