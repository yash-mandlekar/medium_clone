import React, { useEffect, useState } from "react";
import module from "./Navbar.module.css";
// import medium_logo from "../../assets/logo_medium.png";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignout } from "../../store/userActions";
const LoggedInNavbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const removeDropdown = (e) => {
    if (
      e.target.id === "dropdown" ||
      e.target.tagName === "svg" ||
      e.target.tagName === "path"
    )
      return;
    setDropDown(false);
  };
  const handleSignOut = () => {
    Dispatch(asyncsignout());
    navigate("/");
  };
  useEffect(() => {
    window.addEventListener("click", removeDropdown);
    return () => window.removeEventListener("click", removeDropdown);
  }, []);

  return (
    <>
      <nav className={module.Lnav}>
        <div className={`${module.Lleft} ${module.Lnav}`}>
          <svg
            viewBox="0 0 1043.63 592.71"
            onClick={() => navigate("/")}
            className="bn hd"
            style={{
              cursor: "pointer",
            }}
          >
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
              </g>
            </g>
          </svg>
          <form className={`${module.searchBar}`}>
            <RiSearchLine fontSize="1.5vw" fill="gray" color="gray" />
            <input type="text" placeholder="What do you want to listen to" />
          </form>
        </div>
        <div className={`${module.Lright} `}>
          <Link to="/new-story" className={`${module.Lwrite}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              color="#838383"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
            <h5>Write</h5>
          </Link>
          <svg
            width="24"
            height="24"
            fill="none"
            color="#838383"
            aria-label="Notifications"
          >
            <path
              d="M15 18.5a3 3 0 1 1-6 0"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="currentColor"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className={`${module.Lprofile}`}>
            <div
              onClick={() => setDropDown(!dropDown)}
              className={`${module.Lupper}`}
              id="dropdown"
            >
              <img
                id="dropdown"
                draggable="false"
                src={`${user?.avtar?.url}`}
                alt=""
              />
              {dropDown ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {dropDown ? (
              <div className={`${module.dropDown}`}>
                <Link to={`/user/${user?.username}`}>
                  <div className={`${module.list}`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-label="Profile"
                    >
                      <circle
                        cx="12"
                        cy="7"
                        r="4.5"
                        stroke="currentColor"
                      ></circle>
                      <path
                        d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34"
                        stroke="currentColor"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <h5>Profile</h5>
                  </div>
                </Link>
                <Link to="/lists">
                  <div className={`${module.list}`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-label="Lists"
                    >
                      <path
                        d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z"
                        stroke="currentColor"
                      ></path>
                      <path
                        d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <h5>Lists</h5>
                  </div>
                </Link>
                <Link to="/stories">
                  <div className={`${module.list}`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-label="Stories"
                    >
                      <path
                        d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                        stroke="currentColor"
                      ></path>
                      <path
                        d="M8 8.5h8M8 15.5h5M8 12h8"
                        stroke="currentColor"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <h5>Stories</h5>
                  </div>
                </Link>
                <Link to="/stats">
                  <div className={`${module.list} ${module.line}`}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-label="Stats"
                    >
                      <path
                        d="M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <h5>Stats</h5>
                  </div>
                </Link>
                <Link to="/settings">
                  <div className={`${module.list} ${module.newSec}`}>
                    <h5>Settings</h5>
                  </div>
                </Link>
                <Link to="/followings">
                  <div className={`${module.list}`}>
                    <h5>Refine recommendations</h5>
                  </div>
                </Link>
                <Link to="/publications">
                  <div className={`${module.list} ${module.line}`}>
                    <h5>Manage Publication</h5>
                  </div>
                </Link>
                <Link to="/plans">
                  <div className={`${module.list} ${module.newSec}`}>
                    <h5>Beome a member</h5>
                    <h5>⭐</h5>
                  </div>
                </Link>
                <Link to="/earn">
                  <div className={`${module.list}`}>
                    <h5>Apply to the Partener Program</h5>
                  </div>
                </Link>
                <Link to="/gift-plans">
                  <div className={`${module.list} ${module.line}`}>
                    <h5>Gift a membership</h5>
                  </div>
                </Link>
                <div className="cp" onClick={handleSignOut}>
                  <div className={`${module.list} ${module.last}`}>
                    <h5>Sign out</h5>
                    <h5>{user.email}</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoggedInNavbar;
