import axios from "axios";
import { MdContactSupport } from "react-icons/md";
export const POST_USER = "POST_USER";
export const GET_USER_ID = "GET_USER_ID";
export const GET_USER_NAME = "GET_USER_NAME";
export const POST_STREAM = "POST_STREAM";
export const GET_STREAM_ID = "GET_STREAM_ID";
export const GET_STREAM_NAME = "GET_STREAM_NAME";
export const POST_CATEGORIES = "POST_CATEGORIES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const ALLVIDEOS = "ALLVIDEOS";
export const POPVIDEO = "POPVIDEO";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_FAVORITES_ID = "GET_FAVORITES_ID";
export const GET_ALL_STREAMS = "GET_ALL_STREAMS";
export const GET_USERS = "GET_USERS";
export const GET_STREAMS = "GET_STREAMS";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const FILTER_STREAMS = "FILTER_STREAMS";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const GET_USER_SUBSCRIPTIONS = "GET_USER_SUBSCRIPTIONS";
export const PUT_USER = "PUT_USER";
export const CLEAN_STATE = "CLEAN_STATE";
export const UPDATE_USER = "UPDATE_USER";
export const BANNED_USER = "BANNED_USER";
export const UPDATE_PROFILE_PICTURE = "UPDATE_PROFILE_PICTURE";
export const CLEAR_STREAM_NAME= "CLEAR_STREAM_NAME"

const urlApi = "https://deploy-hash-production.up.railway.app/";

///////// USER ACTIONS
export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export function registerUser(data) {
  return function (dispatch) {
    fetch(`${urlApi}/api/user`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "REGISTER_USER", payload: data });
      });
  };
}

// Search Publication by Name

export const searchByName = (name) => {
  return async function (dispatch) {
    return fetch(`${urlApi}/publications?name=${name}`).then((respuesta) =>
      respuesta.json().then((dataP) => {
        dispatch({ type: GET_STREAM_NAME, payload: dataP });
      })
    );
  };
};

////////////////////////////////////

