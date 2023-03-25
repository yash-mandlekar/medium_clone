import React from "react";
import { AiOutlineShareAlt, AiOutlineWhatsApp } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WhatsappShareButton } from "react-share";
import { toast } from "react-toastify";
import Roundedbtn from "../Ui/Roundedbtn";
import module from "./Article.module.css";
const Article = ({ width }) => {
  const { isLoggedIn, blogs } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const notify = (msg) => toast(msg ?? "Something went wrong");
  function createMarkup(data) {
    return { __html: data };
  }
  const handleShare = (id) => {
    navigator.clipboard.writeText(`http://localhost:3000/story/${id}`);
    notify("Link copied to clipboard");
  };
  return (
    <>
      <div className={`${module.wrapper}`}>
        <div className={`${module.articles}`} style={{ width: width }}>
          {blogs?.map((blog, i) => (
            <div key={i} className={`${module.article}`}>
              <div
                className={`${module.by_who} cp`}
                onClick={() => navigate(`/user/${blog.author.username}`)}
              >
                <img src={blog.author.avtar.url} alt="" />
                <h5>{blog.author.username}</h5>
              </div>
              <div
                className={`cp ${module.content} ${
                  !isLoggedIn && module.content2
                } ${width === "100%" && module.content2}`}
                dangerouslySetInnerHTML={createMarkup(blog.data)}
                onClick={() => navigate(`/story/${blog._id}`)}
              ></div>
              <div className={`${module.footer}`}>
                <h6>
                  {new Date(Date.now()).getDate() -
                    new Date(blog?.createdAt).getDate() >
                  0
                    ? new Date(Date.now()).getDate() -
                      new Date(blog?.createdAt).getDate() +
                      " days ago"
                    : new Date(Date.now()).getHours() -
                        new Date(blog?.createdAt).getHours() >
                      0
                    ? new Date(Date.now()).getHours() -
                      new Date(blog?.createdAt).getHours() +
                      " hours ago"
                    : new Date(Date.now()).getMinutes() -
                      new Date(blog?.createdAt).getMinutes() +
                      " minutes ago"}
                </h6>
                <div className="d-flex">
                  <div className="whatsapp">
                    <WhatsappShareButton
                      url={`https://medium-clone-phi-ashy.vercel.app/story/${blog._id}`}
                    >
                      <AiOutlineWhatsApp size={21} cursor="pointer" />
                    </WhatsappShareButton>
                  </div>
                  <div className="share">
                    <AiOutlineShareAlt
                      onClick={() => handleShare(blog._id)}
                      size={21}
                      cursor="pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isLoggedIn ? (
          ""
        ) : (
          <div className={`${module.categories_links}`}>
            <h4>Discover more of what matters to you</h4>
            <div className={`${module.links}`}>
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Programming"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Data Science"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Technology"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Self Improvement"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Writing"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Relationships"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Machine Learning"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Productivity"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                padding=".6vmax"
                inRound="Politics"
                color="grey"
                border="1px solid rgba(230, 230, 230, 1)"
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
        )}
      </div>
    </>
  );
};

export default Article;
