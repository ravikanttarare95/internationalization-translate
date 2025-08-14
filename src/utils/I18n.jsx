import langMessages from "./lang.json";

const I18n = (message) => {
  let lang = localStorage.getItem("lang") || "en";
  
  return langMessages[lang][message];
};
export default I18n;
