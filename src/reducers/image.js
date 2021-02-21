import {
  SHOW_ALL_IMAGES,
  SHOW_IMAGE_DETAIL,
  SEARCH_IMAGE,
  IMAGE_ERROR,
} from '../actions/types';

const initialState = {
  images: [],
  image: {},
  loading: true,
  error: {},
};

export default function image(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALL_IMAGES:
      return {
        ...state,
        images: payload,
        loading: false,
      };
    case SHOW_IMAGE_DETAIL:
      return state;
    case SEARCH_IMAGE:
      return state;
    case IMAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
