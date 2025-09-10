import axios from "axios";

const API = axios.create({
  //baseURL: "http://localhost:5001/api/",
  baseURL: "https://ai-image-generator-t6kp.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage/", data);