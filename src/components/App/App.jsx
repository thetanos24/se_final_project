import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUniteContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import mainPhoto from "../../images/bakedphoto.jpeg";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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
      <BrowserRouter>
        <div className="page">
          <Header />

          <main className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <section className="main__content">
                    <h1 className="main__title">rise & hydrate</h1>
                    <div className="main__weather-info">
                      <p className="main__weather-text">
                        Today in {weatherData.city} it is{" "}
                        {weatherData.temp[currentTemperatureUnit]}&deg;
                        {currentTemperatureUnit}, and humidity is{" "}
                        {weatherData.humidity}%. Let's bake!
                      </p>
                    </div>
                    <img
                      src={mainPhoto}
                      alt="Freshly baked loaves"
                      className="main__image"
                    />
                  </section>
                }
              />

              {/* Route 2: Gallery (Required second route) */}
              <Route
                path="/gallery"
                element={
                  <section className="gallery">
                    <h2 className="gallery__title">Gallery</h2>
                    {/* Gallery content will go here in the future */}
                  </section>
                }
              />

              {/* Additional Routes matching your Header links */}
              <Route
                path="/about"
                element={
                  <section className="about">
                    <h2>About Us</h2>
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
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
