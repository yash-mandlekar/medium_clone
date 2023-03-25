import React, { useEffect, useMemo, useState } from "react";
import module from "./Dashboard.module.css";
import { RiDeleteBinLine, RiMoreFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncdeleteblog,
  asynclikeblog,
  asyncsingleuser,
  asyncupdateprofile,
} from "../../../store/userActions";
import {
  AiFillLike,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { WhatsappShareButton } from "react-share";
import { toast } from "react-toastify";
const Dashboard = () => {
  const notify = (msg) => toast(msg ?? "Something went wrong");
  const [handleDrop, sethandleDrop] = useState(false);
  const [overlay, setoverlay] = useState(false);
  const { singleuser, user, blogloading } = useSelector((state) => state.user);
  const { username } = useParams();
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (username) Dispatch(asyncsingleuser(username));
  }, [username]);
  const handleDropDown = () => {
    sethandleDrop(!handleDrop);
  };
  function createMarkup(data) {
    return { __html: data };
  }
  const handleDelete = (id) => {
    Dispatch(asyncdeleteblog(id));
  };
  const handleLike = (id) => {
    Dispatch(asynclikeblog(id));
  };
  const handleupdateprofile = (e) => {
    e.preventDefault();
    const { username, bio } = e.target;
    const data = {
      username: username.value,
      bio: bio.value,
    };
    setoverlay(false);
    Dispatch(asyncupdateprofile(data));
    navigate(`/user/${username.value}`);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/user/${username}`);
    sethandleDrop(false);
  };
  const handleShare = (id) => {
    navigator.clipboard.writeText(`http://localhost:3000/story/${id}`);
    notify("Link copied to clipboard");
  };
  const handleOverlay = (e) => {
    if (e.target.className === "overlay") {
      setoverlay(false);
    }
  };
  return (
    <>
      {overlay && (
        <div className="overlay" onClick={handleOverlay}>
          <div className="card">
            <span className="title">Profile Information</span>
            <form onSubmit={handleupdateprofile} className="form">
              <div className="group">
                <input
                  placeholder=" "
                  defaultValue={singleuser?.username}
                  name="username"
                  type="text"
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="group">
                <textarea
                  placeholder=" "
                  id="bio"
                  name="bio"
                  rows="5"
                  defaultValue={singleuser?.bio}
                  required
                ></textarea>
                <label htmlFor="bio">Bio</label>
              </div>
              <button type="submit">Submit</button>
              {/* <button>Cancel</button> */}
            </form>
          </div>
        </div>
      )}
      <div className={`${module.wrap}`}>
        <div className={`${module.left}`}>
          <div className={`${module.top}`}>
            <h1>
              {singleuser?.username?.charAt(0).toUpperCase()}
              {singleuser?.username?.slice(1)}
            </h1>
            {singleuser?._id === user?._id && (
              <>
                <h1
                  className={`${module.drop_trigger}`}
                  onClick={handleDropDown}
                >
                  <RiMoreFill />
                </h1>
                {handleDrop && (
                  <div className={`${module.drop_down} cp`}>
                    <h6 onClick={handleCopy}>Copy link to profile</h6>
                  </div>
                )}
              </>
            )}
          </div>
          <div className={`${module.small_nav}`}>
            <div className={`${module.row}`}>
              <h4>Home</h4>
              <h4>About</h4>
            </div>
          </div>
          {singleuser?.stories?.map((story, i) => (
            <div key={i} className={`${module.lists_card_cnt}`}>
              <div className={`${module.card_time}`}>
                {new Date(Date.now()).getDate() -
                  new Date(story?.createdAt).getDate() >
                0
                  ? new Date(Date.now()).getDate() -
                    new Date(story?.createdAt).getDate() +
                    " days ago"
                  : new Date(Date.now()).getHours() -
                      new Date(story?.createdAt).getHours() >
                    0
                  ? new Date(Date.now()).getHours() -
                    new Date(story?.createdAt).getHours() +
                    " hours ago"
                  : new Date(Date.now()).getMinutes() -
                    new Date(story?.createdAt).getMinutes() +
                    " minutes ago"}
              </div>
              <div
                className={`${module.lists_card} cp`}
                dangerouslySetInnerHTML={createMarkup(story?.data)}
                onClick={() => navigate(`/story/${story._id}`)}
              ></div>
              <div className={`${module.share_buttons}`}>
                <div className={`${module.comment}`}>
                  <div
                    onClick={() => handleLike(story._id)}
                    className={`${module.likes} cp`}
                  >
                    {story?.likes?.includes(user?._id) ? (
                      <AiFillLike size={21} color="blue" />
                    ) : (
                      <AiOutlineLike size={21} color="grey" />
                    )}
                    <span>{story.likes.length} likes</span>
                  </div>

                  <div className={`${module.likes}`}>
                    <FaRegComment size={21} color="grey" />
                    <span>{story.comments.length} comments</span>
                  </div>
                </div>
                <div className={`${module.buttons}`}>
                  <div className="whatsapp">
                    <WhatsappShareButton
                      url={`http://localhost:3000/story/${story._id}`}
                      title={story.data}
                    >
                      <AiOutlineWhatsApp size={21} cursor="pointer" />
                    </WhatsappShareButton>
                  </div>
                  <div className="share">
                    <AiOutlineShareAlt
                      onClick={() => handleShare(story._id)}
                      size={21}
                      cursor="pointer"
                    />
                  </div>
                  <div className="delete">
                    {singleuser?._id === user?._id ? (
                      <RiDeleteBinLine
                      title="delete"
                      onClick={() => handleDelete(story._id)}
                      size={21}
                      cursor="pointer"
                    />
                    ) : ""}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${module.right}`}>
          <div className={`${module.avatar}`}>
            <img
              // src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
              src={`${singleuser?.avtar?.url}`}
              alt=""
            />
          </div>
          <h4>
            {singleuser?.username?.charAt(0).toUpperCase()}
            {singleuser?.username?.slice(1)}
          </h4>
          {singleuser?._id === user?._id ? (
            <h5 className="cp" onClick={() => setoverlay(true)}>
              Edit profile
            </h5>
          ) : (
            <h5 className="cp">Follow</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
