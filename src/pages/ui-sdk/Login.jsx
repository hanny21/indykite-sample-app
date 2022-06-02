import { useCallback, useEffect } from "react";
import { IKUICore } from "@indykiteone/jarvis-sdk-web";

const Login = () => {
  const onSuccess = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    IKUICore.render({
      renderElementSelector: ".login-container",
      onSuccessLogin: onSuccess,
      redirectUri: "/callback",
      forgotPasswordPath: "/forgot",
      labels: {},
    });
  });
  return <div className="login-container" />;
};

export default Login;
