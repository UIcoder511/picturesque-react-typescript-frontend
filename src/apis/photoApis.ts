import axios from 'axios';
import endpoints from './endpoints';

// export {};
export const getAllPhotos = (): any => {
   return axios
      .get(endpoints.PHOTOS.GET_ALL_PHOTOS)
      .then((res) => res.data)
      .catch((e) => e.response.data);
};
export const getPhoto = (photoId: string): any => {
   return axios
      .get(endpoints.PHOTOS.GET_PHOTO + '/' + photoId)
      .then((res) => res.data);
};

export const likePhoto = (photoId: string, userId: string): any => {
   return axios
      .post(endpoints.PHOTOS.LIKE_PHOTO, { photoId, userId })
      .then((res) => res.data);
   // .catch((e) => e.response.data);
};

export const unlikePhoto = (likedPhotoId: string): any => {
   return axios
      .post(endpoints.PHOTOS.UNLIKE_PHOTO + '/' + likedPhotoId)
      .then((res) => res.data);
   // .catch((e) => e.response.data);
};
//   const getAllFavPhotosForUser = () => {
//     axios.get(endpoints.GET_FAV_PHOTOS_OF_USER + state.user?.username).then(({ data }) => {
//       // console.log(data);
//       dispatch({
//         type: storeActions.SET_FAV_PHOTOS,
//         payload: data?.map((d) => d.photoId) || [],
//       });
//     });
//   };
//   const getAllLikedPhotosForUser = () => {
//     axios.get(endpoints.GET_LIKED_PHOTOS_OF_USER + state.user?.username).then(({ data }) => {
//       // console.log(data);
//       dispatch({
//         type: storeActions.SET_USER_LIKED_PHOTOS,
//         payload: data?.map((d) => d.photoId) || [],
//       });
//     });
//   };

//   const getLikedPhotosMap = () => {
//     axios.get(endpoints.GET_LIKES_OF_ALL_PHOTOS).then(({ data }) => {
//       // console.log(data);
//       dispatch({
//         type: storeActions.SET_LIKES_OF_ALL_PHOTOS,
//         payload: data || {},
//       });
//     });
//   };

//   const getLikesOfPhoto = (photoId) => {
//     axios.get(endpoints.GET_LIKES_OF_PHOTO + photoId).then(({ data }) => {
//       // console.log(data);
//       dispatch({
//         type: storeActions.SET_LIKE_PHOTO,
//         payload: { photoId, noOfLikes: data || 0 },
//       });
//     });
//   };
