export const serviceApi: string =
  `${process.env.REACT_APP_API_URL}` || "http://localhost:3003";

export const Messages = {
  error1: "Something went wrong. Please try again later.",
  error2: "Please login first",
  error3: "Please fulfill all required inputs",
  error4: "Message is empty!",
  errors5: "Only images with .jpg, .jpeg, .png, format allowed.",
};
