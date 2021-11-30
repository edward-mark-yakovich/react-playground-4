import {
  pagesTypes,
  PagesActions,
  PagesState
} from "@redux/types/pagesTypes";

const initialState: PagesState = {
  pendingPages: false,
  pages: [],
  errorPages: null
};

const pagesReducer = (state = initialState, action: PagesActions) => {
  switch (action.type) {
    case pagesTypes.GET_PAGE_SLUG_REQUEST:
      return {
        ...state,
        pendingPages: true,
        pages: []
      };
    case pagesTypes.GET_PAGES_REQUEST:
      return {
        ...state,
        pendingPages: true
      };
    case pagesTypes.GET_PAGES_SUCCESS:
      return {
        ...state,
        pendingPages: false,
        pages: action.payload.pages,
        errorPages: null
      };
    case pagesTypes.GET_PAGES_FAILURE:
      return {
        ...state,
        pendingPages: false,
        pages: [],
        errorPages: action.payload.errorPages
      };
    default:
      return {
        ...state
      };
  }
};

export default pagesReducer;