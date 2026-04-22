import "./Main.css";
import mainPhoto from "../../images/bakedphoto.jpeg";
import starterPhoto from "../../images/sourdough-starter.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const tempValue = weatherData?.temp?.[currentTemperatureUnit];
  const humidityValue = weatherData?.humidity;
  const cityName = weatherData?.city || "Surprise";

  return (
    <main className="main">
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
          alt="Freshly baked sourdough loaves"
          className="main__image"
        />
      </section>

      <section className="about" id="about">
        <p className="about__label">WHO WE ARE</p>
        <div className="about__text-container">
          <p className="about__description">
            We are the first smart assistant built for the Arid Baker, helping
            you master sourdough hydration in any climate.
          </p>
        </div>
      </section>

      <section className="starter">
        <div className="starter__container">
          <p className="starter__label">TO START</p>
          <img
            src={starterPhoto}
            alt="Active bubbly sourdough starter in a jar"
            className="starter__image"
          />
          <p className="starter__description">
            You will need your active sourdough starter.
          </p>

          <Link to="/recipes" className="recipe__button">
            LET'S BAKE!
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Main;
