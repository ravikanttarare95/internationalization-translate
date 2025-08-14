import I18n from "./../utils/I18n";

function Home() {
  return (
    <>
      <h1>{I18n("greetingMessage")}</h1>
      <h2>{I18n("nameMessage")}</h2>
      <h3>{I18n("ageMessage")}</h3>
      <h4>{I18n("cityMessage")}</h4>
      <h5>{I18n("learningMessage")}</h5>

      <label htmlFor="select-lang">Choose Your Language: </label>
      <select name="select-lang" id="select-lang">
        <option value="en" selected>
          English
        </option>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
      </select>
    </>
  );
}

export default Home;
