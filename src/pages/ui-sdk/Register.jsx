import { useCallback, useEffect } from "react";
import { IKUICore } from "@indykiteone/jarvis-sdk-web";

const Register = () => {
  const onSuccess = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    IKUICore.render({
      arguments: {
        flow: "register",
      },
      renderElementSelector: ".register-container",
      onSuccessRegistration: onSuccess,
      redirectUri: "/callback",
      labels: {},
    });
  });

  return <div className="register-container" />;
};

export default Register;
