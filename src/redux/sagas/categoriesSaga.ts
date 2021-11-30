import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getCategoriesFailure,
  getCategoriesSuccess
} from "@redux/actions/categoriesActions";
import {
  ICategories,
  categoriesTypes
} from "@redux/types/categoriesTypes";

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

const getCategories = () => {
  return axios.get<ICategories[]>(`http://chinonthetank.com/wp-json/wp/v2/categories`);
};

function* getCategoriesSaga(actions: any) {
  try {
    const response: ResponseGenerator = yield call(() => getCategories());
    const data = response?.data || [];
    
    yield put(
      getCategoriesSuccess({
        categories: data
      })
    );
  } catch (ev: any) {
    const errorMessage = ev?.message || '';

    yield put(
      getCategoriesFailure({
        errorCategories: errorMessage
      })
    );
  }
}

function* categoriesSaga() {
  yield all([
    takeLatest(categoriesTypes.GET_CATEGORIES_REQUEST, getCategoriesSaga)
  ]);
}

export default categoriesSaga;
