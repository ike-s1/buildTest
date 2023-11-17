import React, { useState } from "react";
import "./SignUpModal.scss";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";
import closeIcon from "../../../resources/icons/icon-cancel.svg";
import { CustomInput } from "../../Shared/CustomInput/CustomInput";
import { GoogleLogin } from "@react-oauth/google";

export const SignUpModal  = ({ visible, handleClose }) => {

  return (
      <div className="signUp-modal">
        <h2 className="signUp-modal-title"> Log in</h2>
        <div className="google-btn signIn">
            <GoogleLogin
            onSuccess={null}
            onFailure={null}
            size="large"
          />
        </div>
        <div className="signUp-modal-form">
          <p>Email address</p>
          <CustomInput placeholder={"Your email address"} />
          <p>Create Password</p>
          <CustomInput placeholder={"Create Password"} />
        </div>
        <CustomButton> Sign up </CustomButton>
        <div className="singUp-links">
        <p>Already have an account? Sign in</p>
        <div>Check your email for the confirmation link</div>
        </div>
        <img
          src={closeIcon}
          onClick={handleClose}
          className="close-icon" 
          alt="closeIcon"
        />
      </div>
  );
};
