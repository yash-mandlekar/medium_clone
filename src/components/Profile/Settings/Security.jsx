import React from "react";
import { TbLink } from "react-icons/tb";
import module from "./Settings.module.css";

const Security = () => {
  return (
    <>
      <div className={module.col1}>
        <div className="desc">
          <h5>Signout of other sessions</h5>
          <h5>Sign out of sessions in other browsers or on other computers.</h5>
        </div>
      </div>

      <div className={module.col1}>
        <div className="desc">
          <h5>Signout of other sessions</h5>
          <h5>Sign out of sessions in other browsers or on other computers.</h5>
        </div>
      </div>

      <div className={module.col1}>
        <div className="desc">
          <h5>Download your information</h5>
          <h5>
            Download a copy of the information you’ve shared on Medium to a .zip
            file.
          </h5>
        </div>
      </div>

      <hr />

      <div className={module.col1}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        />
        <div className="desc">
          <h5>Connect Facebook</h5>
          <h6>
            We will never post to Facebook or message your friends without your
            permission.
          </h6>
        </div>
        <h5>
          <TbLink />
        </h5>
      </div>

      <div className={module.col1}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          alt=""
        />
        <div className="desc">
          <h5>Connect Twitter</h5>
          <h6>
            We will never post to Twitter or message your followers without your
            permission.
          </h6>
        </div>
        <h5>
          <TbLink />
        </h5>
      </div>
      <div className={module.col1}>
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        <div className="desc">
          <h5>Connect Twitter</h5>
          <h6>
            We will never post to Twitter or message your followers without your
            permission.
          </h6>
        </div>
        <h5>
          <TbLink />
        </h5>
      </div>
      <hr />
      <h5>Integration tokens</h5>
    </>
  );
};

export default Security;
