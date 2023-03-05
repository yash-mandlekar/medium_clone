import React from "react";
import module from "../Components/Profile/Settings/Settings.module.css";
import { TbLink } from "react-icons/tb";
import { Outlet } from "react-router-dom";
const Settings = () => {
  return (
    <>
      <div className={module.wrap}>
        <div className={module.left}>
          <h1>Settings</h1>
          <div className={`${module.small_nav}`}>
            <div className={`${module.row}`}>
              <h4>Account</h4>
              <h4>Publishing</h4>
              <h4>Notifications</h4>
              <h4>Membership and payment</h4>
              <h4>Security and apps</h4>
            </div>
          </div>

          {/* index option */}
          <div className={module.many_cols}>
            <Outlet />
          </div>
        </div>
        <div className={module.right}>
          <h4>Suggested help articles</h4>
          <h6>Sign in or sign up to Medium</h6>
          <h6>Your profile page</h6>
          <h6>Writing and publishing your first story</h6>
          <h6>About Medium's distribution system</h6>
          <h6>Get started with the Partner Program</h6>
        </div>
      </div>
    </>
  );
};

export default Settings;
