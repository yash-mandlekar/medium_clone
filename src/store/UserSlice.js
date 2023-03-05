import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogs: null,
  isLoggedIn: false,
  error: null,
  loading: true,
  singleuser: null,
  updateblog: null,
  blogloading: false,
  singleblog: null,
  users: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setloading: (state, action) => {
      state.loading = true;
    },
    setloadingfalse: (state, action) => {
      state.loading = false;
    },
    setblogloading: (state, action) => {
      state.blogloading = true;
    },
    loaduser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
    },
    errors: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    },
    loadblogs: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
    loadsingleuser: (state, action) => {
      state.singleuser = action.payload;
      state.loading = false;
    },
    loadupdateblog: (state, action) => {
      state.updateblog = action.payload;
      state.loading = false;
    },
    updatelike: (state, action) => {
      if (action.payload.single) {
        state.singleblog.likes = action.payload.likes;
      } else {
        state.singleuser.stories = state.singleuser.stories.map((blog) => {
          if (blog._id === action.payload.id) {
            return { ...blog, likes: action.payload.likes };
          } else {
            return blog;
          }
        });
      }
      state.blogloading = false;
    },
    loadsingleblogs: (state, action) => {
      state.singleblog = action.payload;
      state.blogloading = false;
    },
    loadusers: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loaduser,
  errors,
  signout,
  loadblogs,
  loadsingleuser,
  setloading,
  loadupdateblog,
  updatelike,
  setblogloading,
  loadsingleblogs,
  setloadingfalse,
  loadusers,
} = userSlice.actions;

export default userSlice.reducer;
