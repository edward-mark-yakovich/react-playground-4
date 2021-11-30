import {
  categoriesTypes,
  CategoriesActions,
  CategoriesState
} from "@redux/types/categoriesTypes";

const initialState: CategoriesState = {
  pendingCategories: false,
  categories: [],
  errorCategories: null
};

const categoriesReducer = (state = initialState, action: CategoriesActions) => {
  switch (action.type) {
    case categoriesTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        pendingCategories: true
      };
    case categoriesTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        pendingCategories: false,
        categories: action.payload.categories,
        errorCategories: null
      };
    case categoriesTypes.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        pendingCategories: false,
        categories: [],
        errorCategories: action.payload.errorCategories
      };
    default:
      return {
        ...state
      };
  }
};

export default categoriesReducer;
