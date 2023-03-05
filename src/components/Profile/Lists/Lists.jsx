import React from "react";
import { BsFillLockFill, BsSave } from "react-icons/bs";
import Roundedbtn from "../../Ui/Roundedbtn";
import module from "./Lists.module.css";
const Lists = () => {
  return (
    <>
      <div className={`${module.wrap}`}>
        <div className={`${module.left}`}>
          <div className={`${module.top}`}>
            <h4>Your lists</h4>
            <button className={`${module.new_list_btn}`}>New list</button>
          </div>
          <div className={`${module.small_nav}`}>
            <div className={`${module.row}`}>
              <h4>Home</h4>
              <h4>About</h4>
            </div>
          </div>
          {/* list_cards */}
          <div className={`${module.lists_card}`}>
            <div className={[module.title]}>
              <h4>Create a list to easily organize and share stories</h4>
              <span>
                <button className={`${module.new_list_btn} ${module.sec_btn} `}>
                  {/* <button className={[module.new_list_btn, module.sec_btn]}> */}
                  New list
                </button>
              </span>
            </div>
            <div className={`${module.prvImages}`}>
              <svg width="112" height="145" viewBox="0 0 112 112" fill="none">
                <circle
                  opacity="0.15"
                  cx="67.5"
                  cy="67.5"
                  r="67.5"
                  fill="#E8F3E8"
                ></circle>
                <circle cx="68" cy="68" r="20" fill="#fff"></circle>
                <mask id="bookmark-cta-mobile_svg__a" fill="#fff">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M73.05 58.67a.46.46 0 0 1 .93 0V61h2.32a.46.46 0 1 1 0 .93h-2.32v2.32a.46.46 0 0 1-.93 0v-2.32h-2.32a.46.46 0 1 1 0-.93h2.32v-2.32zm-9.74 2.78a.93.93 0 0 0-.93.93V74.9l5.29-4.06c.16-.13.4-.13.56 0l5.29 4.06v-6.94a.46.46 0 0 1 .92 0v7.89a.46.46 0 0 1-.74.36l-5.75-4.42-5.75 4.42a.46.46 0 0 1-.75-.36V62.38c0-1.02.84-1.85 1.86-1.85h3.71a.46.46 0 1 1 0 .92h-3.71z"
                  ></path>
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M73.05 58.67a.46.46 0 0 1 .93 0V61h2.32a.46.46 0 1 1 0 .93h-2.32v2.32a.46.46 0 0 1-.93 0v-2.32h-2.32a.46.46 0 1 1 0-.93h2.32v-2.32zm-9.74 2.78a.93.93 0 0 0-.93.93V74.9l5.29-4.06c.16-.13.4-.13.56 0l5.29 4.06v-6.94a.46.46 0 0 1 .92 0v7.89a.46.46 0 0 1-.74.36l-5.75-4.42-5.75 4.42a.46.46 0 0 1-.75-.36V62.38c0-1.02.84-1.85 1.86-1.85h3.71a.46.46 0 1 1 0 .92h-3.71z"
                  fill="#0F730C"
                ></path>
                <path
                  d="M73.98 60.99h-1v1h1v-1zm0 .93v-1h-1v1h1zm-.93 0h1v-1h-1v1zm0-.93v1h1v-1h-1zm-10.67 13.9h-1v2.04L63 75.69l-.6-.8zm5.29-4.06l.6.8-.6-.8zm.56 0l-.6.8.6-.8zm5.29 4.06l-.61.8 1.6 1.24v-2.04h-1zm.67 1.36l-.45-.9.45.9zm-.5-.05l.62-.79-.61.8zm-5.74-4.42l.6-.79-.6-.47-.61.47.61.8zM62.2 76.2l-.6-.79.6.8zm-.49.05l.45-.9-.45.9zm11.8-19.04c-.8 0-1.46.65-1.46 1.46h2c0 .3-.24.54-.53.54v-2zm1.47 1.46c0-.8-.65-1.46-1.46-1.46v2a.54.54 0 0 1-.54-.54h2zm0 2.32v-2.32h-2V61h2zm-1 1h2.32v-2h-2.32v2zm2.32 0a.54.54 0 0 1-.54-.54h2c0-.8-.65-1.46-1.46-1.46v2zm-.54-.54c0-.3.24-.53.54-.53v2c.8 0 1.46-.66 1.46-1.47h-2zm.54-.53h-2.32v2h2.32v-2zm-1.32 3.32v-2.32h-2v2.32h2zm-1.46 1.46c.8 0 1.46-.65 1.46-1.46h-2c0-.3.24-.54.54-.54v2zm-1.47-1.46c0 .8.66 1.46 1.47 1.46v-2c.3 0 .53.24.53.54h-2zm0-2.32v2.32h2v-2.32h-2zm1-1h-2.32v2h2.32v-2zm-2.32 0c.3 0 .54.24.54.53h-2c0 .81.65 1.47 1.46 1.47v-2zm.54.53c0 .3-.24.54-.54.54v-2c-.8 0-1.46.66-1.46 1.46h2zm-.54.54h2.32v-2h-2.32v2zm1.32-3.32V61h2v-2.32h-2zm-8.67 3.71c0 .04-.03.07-.07.07v-2c-1.06 0-1.93.87-1.93 1.93h2zm0 12.51V62.4h-2v12.5h2zm3.68-4.85l-5.29 4.06L63 75.7l5.29-4.07-1.22-1.58zm1.78 0c-.52-.4-1.26-.4-1.78 0l1.22 1.58a.54.54 0 0 1-.66 0l1.22-1.58zm5.29 4.06l-5.29-4.06-1.22 1.58 5.29 4.07 1.22-1.59zm-1.61-6.15v6.94h2v-6.94h-2zm1.46-1.46c-.8 0-1.46.65-1.46 1.46h2c0 .3-.24.54-.54.54v-2zm1.46 1.46c0-.8-.65-1.46-1.46-1.46v2a.54.54 0 0 1-.54-.54h2zm0 7.89v-7.89h-2v7.89h2zm-.81 1.31c.5-.25.81-.76.81-1.31h-2c0-.2.12-.4.3-.48l.89 1.79zM73.09 77c.44.34 1.04.4 1.54.15l-.89-1.8c.19-.08.4-.06.57.06L73.09 77zm-5.75-4.42L73.09 77l1.22-1.59L68.56 71l-1.22 1.59zM62.81 77l5.75-4.42-1.22-1.59-5.75 4.42L62.81 77zm-1.54.15c.5.25 1.1.19 1.54-.15L61.6 75.4a.54.54 0 0 1 .57-.05l-.89 1.79zm-.82-1.31c0 .55.32 1.06.82 1.31l.89-1.8c.18.1.3.28.3.49h-2zm0-13.46v13.46h2V62.38h-2zm2.86-2.85a2.86 2.86 0 0 0-2.86 2.85h2c0-.47.39-.85.86-.85v-2zm3.71 0h-3.71v2h3.71v-2zm1.47 1.46c0-.8-.66-1.46-1.47-1.46v2a.54.54 0 0 1-.53-.54h2zm-1.47 1.46c.81 0 1.47-.65 1.47-1.46h-2c0-.3.24-.54.53-.54v2zm-3.71 0h3.71v-2h-3.71v2z"
                  fill="#0F730C"
                  mask="url(#bookmark-cta-mobile_svg__a)"
                ></path>
              </svg>
            </div>
          </div>

          <div className={`${module.lists_card}`}>
            <div className={`${module.title}`}>
              <h4>Reading List</h4>
              <span>
                5 stories <BsFillLockFill fill="grey" />
              </span>
            </div>
            <div className={`${module.prvImages}`}>
              <img
                src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                alt=""
              />
              <img
                className={`${module.smImg}`}
                src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80z"
                alt=""
              />
              <img
                className={`${module.smImg}`}
                src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80z"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={`${module.right}`}>
          <div className={module.picks}>
            <h5>Staff Picks</h5>
            <div className={module.pick}>
              <h6>
                {" "}
                <span>
                  <img
                    src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt=""
                  />
                </span>{" "}
                Molly Ruby in Towards Data Science
              </h6>
              <h5>
                How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk
                fg
              </h5>
            </div>
            <div className={module.pick}>
              <h6>
                {" "}
                <span>
                  <img
                    src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt=""
                  />
                </span>{" "}
                Molly Ruby in Towards Data Science
              </h6>
              <h5>
                How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk
                fg
              </h5>
            </div>
            <div className={module.pick}>
              <h6>
                {" "}
                <span>
                  <img
                    src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt=""
                  />
                </span>{" "}
                Molly Ruby in Towards Data Science
              </h6>
              <h5>
                How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk
                fg
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
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="7vw"
                  inRound="Data Science"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="7vw"
                  inRound="Technology"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="9vw"
                  inRound="Self Improvement"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="7vw"
                  inRound="Writing"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="8vw"
                  inRound="Relationships"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="10vw"
                  inRound="Machine Learning"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="7vw"
                  inRound="Productivity"
                  color="grey"
                  border="1px solid #cecece"
                />
                <Roundedbtn
                  borderRadius="2px"
                  bgColor="white"
                  width="7vw"
                  inRound="Politics"
                  color="grey"
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
            <div className={module.rec_card}>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
              <div className="desc">
                <h4>Alvin One</h4>
                <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
              </div>
              <button className={`${module.new_list_btn} ${module.follow_btn}`}>
                follow
              </button>
            </div>
            <div className={module.rec_card}>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
              <div className="desc">
                <h4>Alvin One</h4>
                <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
              </div>
              <button className={`${module.new_list_btn} ${module.follow_btn}`}>
                follow
              </button>
            </div>
            <div className={module.rec_card}>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
              <div className="desc">
                <h4>Alvin One</h4>
                <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
              </div>
              <button className={`${module.new_list_btn} ${module.follow_btn}`}>
                follow
              </button>
            </div>
            <div className={module.rec_card}>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
              <div className="desc">
                <h4>Alvin One</h4>
                <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
              </div>
              <button className={`${module.new_list_btn} ${module.follow_btn}`}>
                follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
