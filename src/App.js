import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SharedHomePage from "./Pages/SharedHomePage";
import LoggedInPage from "./Pages/LoggedInPage";
import Editor from "./components/Editor/Editor";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadblogs, asyncloaduser, asynloadusers } from "./store/userActions";
import Loader from "./components/Loader/Loader";
import Dashboard from "./components/Profile/Dashboard/Dashboard"
import { toast } from "react-toastify";
import SingleStory from "./Pages/SingleStory";
const App = () => {
  const notify = (msg) => toast(msg ?? "Something went wrong");
  const { isLoggedIn, blogs, error, loading } = useSelector(
    (state) => state.user
  );
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(asyncloaduser());
    Dispatch(asyncloadblogs());
    Dispatch(asynloadusers());
  }, []);
  useEffect(() => {
    if(error) notify(error);
  }, [error]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedHomePage />}>
          <Route index element={<HomePage />} />
          <Route path="/user/:username" element={<Dashboard />} />
          <Route path="/story/:id" element={<SingleStory />} />
          {/* <Route path="lists" element={<Lists />} /> */}
          {/* <Route path="settings" element={<SharedSettingsPage />}>
            <Route index element={<Settings />} />
            <Route path="security" element={<Security />} />
          </Route> */}
          {isLoggedIn && <Route path="new-story" element={<Editor />} />}
          {/* {isLoggedIn && <Route path="edit-story/:id" element={<Editor />} />} */}
        </Route>
        <Route path="/*" element={<>not found</>} />
      </Routes>
    </>
  );
};

export default App;
