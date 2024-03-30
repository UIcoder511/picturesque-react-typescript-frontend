import React, { useEffect } from 'react';

import ImageGallery from '../../components/ImageCards/ImageGallery';
import { Store } from 'hooks/store';
import { getAllPhotos } from 'apis/photoApis';
import { storeActions } from 'store/store';

const ExplorePage = () => {
   const [state, dispatch] = Store.useStore();

   const { user, photos } = state;

   // console.log(state);
   useEffect(() => {
      console.log('initt');
      getAllPhotos().then(({ data }) => {
         dispatch({
            type: storeActions.SET_PHOTOS,
            payload: data,
         });
      });
   }, []);

   return <ImageGallery photos={Object.values(photos)} user={user} />;
};

export default ExplorePage;
