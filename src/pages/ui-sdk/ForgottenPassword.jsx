import { useEffect } from "react";
import { IKUICore } from "@indykiteone/jarvis-sdk-web";

const ForgottenPassword = () => {
  useEffect(() => {
    IKUICore.renderForgotPasswordForm({
      renderElementSelector: "#forgotten-password-container",
      labels: {},
    });
  });
  return <div id="forgotten-password-container" />;
};

export default ForgottenPassword;
