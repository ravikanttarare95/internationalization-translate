import langMessages from "./lang.json";

const I18n = (lang, message) => {
  return langMessages[lang][message];
};
export default I18n;
