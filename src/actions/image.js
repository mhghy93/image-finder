import {
  SHOW_ALL_IMAGES,
  SHOW_IMAGE_DETAIL,
  SEARCH_IMAGE,
  IMAGE_ERROR,
} from './types';
import axios from 'axios';

const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = 'https://api.unsplash.com';
const CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

export const showAllImages = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/photos?page=1&client_id=${CLIENT_ID}`
    );

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
