import pageCSS from "@wrappers/pageCSS";
import postsCSS from "./postsCSS";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import {
  getPostsRequest,
  setPostsPage
} from "@redux/actions/postsActions";
import Page from "@wrappers/Page";
import Pagination from '@components/base/pagination/Pagination';

const Posts = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pendingPosts, posts, errorPosts, currentPostPage } = useSelector(
    (state: RootState) => state.postsReducer
  );
  const [page, setPage] = useState<number>(currentPostPage || 1);
  const perPage = 20;

  useEffect(() => {
    dispatch(getPostsRequest(perPage, currentPostPage));
  }, [page]);

  const handleGoToPost = (slug: string) => {
    history.push(`/posts/${slug}`);
  };

  const handlePageUpdate = (page: number) => {
    setPage(page);
    dispatch(getPostsRequest(perPage, page));
    dispatch(setPostsPage(page));
  };

  return (
    <Page
      nameId="posts"
      dataLoading={pendingPosts}
    >
      <div data-component="Posts" className={pageCSS.page}>

        <div className={pageCSS.page_heading}>
          <h1>Posts</h1>
        </div>

        {(pendingPosts && posts.length === 0)
          ? <p>Fetching data...</p>
          : <div className={postsCSS.post_listing(pendingPosts)}>
              <div className={postsCSS.post_listing_grid}>
                {posts.map((post) => {
                  return (
                    <div className={postsCSS.post_btn_wrap} key={post.id}>
                      <button type="button" className={postsCSS.post_btn} onClick={() => handleGoToPost(post.slug)}>
                        <div className={postsCSS.post_btn_img_wrap}>
                          <img className={postsCSS.post_btn_img} src={post?._embedded?.['wp:featuredmedia']?.['0'].source_url || ''} />
                        </div>

                        <h3
                          className={postsCSS.post_btn_heading}
                          dangerouslySetInnerHTML={{
                              __html: post?.title?.rendered || ''
                          }}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              <Pagination
                currentPage={page}
                handleChosenPage={(page) => handlePageUpdate(page)}
                endOfPages={perPage > posts.length}
              />
            </div>
        }

        </div>
    </Page>
  );
};

export default Posts;
