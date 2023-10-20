export const CV_URL =
  "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030578/personal-website/cv.jpg";

export const PROFILE_PICTURE_URL =
  "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030269/personal-website/profileImage.webp";

export const BLOG_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://andreavindra.vercel.app/api/blog"
    : "http://localhost:3000/api/blog";

export const PAGESPEED_CATEGORIES =
  "&category=accessibility&category=performance&category=best-practices&category=seo";
