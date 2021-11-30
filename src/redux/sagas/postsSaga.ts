import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getPostsFailure,
  getPostsSuccess,
  getPostSlugSuccess,
  getPostSlugFailure
} from "@redux/actions/postsActions";
import {
  IPost,
  postsTypes
} from "@redux/types/postsTypes";

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

const getPosts = (perPage = 20, page = 1) => {
  return axios.get<IPost[]>(`http://chinonthetank.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`);
};

const getPostSlug = (slug: string) => {
  return axios.get<IPost[]>(`http://chinonthetank.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
};

function* getPostsSaga(actions: any) {
  try {
    const response: ResponseGenerator = yield call(() => getPosts(actions.perPage, actions.page));
    const data = response?.data || [];
    
    yield put(
      getPostsSuccess({
        posts: data
      })
    );
  } catch (ev: any) {
    const errorMessage = ev?.message || '';

    yield put(
      getPostsFailure({
        errorPosts: errorMessage
      })
    );
  }
}

function* getPostSlugSaga(actions: any) {
  try {
    const response: ResponseGenerator = yield call(() => getPostSlug(actions.slug));
    const data = response?.data || [];
    
    yield put(
      getPostSlugSuccess({
        singlePost: data
      })
    );
  } catch (ev: any) {
    const errorMessage = ev?.message || '';

    yield put(
      getPostSlugFailure({
        errorSinglePost: errorMessage
      })
    );
  }
}

function* postsSaga() {
  yield all([
    takeLatest(postsTypes.GET_POSTS_REQUEST, getPostsSaga),
    takeLatest(postsTypes.GET_POST_SLUG_REQUEST, getPostSlugSaga)
  ]);
}

export default postsSaga;
