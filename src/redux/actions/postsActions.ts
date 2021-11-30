import {
  postsTypes,
  SetPostsPage,
  GetPostsRequest,
  GetPostsSuccess,
  GetPostsSuccessPayload,
  GetPostsFailure,
  GetPostsFailurePayload,
  GetPostSlugRequest,
  GetPostSlugSuccess,
  GetSinglePostSuccessPayload,
  GetPostSlugFailure,
  GetSinglePostFailurePayload
} from "@redux/types/postsTypes";

export const setPostsPage = (
  page: number
): SetPostsPage => {
  return ({
    type: postsTypes.SET_POSTS_PAGE,
    page
  })
};

export const getPostsRequest = (
  perPage: number,
  page: number
): GetPostsRequest => {
  return ({
    type: postsTypes.GET_POSTS_REQUEST,
    perPage,
    page
  })
};

export const getPostsSuccess = (
  payload: GetPostsSuccessPayload
): GetPostsSuccess => { 
  return ({
    type: postsTypes.GET_POSTS_SUCCESS,
    payload
  });
};

export const getPostsFailure = (
  payload: GetPostsFailurePayload
): GetPostsFailure => {
  return ({
    type: postsTypes.GET_POSTS_FAILURE,
    payload
  });
};

export const getPostSlugRequest = (
  slug: string
): GetPostSlugRequest => {
  return ({
    type: postsTypes.GET_POST_SLUG_REQUEST,
    slug
  })
};

export const getPostSlugSuccess = (
  payload: GetSinglePostSuccessPayload
): GetPostSlugSuccess => { 
  return ({
    type: postsTypes.GET_POST_SLUG_SUCCESS,
    payload
  });
};

export const getPostSlugFailure = (
  payload: GetSinglePostFailurePayload
): GetPostSlugFailure => {
  return ({
    type: postsTypes.GET_POST_SLUG_FAILURE,
    payload
  });
};
