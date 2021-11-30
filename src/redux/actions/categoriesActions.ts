import {
  categoriesTypes,
  GetCategoriesRequest,
  GetCategoriesSuccess,
  GetCategoriesSuccessPayload,
  GetCategoriesFailure,
  GetCategoriesFailurePayload
} from "@redux/types/categoriesTypes";

export const getCategoriesRequest = (
): GetCategoriesRequest => {
  return ({
    type: categoriesTypes.GET_CATEGORIES_REQUEST
  })
};

export const getCategoriesSuccess = (
  payload: GetCategoriesSuccessPayload
): GetCategoriesSuccess => { 
  return ({
    type: categoriesTypes.GET_CATEGORIES_SUCCESS,
    payload
  });
};

export const getCategoriesFailure = (
  payload: GetCategoriesFailurePayload
): GetCategoriesFailure => {
  return ({
    type: categoriesTypes.GET_CATEGORIES_FAILURE,
    payload
  });
};
