import React from "react";
import module from "./Settings.module.css";
import { TbLink } from "react-icons/tb";
const Settings = () => {
  return (
    <>
      <div className={module.many_cols}>
      <div className={module.col1}>
        <h5>Email Address</h5>
        <h6>zKing2842@gmail.com</h6>
      </div>
      <div className={module.col1}>
        <h5>Username and subdomain</h5>
        <h6>@zking2842</h6>
      </div>

      <div className={module.col1}>
        <div className="desc">
          <h5>Profile information</h5>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </div>
        <h5>
          Zking{" "}
          <img
            src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
        </h5>
      </div>

      <div className={module.col1}>
        <div className="desc">
          <h5>Profile design</h5>
          <h6>
            Pick colors and fonts, style the header, and make your profile
            unique.
          </h6>
        </div>
        <h5>
          <TbLink />
        </h5>
      </div>

      <div className={module.col1}>
        <div className="desc">
          <h5>Custom domain</h5>
          <h6>
            Upgrade to a Medium Membership to redirect your profile URL to a
            domain like yourdomain.com.
          </h6>
        </div>
        <h5>
          {" "}
          None
          <TbLink />
        </h5>
      </div>
      <hr />

      <div className={module.col1}>
        <div className="desc">
          <h5>Deactivate account</h5>
          <h5>
            Deactivating will suspend your account until you sign back in.
          </h5>
        </div>
      </div>
      <div className={module.col1}>
        <div className="desc">
          <h5>Delete account</h5>
          <h5>Permanently delete your account and all of your content.</h5>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Settings;
