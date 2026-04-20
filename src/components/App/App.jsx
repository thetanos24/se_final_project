import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUniteContext";
import Header from "../Header/Header";
import mainPhoto from "../../images/bakedphoto.jpeg";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const weatherData = {
    city: "Surprise",
    temp: { F: 72, C: 22 },
    humidity: 45,
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <Header />

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="main__content">
                    <h1 className="main__title">rise & hydrate</h1>
                    <div className="main__weather-info">
                      <p className="main__weather-text">
                        Hello Baker! Today in {weatherData.city} it is{" "}
                        {weatherData.temp[currentTemperatureUnit]}&deg;
                        {currentTemperatureUnit}, and humidity is{" "}
                        {weatherData.humidity}%.
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
                    <h2 className="about__title">
                      We are your personal smart baking assistant and we are
                      here to help you to master the recipe you are needing to
                      bake.
                    </h2>
                    <Link to="/recipes" className="receipe__button">
                      LET'S BAKE
                    </Link>
                  </section>
                </>
              }
            />

            <Route
              path="/recipes"
              element={
                <section className="recipes">
                  <h2>Recipes</h2>
                </section>
              }
            />

            <Route
              path="/contact"
              element={
                <section className="contact">
                  <h2>Contact</h2>
                </section>
              }
            />

            <Route path="/about" element={<Navigate to="/#about" replace />} />
          </Routes>
        </main>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
