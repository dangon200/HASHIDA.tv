import {
  POST_USER,
  GET_USER_ID,
  GET_USER_NAME,
  POST_STREAM,
  GET_STREAM_ID,
  GET_STREAM_NAME,
  POST_CATEGORIES,
  ALLVIDEOS,
  POPVIDEO,
  FILTER_PUBLICATIONS,
  CLEAR_FILTER,
  GET_ALL_STREAMS,
  LOGIN_USER,
  LOGOUT_USER,
  GET_FAVORITES_ID
} from "./actions/actions";

const initialState = {
  user: '',
  login: true,
  users: [],
  usersDetail: {},
  stream: [],
  allStreams: [],
  streamDetail: {},
  getVideoFromDatabase: [],
  popVideo: [],
  favorites: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STREAMS:
      return {
        ...state,
        allStreams: action.payload,
        streams: action.payload,
        error: action.payload,
      };
    case LOGIN_USER:
      return { ...state, user: action.payload }
    case LOGOUT_USER:
      return { ...state, user: '' }
    case POST_USER:
      return {
        ...state,
      };
    case GET_USER_ID:
      return {
        ...state,
        usersDetail: action.payload,
      };
    case GET_USER_NAME:
      return {
        ...state,
        users: action.payload,
      };
    case GET_FAVORITES_ID:
      return { ...state, favorites: action.payload }
    case POST_STREAM:
      return {
        ...state,
      };
    case GET_STREAM_ID:
      return {
        ...state,
        streamDetail: action.payload,
      };
    case GET_STREAM_NAME:
      return {
        ...state,
        stream: action.payload,
      };
    case POST_CATEGORIES:
      return {
        ...state,
      };

    case ALLVIDEOS:
      return {
        ...state,
        getVideoFromDatabase: action.payload
      };
      
    case POPVIDEO:
      return {
        ...state,
        popVideo: action.payload
      };
    case FILTER_PUBLICATIONS:
      return { ...state, stream: action.payload }
    case CLEAR_FILTER:
      return { ...state, stream: state.allStreams }
    default:
      return { ...state };
  }
};

export default rootReducer;
