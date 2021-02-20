import {
  SHOW_ALL_IMAGES,
  SHOW_IMAGE_DETAIL,
  SEARCH_IMAGE,
  IMAGE_ERROR,
} from './types';
import axios from 'axios';

export const showAllImages = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/game/all');

    dispatch({
      type: SHOW_ALL_IMAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
