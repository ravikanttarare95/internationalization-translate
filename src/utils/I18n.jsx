import langMessages from "./lang.json";

const I18n = (message, ageCount) => {
  let lang = localStorage.getItem("lang") || "en";

  if (ageCount) {
    return langMessages[lang][message].replace("<ageCount>", ageCount);
  }
  return langMessages[lang][message];
};
export default I18n;
