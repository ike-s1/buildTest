import React  from "react";
import "./SignInModal.scss";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";

import closeIcon from "../../../resources/icons/icon-cancel.svg";
import { CustomInput } from "../../Shared/CustomInput/CustomInput";
import { GoogleLogin } from "@react-oauth/google";

export const SignInModal = ({ visible, handleClose }) => {
  return (
      <div className="signIn-modal">
        <h2 className="signIn-modal-title"> Log in</h2>
        <div className="google-btn signIn">
          <GoogleLogin
            onSuccess={null}
            onFailure={null}
            size="large"
          />
        </div>
        <div className="signIn-modal-form">
          <p>Email address</p>
          <CustomInput placeholder={"Your email address"} />
          <p>Your Password</p>
          <CustomInput placeholder={"Your password"} />
        </div>
        <CustomButton> Sign in </CustomButton>
        <div className="singIn-links">
        <p>Send a magic link email</p>
        <p>Forgot your password?</p>
        <p>Don’t have an account? Sign up</p>
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
