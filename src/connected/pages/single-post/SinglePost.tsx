import pageCSS from "@wrappers/pageCSS";
import singlePostCSS from "./singlePostCSS";
import React, { useEffect, useRef, memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import {
  getPostSlugRequest
} from "@redux/actions/postsActions";
import Page from "@wrappers/Page";

import { useModal } from "@hooks/useModal";
import Modal from "@components/base/modal/Modal";

import {
  isEmptyObj
} from '@utils/helpers';

type SinglePostProps = {
    match: any;
};

const SinglePost = ({
  match
}: SinglePostProps) => {
    const dispatch = useDispatch();
    const slug = match?.params?.slug || '';
    const { pendingSinglePost, singlePost, errorSinglePost } = useSelector(
        (state: RootState) => state.postsReducer
    );
    const contentPost = singlePost?.[0] || {};

    useEffect(() => {
        dispatch(getPostSlugRequest(slug))
    }, []);

  const { isModalShown, toggleModal } = useModal();

  return (
    <Page
      nameId="single post"
      dataLoading={pendingSinglePost}
    >
      <div data-component="SinglePost" className={pageCSS.page}>

        <div className={pageCSS.page_heading}>
          <h1>Posts</h1>
        </div>

        <div>
          <br />
          <button type="button" onClick={toggleModal}>Open modal</button>
          <br />
          <br />
        </div>

        {(pendingSinglePost && isEmptyObj(contentPost))
          ? <p>Fetching data...</p>
          : <div>
              <h3
                className={singlePostCSS.single_post_heading}
                dangerouslySetInnerHTML={{
                    __html: contentPost?.title?.rendered || ''
                }}
              />

              <div
                dangerouslySetInnerHTML={{
                    __html: contentPost?.content?.rendered || ''
                }}
              />
            </div>
        }

      </div>






      <Modal
          id="modal--0123"
          isModalShown={isModalShown}
          hideModal={toggleModal}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
          </div> 
        </Modal>


    </Page>
  );
};

export default SinglePost;
