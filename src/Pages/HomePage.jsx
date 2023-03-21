import React, { useState } from "react";
import { useSelector } from "react-redux";
import Article from "../components/Article/Article";
import Header from "../components/Header/Header";
import Trending from "../components/TrendingSection/Trending";
import LoggedInPage from "./LoggedInPage";
const HomePage = () => {
  const { isLoggedIn } = useSelector((store) => store.user);
  return (
    <>
      {isLoggedIn ? (
        <LoggedInPage />
      ) : (
        <>
          <Header /> 
          <Trending /> 
          <Article />
        </>
      )}
    </>
  );
};

export default HomePage;
