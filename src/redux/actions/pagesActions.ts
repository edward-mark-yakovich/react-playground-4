import {
  pagesTypes,
  GetPageSlugRequest,
  GetPagesRequest,
  GetPagesSuccess,
  GetPagesSuccessPayload,
  GetPagesFailure,
  GetPagesFailurePayload
} from "@redux/types/pagesTypes";

export const getPageSlugRequest = (
  slug: string
): GetPageSlugRequest => {
  return ({
    type: pagesTypes.GET_PAGE_SLUG_REQUEST,
    slug
  })
};

export const getPagesRequest = (
  perPage: number,
  page: number
): GetPagesRequest => {
  return ({
    type: pagesTypes.GET_PAGES_REQUEST,
    perPage,
    page
  })
};

export const getPagesSuccess = (
  payload: GetPagesSuccessPayload
): GetPagesSuccess => { 
  return ({
    type: pagesTypes.GET_PAGES_SUCCESS,
    payload
  });
};

export const getPagesFailure = (
  payload: GetPagesFailurePayload
): GetPagesFailure => {
  return ({
    type: pagesTypes.GET_PAGES_FAILURE,
    payload
  });
};
