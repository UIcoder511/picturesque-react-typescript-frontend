import axios from 'axios';
import { getItemFromLocalStorage, setTokenToLocalStorage } from 'utils/Util';

export const storeActions = {
   SET_USER: 'SET_USER',
   LOGIN: 'LOGIN',
   SET_PHOTOS: 'SET_PHOTOS',
   SET_PHOTO: 'SET_PHOTO',
   SET_PHOTOGRAPHERS: 'SET_PHOTOGRAPHERS',
   SET_USER_LIKED_PHOTOS: 'SET_USER_LIKED_PHOTOS',
   SET_FAV_PHOTOS: 'SET_FAV_PHOTOS',
   SET_LIKES_OF_ALL_PHOTOS: 'SET_LIKES_OF_ALL_PHOTOS',
   SET_LIKE_PHOTO: 'SET_LIKE_PHOTO',
   LOGOUT: 'LOGOUT',
};

const initToken = () => {
   const token = getItemFromLocalStorage('token');
   console.log(token);
   if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
   }
   return token;
};

export const initState = {
   user: null,
   token: initToken(),
   photos: {},
   photographers: [],
   photoLikesMap: {},
};

export default function reducer(state, action) {
   switch (action.type) {
      case storeActions.LOGIN: {
         const { user, token } = action.payload;
         axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
         setTokenToLocalStorage(token);
         return { ...state, user, token };
      }
      case storeActions.SET_USER: {
         const user = action.payload;

         return { ...state, user };
      }
      case storeActions.SET_PHOTOS: {
         const photos = action.payload || [];
         const photosMap = photos.reduce((acc, photo) => {
            acc[photo._id] = photo;
            return acc;
         }, {});
         console.log(photosMap);
         return { ...state, photos: photosMap };
      }
      case storeActions.SET_PHOTO: {
         const photo = action.payload;
         const photosMap = { ...state.photos };
         photosMap[photo._id] = photo;
         return { ...state, photos: photosMap };
      }
      case storeActions.SET_PHOTOGRAPHERS: {
         const photographers = action.payload;
         return { ...state, photographers };
      }
      case storeActions.SET_FAV_PHOTOS: {
         return {
            ...state,
            user: {
               ...state.user,
               favourite: action.payload,
            },
         };
      }
      case storeActions.SET_USER_LIKED_PHOTOS: {
         console.log(action.payload);
         return {
            ...state,
            user: {
               ...state.user,
               likedPhotos: action.payload,
            },
         };
      }
      case storeActions.LOGOUT: {
         setUserObjectFromLocalStorage(null, null);
         axios.defaults.headers.common['Authorization'] = null;
         return { ...state, user: null };
      }
      case storeActions.SET_LIKES_OF_ALL_PHOTOS: {
         return { ...state, photoLikesMap: action.payload || {} };
      }
      case storeActions.SET_LIKE_PHOTO: {
         const { noOfLikes, photoId } = action.payload;
         const cpy = Object.assign({}, state.photoLikesMap);
         cpy[photoId] = noOfLikes;
         return { ...state, photoLikesMap: cpy };
      }

      default: {
         throw new Error(`Unhandled action type: ${action.type}`);
      }
   }
}
