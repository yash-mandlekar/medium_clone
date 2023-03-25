import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RiDeleteBinLine, RiMoreFill } from "react-icons/ri";
import { AiFillLike, AiOutlineEdit, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import {
  asyncdeleteblog,
  asynclikeblog,
  asyncsingleblogs,
} from "../store/userActions";
import module from "../components/Profile/Dashboard/Dashboard.module.css";
const SingleStory = () => {
  const { id } = useParams();
  const { singleblog, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncsingleblogs(id));
  }, [dispatch, id]);

  function createMarkup(data) {
    return { __html: data };
  }

  const handleLike = (_id) => {
    dispatch(asynclikeblog(_id, true));
  };

  const handleDelete = (_id) => {
    dispatch(asyncdeleteblog(_id));
  };
  return (
    <div className="singlestory-cnt">
      <div
        className={`${module.by_who} cp`}
        style={{
          marginBottom: "20px",
        }}
        onClick={() => navigate(`/user/${singleblog?.author?.username}`)}
      >
        <img src={singleblog?.author?.avtar.url} alt="" />
        <h5>
          {singleblog?.author?.username} <br />{" "}
          <span
            style={{
              fontSize: ".9vmax",
              color: "grey",
              marginTop: "5px",
            }}
          >
            {singleblog?.createdAt.split("T")[0]}
          </span>
        </h5>
      </div>
      <div className={`${module.lists_card_cnt}`}>
        <div className={`${module.card_time}`}>
          {new Date(Date.now()).getDate() -
            new Date(singleblog?.createdAt).getDate() >
          0
            ? new Date(Date.now()).getDate() -
              new Date(singleblog?.createdAt).getDate() +
              " days ago"
            : new Date(Date.now()).getHours() -
                new Date(singleblog?.createdAt).getHours() >
              0
            ? new Date(Date.now()).getHours() -
              new Date(singleblog?.createdAt).getHours() +
              " hours ago"
            : new Date(Date.now()).getMinutes() -
              new Date(singleblog?.createdAt).getMinutes() +
              " minutes ago"}
        </div>
        <div
          className={`${module.lists_card} cp`}
          dangerouslySetInnerHTML={createMarkup(singleblog?.data)}
        ></div>
        <div className={`${module.share_buttons}`}>
          <div className={`${module.comment}`}>
            <div
              onClick={() => handleLike(singleblog?._id)}
              className={`${module.likes} cp`}
            >
              {singleblog?.likes?.includes(user?._id) ? (
                <AiFillLike size={21} color="blue" />
              ) : (
                <AiOutlineLike size={21} color="grey" />
              )}
              <span>{singleblog?.likes.length} likes</span>
            </div>

            <div className={`${module.likes}`}>
              <FaRegComment size={21} color="grey" />
              <span>{singleblog?.comments.length} comments</span>
            </div>
          </div>
          {singleblog?.author?._id === user?._id ? (
            <div className={`${module.buttons}`}>
              <RiDeleteBinLine
                color="grey"
                title="delete"
                onClick={() => handleDelete(singleblog._id)}
                size={21}
                cursor="pointer"
              />
              <AiOutlineEdit
                // onClick={() => Dispatch(loadupdateblog(story))}
                title="edit"
                size={21}
                color="grey"
                cursor="pointer"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleStory;
