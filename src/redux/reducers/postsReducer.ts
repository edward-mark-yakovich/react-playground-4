import {
  postsTypes,
  PostsActions,
  PostsState
} from "@redux/types/postsTypes";

const initialState: PostsState = {
  pendingPosts: false,
  posts: [],
  errorPosts: null,
  currentPostPage: 1,
  pendingSinglePost: false,
  singlePost: [],
  errorSinglePost: null,
};

const postsReducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postsTypes.SET_POSTS_PAGE:
      return {
        ...state,
        currentPostPage: action.page
      };
    case postsTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        pendingPosts: true
      };
    case postsTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        pendingPosts: false,
        posts: action.payload.posts,
        errorPosts: null
      };
    case postsTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        pendingPosts: false,
        posts: [],
        errorPosts: action.payload.errorPosts
      };
    case postsTypes.GET_POST_SLUG_REQUEST:
      return {
        ...state,
        pendingSinglePost: true,
        singlePost: []
      };
    case postsTypes.GET_POST_SLUG_SUCCESS:
      return {
        ...state,
        pendingSinglePost: false,
        singlePost: action.payload.singlePost,
        errorSinglePost: null
      };
    case postsTypes.GET_POST_SLUG_FAILURE:
      return {
        ...state,
        pendingSinglePost: false,
        singlePost: [],
        errorSinglePost: action.payload.errorSinglePost
      };
    default:
      return {
        ...state
      };
  }
};

export default postsReducer;
