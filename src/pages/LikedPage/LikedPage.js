import React, { useEffect, useState } from 'react';
import { GlobalContext } from './../../Init';
import { ImageGallery } from 'components';
import { Store } from 'hooks/store';
import { storeActions } from 'store/store';
import { getLikedPhotosOfUser } from 'apis/userApis';

const LikedPage = () => {
   const [state, dispatch] = Store.useStore();

   const { user } = state;

   // console.log(state);
   useEffect(() => {
      console.log('initt');
      getLikedPhotosOfUser(user._id).then(({ data: userPhotos }) => {
         dispatch({
            type: storeActions.SET_USER_LIKED_PHOTOS,
            payload: userPhotos,
         });
      });
   }, []);

   return (
      <ImageGallery
         photos={user.likedPhotos.map((likedPhoto) => likedPhoto.photoId)}
         user={user}
      />
   );
};

export default LikedPage;
