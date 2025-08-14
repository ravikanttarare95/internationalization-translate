import I18n from "./../utils/I18n";
import MessageComponent from "./../components/MessageComponent";
import { Github, Globe } from "lucide-react";

function Home() {
  const ageCount = 24;
  const lang = localStorage.getItem("lang");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-emerald-100 flex flex-col items-center px-5">
      <div className="mb-6 sm:mb-8 fixed top-2 right-2 z-20 flex items-center gap-2">
        <label
          htmlFor="select-lang"
          className="text-base sm:text-lg font-semibold text-emerald-500 mb-2"
        >
          <Globe className="mt-2 w-8 md:w-10 h-8 md:h-10" />
        </label>
        <select
          name="select-lang"
          id="select-lang"
          defaultValue={lang}
          onChange={(e) => {
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
          }}
          className="w-full border-2 border-emerald-500 rounded-xl px-1 sm:px-2 py-1 bg-white/80 text-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all shadow-inner font-medium text-base sm:text-lg"
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl w-full max-w-[600px] p-5 sm:p-7 md:p-9 border border-white/40 transition-all duration-300 hover:shadow-blue-200 mb-18 mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-sky-500 to-emerald-600 bg-clip-text text-transparent mb-6 sm:mb-8 drop-shadow-lg">
          Internationalization (I18n)
        </h1>

        <div className="space-y-3 sm:space-y-4">
          <MessageComponent messageFuncCall={I18n("greetingMessage")} />
          <MessageComponent messageFuncCall={I18n("nameMessage")} />
          <MessageComponent messageFuncCall={I18n("ageMessage", ageCount)} />
          <MessageComponent messageFuncCall={I18n("cityMessage")} />
          <MessageComponent messageFuncCall={I18n("learningMessage")} />
        </div>
      </div>
      <footer className="mt-6 sm:mt-10 bg-gradient-to-r from-emerald-600 via-sky-600 to-blue-700 w-full text-white text-center py-3 sm:py-4 shadow-xl z-10 fixed bottom-0 left-0">
        <a
          href="https://github.com/ravikanttarare95/localisation.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200 px-2"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6" />

          <span className="text-base sm:text-lg font-semibold tracking-wide">
            Check the Repository
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
// export default Home;
