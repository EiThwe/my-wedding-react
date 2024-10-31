"use client";

import config from "@/app/config";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type PropsType = {
  children: React.ReactNode;
};

const RecaptchaProvider = ({ children }: PropsType) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={config.RECAPTCHA_SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaProvider;
