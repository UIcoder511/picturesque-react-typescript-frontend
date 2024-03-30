import axios from 'axios';
import endpoints from './endpoints';

// export {};
export const getAllPhotographers = (): any => {
   return axios
      .get(endpoints.PHOTOGRAPHERS.GET_PHOTOGRAPHERS_WITH_PHOTOS)
      .then((res) => res.data)
      .catch((e) => e.response.data);
};
