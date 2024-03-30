import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard/ImageCard';
import photo from '../../assets/photo.jpeg';
import { Box } from '@mui/material';
import axios from 'axios';
import { GlobalContext } from '../../Init';
import endpoints from '../../apis/endpoints';
import { downloadImage, getPhotoPath } from 'utils/Util';
import { getPhoto, likePhoto, unlikePhoto } from 'apis/photoApis';
import { getLikedPhotosOfUser } from 'apis/userApis';
import { Store } from 'hooks/store';
import { storeActions } from 'store/store';

const ImageGallery = ({ photos = [], user }) => {
   const [state, dispatch] = Store.useStore();
   console.log(state);
   const handleLikeButton = async (photoId, isAlreadyLiked) => {
      try {
         if (isAlreadyLiked) {
            const likedPhotoId = user.likedPhotos.find(
               (photo) => photo.photoId._id === photoId,
            )._id;

            await unlikePhoto(likedPhotoId);
         } else {
            await likePhoto(photoId, user._id);
         }

         const { data: userPhotos } = await getLikedPhotosOfUser(user._id);
         const { data: photo } = await getPhoto(photoId);

         dispatch({
            type: storeActions.SET_USER_LIKED_PHOTOS,
            payload: userPhotos,
         });

         dispatch({
            type: storeActions.SET_PHOTO,
            payload: photo,
         });
      } catch (error) {
         console.log(error);
      }

      // const url = isAlreadyLiked
      //    ? endpoints.REMOVE_LIKED_PHOTOS_FROM_USER
      //    : endpoints.ADD_LIKED_PHOTOS_FROM_USER;
      // return axios
      //    .post(url + 'username=' + user.username + '&photoId=' + photoId)
      //    .then((data) => {
      //       getAllLikedPhotosForUser();
      //       getLikesOfPhoto(photoId);
      //    });
   };
   const handleBookmarkButton = (photoId, isAlreadyBookmarked) => {
      // const url = isAlreadyBookmarked
      //    ? endpoints.REMOVE_FAV_PHOTOS_FROM_USER
      //    : endpoints.ADD_FAV_PHOTOS_FROM_USER;
      // return axios
      //    .post(url + 'username=' + user.username + '&photoId=' + photoId)
      //    .then((data) => {
      //       getAllFavPhotosForUser();
      //    });
   };

   const hanldeDownloadImage = (photoId, orignalSrc) => {
      console.log(photoId);
      downloadImage(orignalSrc, photoId);
   };

   return (
      <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '30px',
            overflow: 'auto',
         }}
      >
         {photos.map(
            ({
               id: photoId,
               avgColor,
               size,
               // photoId,
               photographerName,
               photographerId,
               // imageOrignalSize,
               title,
               _id,
               noOfLikes,
            }) => (
               <ImageCard
                  key={_id}
                  isLiked={user.likedPhotos?.some(
                     (photo) => photo.photoId._id === _id,
                  )}
                  isBookmarked={user.favourite?.includes(photoId)}
                  thumbnailSrc={size.md}
                  orignalSrc={size.or}
                  noOfLikes={noOfLikes || 0}
                  photographerName={photographerName}
                  imageBgColor={avgColor}
                  title={title}
                  photoId={photoId}
                  _id={_id}
                  handleLikeButton={handleLikeButton}
                  handleBookmarkButton={handleBookmarkButton}
                  hanldeDownloadImage={hanldeDownloadImage}
               />
            ),
         )}
      </Box>
   );
};

export default ImageGallery;
