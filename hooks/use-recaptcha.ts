// hooks/useReCaptcha.js
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useReCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const verifyRecaptcha = async () => {
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      return;
    }
    const token = await executeRecaptcha("register_click");
    return token;
  };

  return { verifyRecaptcha };
};

export default useReCaptcha;
