import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Resources from "../Resources/Resources";
import RecipeForm from "../RecipeForm/RecipeForm";

import { useWeather } from "../../hooks/useWeather";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const weatherData = useWeather();

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
                    temperature={
                      weatherData?.temp?.[currentTemperatureUnit] || 0
                    }
                    humidity={weatherData?.humidity || 0}
                  />
                </section>
              }
            />

            <Route path="/resources" element={<Resources />} />

            <Route path="/about" element={<Navigate to="/#about" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
