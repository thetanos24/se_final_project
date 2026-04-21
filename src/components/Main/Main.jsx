import "./Main.css";
import mainPhoto from "../../images/bakedphoto.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUniteContext";

function Main({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <>
      <section className="main__content">
        <h1 className="main__title">rise & hydrate</h1>
        <div className="main__weather-info">
          <p className="main__weather-text">
            Hello Baker! Today in {weatherData.city} it is{" "}
            {weatherData.temp[currentTemperatureUnit]}&deg;
            {currentTemperatureUnit}, and humidity is {weatherData.humidity}%.
          </p>
        </div>
        <img
          src={mainPhoto}
          alt="Freshly baked loaves"
          className="main__image"
        />
      </section>

      <section className="about" id="about">
        <p className="about__label">WHO WE ARE</p>
        <div className="about__text-container">
          <h2 className="about__text">
            We are your personal smart baking assistant and we are here to help
            you to master the recipe you are needing to bake.
          </h2>
        </div>
        <Link to="/recipes" className="receipe__button">
          LET'S BAKE
        </Link>
      </section>
    </>
  );
}

export default Main;
