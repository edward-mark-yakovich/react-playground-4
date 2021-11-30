export enum pagesTypes {
  GET_PAGES_REQUEST = "GET_PAGES_REQUEST",
  GET_PAGE_SLUG_REQUEST = "GET_PAGE_SLUG_REQUEST",
  GET_PAGES_SUCCESS = "GET_PAGES_SUCCESS",
  GET_PAGES_FAILURE = "GET_PAGES_FAILURE"
}

export interface IPage {
  author: string;
  comment_status: string;
  content: object;
  date: string;
  date_gmt: string;
  excerpt: any;
  featured_media: number;
  guid: object;
  id: number;
  link: string;
  menu_order: number;
  meta: any;
  modified: string;
  modified_gmt: string;
  parent: number;
  ping_status: string;
  slug: string;
  status: string;
  template: string;
  title: any;
  type: string;
  _embedded: any;
  _links: object;
}

export interface PagesState {
  pendingPages: boolean;
  pages: IPage[];
  errorPages: string | null;
}

export interface GetPagesSuccessPayload {
  pages: IPage[];
}

export interface GetPagesFailurePayload {
  errorPages: string;
}

export interface GetPageSlugRequest {
  type: typeof pagesTypes.GET_PAGE_SLUG_REQUEST;
  slug: string;
}

export interface GetPagesRequest {
  type: typeof pagesTypes.GET_PAGES_REQUEST;
  perPage: number;
  page: number;
}

export type GetPagesSuccess = {
  type: typeof pagesTypes.GET_PAGES_SUCCESS;
  payload: GetPagesSuccessPayload;
};

export type GetPagesFailure = {
  type: typeof pagesTypes.GET_PAGES_FAILURE;
  payload: GetPagesFailurePayload;
};

export type PagesActions =
  | GetPageSlugRequest
  | GetPagesRequest
  | GetPagesSuccess
  | GetPagesFailure;
