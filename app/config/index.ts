const config = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api/",
  ENCRYPTION_KEY: process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "",
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
};

export default config;
