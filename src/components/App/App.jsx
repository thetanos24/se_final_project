import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import RecipeForm from "../RecipeForm/RecipeForm";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUniteContext";

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
            <Route path="/" element={<Main weatherData={weatherData} />} />

            <Route
              path="/recipes"
              element={
                <section className="recipes">
                  <RecipeForm
                    temperature={weatherData.temp[currentTemperatureUnit]}
                    humidity={weatherData.humidity}
                  />
                </section>
              }
            />

            <Route
              path="/contact"
              element={
                <section className="contact">
                  <h2>R&H 101</h2>
                </section>
              }
            />

            <Route path="/about" element={<Navigate to="/#about" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
