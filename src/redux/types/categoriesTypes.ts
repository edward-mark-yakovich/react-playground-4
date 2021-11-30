export enum categoriesTypes {
  GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST",
  GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS",
  GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"
}

export interface ICategories {
  count: number;
  description: string;
  id: number;
  link: string;
  meta: any;
  name: string;
  parent: number;
  slug: string;
  taxonomy: string;
}

export interface CategoriesState {
  pendingCategories: boolean;
  categories: ICategories[];
  errorCategories: string | null;
}

export interface GetCategoriesSuccessPayload {
  categories: ICategories[];
}

export interface GetCategoriesFailurePayload {
  errorCategories: string;
}

export interface GetCategoriesRequest {
  type: typeof categoriesTypes.GET_CATEGORIES_REQUEST;
}

export type GetCategoriesSuccess = {
  type: typeof categoriesTypes.GET_CATEGORIES_SUCCESS;
  payload: GetCategoriesSuccessPayload;
};

export type GetCategoriesFailure = {
  type: typeof categoriesTypes.GET_CATEGORIES_FAILURE;
  payload: GetCategoriesFailurePayload;
};

export type CategoriesActions =
  | GetCategoriesRequest
  | GetCategoriesSuccess
  | GetCategoriesFailure;
