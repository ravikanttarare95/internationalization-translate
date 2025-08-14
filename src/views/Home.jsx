import I18n from "./../utils/I18n";

function Home() {
  const ageCount = 24;
  return (
    <>
      <h1>Internationalization (i18n)</h1>
      <label htmlFor="select-lang">Choose Your Language: </label>
      <select
        name="select-lang"
        id="select-lang"
        defaultValue={localStorage.getItem("lang")} /////////IMPORTANT
        onChange={(e) => {
          localStorage.setItem("lang", e.target.value);
          window.location.reload();
        }}
      >
        <option value="en">English</option>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
      </select>

      <p>{I18n("greetingMessage")}</p>
      <p>{I18n("nameMessage")}</p>
      <p>{I18n("ageMessage", ageCount)}</p>
      <p>{I18n("cityMessage")}</p>
      <p>{I18n("learningMessage")}</p>
    </>
  );
}

export default Home;
