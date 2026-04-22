import "./Main.css";
import mainPhoto from "../../images/bakedphoto.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUniteContext";

function Main({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const tempValue = weatherData?.temp?.[currentTemperatureUnit];
  const humidityValue = weatherData?.humidity;
  const cityName = weatherData?.city || "Surprise";

  return (
    <>
      <section className="main__content">
        <h1 className="main__title">rise & hydrate</h1>
        <div className="main__weather-info">
          {weatherData.isApiFailed ? (
            <p className="main__weather-text">
              Hello Baker, we couldn't locate your environment, but we are still
              able to assist you. Please continue on to recipes to manually add
              the environmental variables.
            </p>
          ) : tempValue !== undefined && tempValue !== 0 ? (
            <p className="main__weather-text">
              Hello Baker! Today in {cityName} it is {tempValue}&deg;
              {currentTemperatureUnit}, and humidity is {humidityValue}%.
            </p>
          ) : (
            <p className="main__weather-text">
              Detecting your local baking conditions...
            </p>
          )}
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
            We are your personal smart baking assistant for your sourdough to
            help you master the recipe you are needing to bake.
          </h2>
        </div>
        <Link to="/recipes" className="receipe__button">
          LET'S BAKE!
        </Link>
      </section>
    </>
  );
}

export default Main;
