import { all, fork } from "redux-saga/effects";
import postsSaga from "@redux/sagas/postsSaga";
import pagesSaga from "@redux/sagas/pagesSaga";
import categoriesSaga from "@redux/sagas/categoriesSaga";

export function* rootSaga() {
  yield all([
    fork(postsSaga),
    fork(pagesSaga),
    fork(categoriesSaga)
  ]);
}
