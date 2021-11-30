import pageCSS from "@wrappers/pageCSS";
import homeCSS from "./homeCSS";
import React, { useEffect, useRef, memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import {
  setPostsPage,
  getPostSlugRequest
} from "@redux/actions/postsActions";
import {
  getPagesRequest,
  getPageSlugRequest
} from "@redux/actions/pagesActions";
import {
  getCategoriesRequest
} from "@redux/actions/categoriesActions";
import { useFetch } from "@hooks/useFetch";
import Page from "@wrappers/Page";

import { useModal } from "@hooks/useModal";
import Modal from "@components/base/modal/Modal";

// import {
//   IPage
// } from "@redux/types/pagesTypes";

import {
  isEmptyObj
} from '@utils/helpers';

const Tile = () => {
  let updates = useRef(0);
  
  return (
    <div>
      <div>{updates.current++}</div>
    </div>
  );
}

const TileMemo = memo(() => {
  let updates = useRef(0);

  return (
    <div>
      <div>{updates.current++}</div>
    </div>
  );
});

const reconfigureData = (data: any) => {
  // console.log('*** reconfigureData Fn updated ***');
  console.log(data);

  const updatedData = data.reduce((acc: any, item: any) => {
    return [
      ...acc,
      {
        ...item,
        nameID: `${item.id}--${item.title.rendered.toLowerCase()}`
      }
    ]
  }, []);

  return updatedData;
};

const Home = () => {
  const dispatch = useDispatch();

  const [responseIntro, loadingIntro, hasErrorIntro] = useFetch('pages?_embed&slug=about');
  const responseIntroVal = responseIntro || [];
  const reconfigureDataVal = useMemo(() => reconfigureData(responseIntroVal), [responseIntroVal]);

  // useMemo - wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change
  // console.log(responseIntro);
  // console.log(reconfigureDataVal);

  const { pendingPosts, posts, errorPosts, currentPostPage } = useSelector(
    (state: RootState) => state.postsReducer
  );
  const { pendingPages, pages, errorPages } = useSelector(
    (state: RootState) => state.pagesReducer
  );
  const { pendingCategories, categories, errorCategories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );
  const contentIntro = pages?.[0] || {};

  // console.log(pendingPosts);
  // console.log(posts);
  // console.log(errorPosts);

  // console.log(pendingPages);
  // console.log(pages);
  // console.log(errorPages);

  // console.log(pendingCategories);
  // console.log(categories);
  // console.log(errorCategories);

  useEffect(() => {
    dispatch(getPageSlugRequest('about'));
  }, []);

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  const { isModalShown, toggleModal } = useModal();

  return (
    <Page
      nameId="home"
      dataLoading={pendingPages || pendingCategories}
    >
      <div data-component="Home" className={pageCSS.page}>

        <div className={pageCSS.page_heading}>
          <h1>Home</h1>
          <p className={homeCSS.home_sub_heading}>Playing with Typescript / Tailwind stuff... Redux / Sagas</p>
        </div>

        <div className={homeCSS.home_intro_top}>
          <div>
            <button type="button" onClick={() => dispatch(setPostsPage(currentPostPage + 1))}>Set post page</button>
            <span> = {currentPostPage} </span>

            <br />
            <br />

            <button type="button" onClick={toggleModal}>Open modal</button>
          </div>
        </div>

        {(pendingPages && isEmptyObj(contentIntro))
          ? <p>Fetching data...</p>
          : <div className={homeCSS.home_intro_grid}>
              <div className={homeCSS.home_intro_img_wrap}>
                <img className={homeCSS.home_intro_img} src={contentIntro?._embedded?.['wp:featuredmedia']?.['0'].source_url || ''} />
              </div>

              <div className={homeCSS.home_intro_content}>
                <h3
                  className={homeCSS.home_intro_heading}
                  dangerouslySetInnerHTML={{
                      __html: contentIntro?.title?.rendered || ''
                  }}
                />

                <div
                  dangerouslySetInnerHTML={{
                      __html: contentIntro?.excerpt?.rendered || ''
                  }}
                />
              </div>
            </div>
        }

        {(pendingCategories && !categories.length)
          ? <p>Fetching data...</p>
          : <div className={homeCSS.home_categories}>
              <h3 className={homeCSS.home_categories_heading}>Categories</h3>

              <ul className={homeCSS.home_categories_list}>
                {categories.map((category, index) => {
                  return (
                    <li key={index}>{category?.name || ''}</li>
                  );
                })}
              </ul>
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








      {/* <div>

        <div>
          <h1>Home</h1>

          <button onClick={() => dispatch(setPostsPage(currentPostPage + 1))}>
            Set Posts Page = {currentPostPage}
          </button>

          <br />
          <br />

          <button onClick={() => dispatch(getPostSlugRequest('sunnnny-sunday-nj'))}>
            Get Post
          </button>

          <br />
          <br />

          <button onClick={() => dispatch(getPageSlugRequest('about'))}>
            Get Page
          </button>

          <br />
          <br />

          <button onClick={() => dispatch(getPagesRequest(100, 1))}>
            Get All Pages
          </button>

          <br />
          <br />

          <button onClick={() => dispatch(getCategoriesRequest())}>
            Get All Categories
          </button>

          <br />
          <br />
          <br />
          <br />
          <br />

          <Tile />
          <TileMemo />
          
        </div>

      </div> */}



    </Page>
  );
};

// function mapStateToProps(state: any) {
//   return { currentPostPage: state.postsReducer.currentPostPage };
// } 

// export default connect(mapStateToProps)(Home);

// either connect with mapStateToProps ... or useSelector hook

export default Home;
