import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getPagesFailure,
  getPagesSuccess
} from "@redux/actions/pagesActions";
import {
  IPage,
  pagesTypes
} from "@redux/types/pagesTypes";

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

const getPages = (perPage = 20, page = 1) => {
  return axios.get<IPage[]>(`http://chinonthetank.com/wp-json/wp/v2/pages?_embed&per_page=${perPage}&page=${page}`);
};

const getPageSlug = (slug: string) => {
  return axios.get<IPage[]>(`http://chinonthetank.com/wp-json/wp/v2/pages?_embed&slug=${slug}`);
};

function* getPagesSaga(actions: any) {
  try {
    const response: ResponseGenerator = yield call(() => getPages(actions.perPage, actions.page));
    const data = response?.data || [];
    
    yield put(
      getPagesSuccess({
        pages: data
      })
    );
  } catch (ev: any) {
    const errorMessage = ev?.message || '';

    yield put(
      getPagesFailure({
        errorPages: errorMessage
      })
    );
  }
}

function* getPageSlugSaga(actions: any) {
  try {
    const response: ResponseGenerator = yield call(() => getPageSlug(actions.slug));
    const data = response?.data || [];
    
    yield put(
      getPagesSuccess({
        pages: data
      })
    );
  } catch (ev: any) {
    const errorMessage = ev?.message || '';

    yield put(
      getPagesFailure({
        errorPages: errorMessage
      })
    );
  }
}

function* pagesSaga() {
  yield all([
    takeLatest(pagesTypes.GET_PAGES_REQUEST, getPagesSaga),
    takeLatest(pagesTypes.GET_PAGE_SLUG_REQUEST, getPageSlugSaga)
  ]);
}

export default pagesSaga;
