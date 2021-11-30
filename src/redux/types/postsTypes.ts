export enum postsTypes {
  SET_POSTS_PAGE = "SET_POSTS_PAGE",
  GET_POSTS_REQUEST = "GET_POSTS_REQUEST",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAILURE = "GET_POSTS_FAILURE",
  GET_POST_SLUG_REQUEST = "GET_POST_SLUG_REQUEST",
  GET_POST_SLUG_SUCCESS = "GET_POST_SLUG_SUCCESS",
  GET_POST_SLUG_FAILURE = "GET_POST_SLUG_FAILURE",
}

export interface IPost {
  author: string;
  categories: any;
  comment_status: string;
  content: any;
  date: string;
  date_gmt: string;
  excerpt: any;
  featured_media: number;
  format: string;
  guid: object;
  id: number;
  link: string;
  meta: any;
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: any;
  template: string;
  title: any;
  type: string;
  _embedded: any;
  _links: object;
}

export interface PostsState {
  pendingPosts: boolean;
  posts: IPost[];
  errorPosts: string | null;
  currentPostPage: number;
  pendingSinglePost: boolean;
  singlePost: IPost[];
  errorSinglePost: string | null;
}

export interface GetPostsSuccessPayload {
  posts: IPost[];
}

export interface GetPostsFailurePayload {
  errorPosts: string;
}

export interface GetSinglePostSuccessPayload {
  singlePost: IPost[];
}

export interface GetSinglePostFailurePayload {
  errorSinglePost: string;
}

export interface SetPostsPage {
  type: typeof postsTypes.SET_POSTS_PAGE;
  page: number;
}

export interface GetPostsRequest {
  type: typeof postsTypes.GET_POSTS_REQUEST;
  perPage: number;
  page: number;
}

export type GetPostsSuccess = {
  type: typeof postsTypes.GET_POSTS_SUCCESS;
  payload: GetPostsSuccessPayload;
};

export type GetPostsFailure = {
  type: typeof postsTypes.GET_POSTS_FAILURE;
  payload: GetPostsFailurePayload;
};

export interface GetPostSlugRequest {
  type: typeof postsTypes.GET_POST_SLUG_REQUEST;
  slug: string;
}

export type GetPostSlugSuccess = {
  type: typeof postsTypes.GET_POST_SLUG_SUCCESS;
  payload: GetSinglePostSuccessPayload;
};

export type GetPostSlugFailure = {
  type: typeof postsTypes.GET_POST_SLUG_FAILURE;
  payload: GetSinglePostFailurePayload;
};

export type PostsActions =
  | SetPostsPage
  | GetPostsRequest
  | GetPostsSuccess
  | GetPostsFailure
  | GetPostSlugRequest
  | GetPostSlugSuccess
  | GetPostSlugFailure;