export const postUser = (data) => {
  return async function () {
    try {
      await axios.post("https://deploy-hash-production.up.railway.app/api/auth/signup", data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getUserId = (id) => {
  return async function (dispatch) {
    try {
      const data = {
      id
    }
      const json = await axios.get(`${urlApi}/api/user/${id}`, data);
      dispatch({ type: GET_USER_ID, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getUserName = (name) => {
  // console.log("llegue");
  return async function (dispatch) {
    try {
      const json = await axios.get(`${urlApi}/api/users?name=${name}`);
      dispatch({ type: GET_USER_NAME, payload: json.data });
    } catch (error) {
      alert("Ese usuario o stream no existe");
    
    }
  };
};

export const putUser = (id, data) => {
  return async function (dispatch) {
    try {
      const json = await axios.put(`${urlApi}/api/userUpDate/${id}`, data);
      dispatch({ type: 'PUT_USER', payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const updateProfileImage = (id, url) => {
  return async function (dispatch) {
    const data = {
      url
    }
    try {
      const api = await axios.put(`${urlApi}/api/users/${id}/image-upload`, data)
      return dispatch({
        type: 'UPDATE_PROFILE_PICTURE',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
///////// FAVORITES

/* export const getFavorites = (id) => {
  return async function (dispatch) {
    try {
      const api = await axios.get(`${urlApi}/api/favorites/${id}`)
      return dispatch({
        type: 'GET_FAVORITES_ID',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
} */

///////// STREAM ACTIONS
export const getUsers = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`https://deploy-hash-production.up.railway.app/api/users`);
      dispatch({ type: 'GET_USERS', payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const postStream = (data) => {
  return async function () {
    try {
      await axios.post("https://deploy-hash-production.up.railway.app/api/streams", data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const postStreamId = (id, data) => {
  console.log(id, data, "----------poststreamid");
  return async function () {
    try {
      await axios.post(`https://deploy-hash-production.up.railway.app/api/streams/${id}`, data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const updateStream = (id, stream) => {
  return async () => {
    try {
      await axios.put(`https://deploy-hash-production.up.railway.app/api/streams/${id}`, stream);
    } catch (error) {
      return { error: error.mesage };
    }
  };
};

export const getStreamId = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `https://deploy-hash-production.up.railway.app/api/streams/id/${id}`
      );
      console.log("🚀 ~ file: actions.js:183 ~ json", json);
      dispatch({ type: GET_STREAM_ID, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getStreamName = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `https://deploy-hash-production.up.railway.app/api/stream1?name=${name}`
      );
      dispatch({ type: GET_STREAM_NAME, payload: json.data });
    } catch (error) {
      alert("No se encontro ese streamer");
    }
  };
};

///////// CATEGORIES ACTIONS

export const getStreams = () => {
  return async function (dispatch) {
  
    try {
      const json = await axios.get("https://deploy-hash-production.up.railway.app/api/stream1");
      dispatch({ type: 'GET_STREAMS', payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`https://deploy-hash-production.up.railway.app/api`);
      dispatch({ type: 'GET_CATEGORIES', payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const postCategories = (data) => {
  return async function () {
    try {
      await axios.post("https://deploy-hash-production.up.railway.app/categories/create", data);
    } catch (error) {
      return { error: error.message };
    }
  };
};

export function filterCategories(payload) {
  return {
    type: "FILTER_CATEGORIES",
    payload: payload,
  };
}

// AllVideos

const gifs = async () => {
  // Esta es la funcion que trae los gifs
  return await axios
    .get(
      "https://api.giphy.com/v1/gifs/search?api_key=ZYn9uQnuaZy7FYl6wZo57ZW6XqQtA9T6&q=game&limit=100&offset=0&rating=r&lang=en"
    )
    .then((response) => {
      const { data } = response;
      const gifs = data.data.map((image) => {
        return {
          id: image.id,
          title: image.title,
          url: image.images.original.url,
        };
      });
      return gifs;
    });
};

export function allVideoGamesDataBase() {
  return async function (dispatch) {
    const videos = await gifs();
    dispatch({
      type: "ALLVIDEOS",
      payload: videos,
    });
  };
}
// FILTERS EXPLORAR
export const filterCanalesStream = ({
  categoria,
  lenguaje,
  continente,
  opt,
}) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(
        `${urlApi}/api/streams/filter?categoria=${categoria}&lenguaje=${lenguaje}&continente=${continente}&opt=${opt}`
      );
      console.log(data)
      return dispatch({
        type: "FILTER_STREAMS",
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const clearFilter = () => {
  return { type: "CLEAR_FILTER" };
};
 export const clearStreamName = () => {
  return { type: "CLEAR_STREAM_NAME", payload: [] };
};

  export const getSubscriptions= (id) => {
    console.log(id)
    return async function (dispatch) {
      try {
        const { data } = await axios.get(`${urlApi}/api/subscriptions/${id}`)
        return dispatch({
          type: 'GET_USER_SUBSCRIPTIONS',
          payload: data
        })
      } catch (error) {
        console.log(error)
      }
    }
  };

// BestGame

const BesVideo = async () => {
  // Esta es la funcion que trae un Gif Random
  return await axios
    .get(
      "https://api.giphy.com/v1/gifs/random?api_key=ZYn9uQnuaZy7FYl6wZo57ZW6XqQtA9T6&tag=&rating=r"
    )
    .then((response) => {
      const { data } = response;
      return {
        id: data.data.id,
        title: data.data.title,
        url: data.data.images.original.url,
      };
    });
};

export function popularVideo() {
  return async function (dispatch) {
    const popVideo = await BesVideo();
    dispatch({
      type: "POPVIDEO",
      payload: popVideo,
    });
  };
}

export const updateUserAdmin = (id, data) => {
  return async function (dispatch) {
    try {
      const json = await axios.put(`${urlApi}/api/userAdminUser/${id}`,data);
      const updateUsers= await axios.get(`${urlApi}/api/users`)
      console.log(updateUsers)
      dispatch({ type: 'UPDATE_USER', payload: updateUsers.data });

    } catch (error) {
      return { error: error.message };
    }
  };
};

export const updateBanned = (id, data) => {
  return async function (dispatch) {
    try {
      const json = await axios.put(`${urlApi}/api/user/${id}`, data);
      const userBanned = await axios.get(`${urlApi}/api/users`);
      dispatch({ type: BANNED_USER, payload: userBanned.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const makeRating = (data) => {
  console.log("🚀 ~ file: actions.js:369 ~ makeRating ~ data", data);
  return async function () {
    try {
      console.log("🚀 ~ file: actions.js:372 ~ makeRating ~ data", data);
      await axios.post(`${urlApi}/api/rating`, data);
    } catch (err) {
      console.error(err);
    }
  };
}
