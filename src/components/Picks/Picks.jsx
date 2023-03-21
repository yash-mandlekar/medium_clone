import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Roundedbtn from "../Ui/Roundedbtn";
import module from "./Picks.module.css";
import Axios from "../../axios";
import { TbLoader2 } from 'react-icons/tb';
const Picks = () => {
  const { users, user } = useSelector((store) => store.user);
  const [following, setfollowing] = useState(user?.following);
  const [loading, setloading] = useState();
  const handleFollow = async (id, i) => {
    try {
      setloading(i);
      const { data } = await Axios.get(`/followUnfollow/${id}`);
      setfollowing(data.following);
      setloading();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={module.picks}>
        <h5>Staff Picks</h5>
        <div className={module.pick}>
          <h6>
            <span>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </span>
            Molly Ruby in Towards Data Science
          </h6>
          <h5>
            How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk fg
          </h5>
        </div>
        <div className={module.pick}>
          <h6>
            <span>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </span>
            Molly Ruby in Towards Data Science
          </h6>
          <h5>
            How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk fg
          </h5>
        </div>
        <div className={module.pick}>
          <h6>
            <span>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </span>
            Molly Ruby in Towards Data Science
          </h6>
          <h5>
            How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk fg
          </h5>
        </div>
        <h6 className={module.full_list}>See full List</h6>
      </div>

      {/* recommandations */}
      <div className="recomands">
        <div className={`${module.categories_links}`}>
          <h4>Discover more of what matters to you</h4>
          <div className={`${module.links}`}>
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Programming"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Data Science"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Technology"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="9vw"
              inRound="Self Improvement"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Writing"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="8vw"
              inRound="Relationships"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="10vw"
              inRound="Machine Learning"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Productivity"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Politics"
              color="grey"
              height="4vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid #cecece"
            />
          </div>
          <br />
          <hr />
          <div className={`${module.options}`}>
            <h5>Help</h5>
            <h5>Status</h5>
            <h5>Writers</h5>
            <h5>Blog</h5>
            <h5>Careers</h5>
            <h5>Privacy</h5>
            <h5>Terms</h5>
            <h5>About</h5>
            <h5>Text to speech</h5>
          </div>
        </div>
      </div>

      <div className={module.follow_recomand}>
        <h4>Who to follow</h4>
        {users?.map(
          (single, i) =>
            single._id !== user?._id && (
              <div key={i} className={module.rec_card}>
                <img src={`${single?.avtar?.url}`} alt="" />
                <div className="desc">
                  <h4>{single.username}</h4>
                  <h6>{single.bio}</h6>
                </div>
                <button
                  onClick={() => handleFollow(single._id, i)}
                  className={`${module.new_list_btn} ${module.follow_btn}`}
                  style={{
                    backgroundColor: following?.includes(single._id)
                      ? "black"
                      : "white",
                    color: following?.includes(single._id) ? "white" : "black",
                  }}
                >
                  {loading && loading === i ? (
                    <TbLoader2 className="followLoad" />
                  ) : following?.includes(single._id) ? (
                    "Following"
                  ) : (
                    "Follow"
                  )}
                </button>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Picks;
