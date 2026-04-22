import "./Main.css";
import mainPhoto from "../../images/bakedphoto.jpeg";
import starterPhoto from "../../images/sourdough-starter.jpg";
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
            We are the first smart assistant built for the Arid Baker, helping
            you master sourdough hydration in any climate.
          </h2>
        </div>
      </section>

      <section className="starter">
        <div className="starter__container">
          <p className="starter__label">TO START</p>
          <img
            src={starterPhoto}
            alt="Active sourdough starter"
            className="starter__image"
          />
          <h2 className="starter__title">
            You will need your active sourdough starter.
          </h2>

          <Link to="/recipes" className="receipe__button">
            LET'S BAKE!
          </Link>
        </div>
      </section>
    </>
  );
}

export default Main;
