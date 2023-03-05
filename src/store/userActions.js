import {
  loaduser,
  errors,
  signout,
  loadblogs,
  loadsingleuser,
  setloading,
  updatelike,
  setblogloading,
  loadsingleblogs,
  setloadingfalse,
  loadusers
} from "./UserSlice";
import axios from "../axios";
import Axios from "axios";
export const asyncsignup = (newuser) => async (dispatch) => {
  try {
    const { data } = await Axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${newuser}`
    );
    const res = await axios.post("/signup", {
      name: data.name,
      username: data.email,
      email: data.email,
      password: data.id,
      avtar: {
        public_id: data.email,
        url: data.picture,
      },
    });
    dispatch(loaduser(res.data.user));
  } catch (err) {
    console.log(err);
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsignin = (newuser) => async (dispatch) => {
  try {
    // console.log(newuser);
    const { data } = await axios.post("/signin", newuser);
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncloaduser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/loaduser");
    //   console.log("loaduser action>>>>>");
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(setloadingfalse());
    // dispatch(errors(err.response.data.message));
  }
};

export const asyncsignout = () => async (dispatch) => {
  try {
    await axios.get("/signout");
    dispatch(signout());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsingleuser = (username) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/singleuser/${username}`);
    dispatch(loadsingleuser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsingleblogs = (id) => async (dispatch) => {
  try {
    dispatch(setblogloading());
    const { data } = await axios.get(`/single-stories/${id}`);
    console.log("loaduser action>>>>>", data);
    dispatch(loadsingleblogs(data?.blog));
  } catch (err) {
    dispatch(errors(err?.response?.data?.message));
  }
};

export const asyncloadblogs = () => async (dispatch) => {
  try {
    dispatch(setloading());
    const { data } = await axios.get("/blogs");
    dispatch(loadblogs(data?.blogs));
  } catch (err) {
    dispatch(errors(err?.response?.data?.message));
  }
};

export const asynccreateblog = (blog) => async (dispatch) => {
  try {
    await axios.post("/create-stories", blog);
    dispatch(asyncloadblogs());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncdeleteblog = (id) => async (dispatch) => {
  try {
    dispatch(setloading());
    await axios.get("/delete-stories/" + id);
    dispatch(asyncloadblogs());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncupdateblog = (id, blog) => async (dispatch) => {
  try {
    dispatch(setloading());
    await axios.put("/update-stories/" + id, blog);
    dispatch(asyncloadblogs());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
}

export const asynclikeblog = (id,single) => async (dispatch) => {
  try {
    dispatch(setblogloading());
    const {data} = await axios.get("/like/" + id);
    dispatch(updatelike({likes:data.likes,id,single}));
  } catch (err) {
    console.log(err);
    dispatch(errors(err.response.data.message));
  }
}

export const asyncupdateprofile = (user) => async (dispatch) => {
  try {
    dispatch(setloading());
    await axios.put("/update-profile/",user);
    dispatch(asyncloaduser());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
}

export const asynloadusers = () => async (dispatch) => {
  try {
    dispatch(setloading());
    const {data} = await axios.get("/users");
    dispatch(loadusers(data.users));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
}