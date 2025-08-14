import I18n from "./../utils/I18n";
import MessageComponent from "./../components/MessageComponent";

function Home() {
  const ageCount = 24;
  const lang = localStorage.getItem("lang");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-emerald-50 flex items-baseline justify-center pt-10 p-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-700 via-sky-500 to-emerald-600 bg-clip-text text-transparent mb-6">
          🌍 Internationalization (I18n)
        </h1>

        <div className="mb-6">
          <label
            htmlFor="select-lang"
            className="block text-lg font-medium text-blue-700 mb-2"
          >
            Choose Your Language:
          </label>
          <select
            name="select-lang"
            id="select-lang"
            defaultValue={lang}
            onChange={(e) => {
              localStorage.setItem("lang", e.target.value);
              window.location.reload();
            }}
            className="w-full border border-emerald-300 rounded-lg px-4 py-2 bg-emerald-50 text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="en">English</option>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        <div className="space-y-3">
          <MessageComponent messageFuncCall={I18n("greetingMessage")} />
          <MessageComponent messageFuncCall={I18n("nameMessage")} />
          <MessageComponent messageFuncCall={I18n("ageMessage", ageCount)} />
          <MessageComponent messageFuncCall={I18n("cityMessage")} />
          <MessageComponent messageFuncCall={I18n("learningMessage")} />
        </div>
      </div>
    </div>
  );
}

export default Home;
