import { SHOW_ALL_IMAGES, SEARCH_IMAGE, IMAGE_ERROR } from '../actions/types';

const initialState = {
  images: [],
  searchedImages: [],
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
    case SEARCH_IMAGE:
      return {
        ...state,
        searchedImages: payload,
        loading: false,
      };
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
