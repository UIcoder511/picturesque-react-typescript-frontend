const apiVersion = '/api/v1';

const GET_PHOTOGRAPHERS_WITH_PHOTOS = apiVersion + '/photographers';
const GET_ALL_PHOTOS = apiVersion + '/photos';
const GET_PHOTO = apiVersion + '/photos';

const LIKE_PHOTO = apiVersion + '/likePhotos/like';
const UNLIKE_PHOTO = apiVersion + '/likePhotos/unlike';
// const GET_LIKED_PHOTOS_OF_USER = apiVersion + '/likePhotos/unlike';
const GET_FAV_PHOTOS_OF_USER = apiVersion + '/get-fav-photos?username=';
const GET_LIKED_PHOTOS_OF_USER = apiVersion + '/likePhotos';
const GET_LIKES_OF_ALL_PHOTOS = apiVersion + '/get-likes-of-all-photos';
const GET_LIKES_OF_PHOTO = apiVersion + '/get-likes-of-photo?photoId=';
const REMOVE_LIKED_PHOTOS_FROM_USER = apiVersion + '/remove-liked-photos?';
const ADD_LIKED_PHOTOS_FROM_USER = apiVersion + '/add-liked-photos?';
const REMOVE_FAV_PHOTOS_FROM_USER = apiVersion + '/remove-fav-photos?';
const ADD_FAV_PHOTOS_FROM_USER = apiVersion + '/add-fav-photos?';
const GET_USER_DATA = apiVersion + '/users/get-user';
const LOGIN_USER = apiVersion + '/users/login';
const REGISTER_USER = apiVersion + '/users/signup';

const endpoints = {
   USERS: {
      GET_USER_DATA,
      LOGIN_USER,
      REGISTER_USER,
      GET_LIKED_PHOTOS_OF_USER,
   },
   PHOTOS: {
      GET_ALL_PHOTOS,
      GET_PHOTO,
      GET_FAV_PHOTOS_OF_USER,
      GET_LIKED_PHOTOS_OF_USER,
      GET_LIKES_OF_ALL_PHOTOS,
      GET_LIKES_OF_PHOTO,
      REMOVE_LIKED_PHOTOS_FROM_USER,
      ADD_LIKED_PHOTOS_FROM_USER,
      REMOVE_FAV_PHOTOS_FROM_USER,
      ADD_FAV_PHOTOS_FROM_USER,
      LIKE_PHOTO,
      UNLIKE_PHOTO,
   },
   PHOTOGRAPHERS: {
      GET_PHOTOGRAPHERS_WITH_PHOTOS,
   },
};

export default endpoints;
