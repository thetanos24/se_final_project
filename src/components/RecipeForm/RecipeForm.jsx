import { useState, useContext, useEffect } from "react";
import "./RecipeForm.css";
import RecipeCards from "../RecipeCards/RecipeCards";
import RecipeModal from "../RecipeModal/RecipeModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUniteContext";

import { RECIPE_VARIATIONS } from "../../utils/constants/constants";

function RecipeForm({ temperature, humidity }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const [localTemp, setLocalTemp] = useState(temperature);
  const [localHumidity, setLocalHumidity] = useState(humidity);

  useEffect(() => {
    setLocalTemp(temperature);
    setLocalHumidity(humidity);
  }, [temperature, humidity]);

  const FIXED_HYDRATION = 70;

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRecipe(true);
    }, 3000);
  };

  const getAdjustedWater = () => {
    const baseWater = (500 * FIXED_HYDRATION) / 100;
    return localHumidity < 25 ? baseWater + 15 : baseWater;
  };

  return (
    <div className="recipe-page">
      <div className="recipe-form__container">
        {isLoading ? (
          <div className="loader-container">
            <div className="dough-ball"></div>
            <p className="loader-text">Analyzing local conditions...</p>
          </div>
        ) : showRecipe ? (
          <div className="recipe-results">
            <h2 className="recipe-form__title">Your Personal Bake Plan</h2>

            <div className="recipe-results__card">
              <ul className="recipe-results__list">
                <li>
                  <strong>Bread Flour:</strong> 500g
                </li>
                <li>
                  <strong>Water:</strong> {getAdjustedWater()}g
                  <span className="recipe-results__note">
                    ({FIXED_HYDRATION}% hydration +{" "}
                    {localHumidity < 25 ? "arid adjustment" : "standard"})
                  </span>
                </li>
                <li>
                  <strong>Sourdough Starter:</strong> 100g
                </li>
                <li>
                  <strong>Salt:</strong> 10g
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowRecipe(false)}
              className="about__button"
              style={{ marginTop: "40px" }}
            >
              RESET BAKE
            </button>

            <h3 className="recipe-list__title">Choose Your Style</h3>
            <div className="recipe-grid">
              {RECIPE_VARIATIONS.map((recipe) => (
                <RecipeCards
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={setSelectedRecipe}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <h2 className="recipe-form__title">Ready to Bake?</h2>
            <p className="recipe-form__subtitle">
              We've detected Surprise's environment. Adjust if your kitchen is
              running cooler or more humid today.
            </p>

            <div className="recipe-stats-display">
              <div className="recipe-stat">
                <span className="recipe-stat__label">
                  TEMP (°{currentTemperatureUnit})
                </span>
                <input
                  type="number"
                  className="recipe-stat__input"
                  value={localTemp}
                  onChange={(e) => setLocalTemp(e.target.value)}
                />
              </div>
              <div className="recipe-stat">
                <span className="recipe-stat__label">HUMIDITY (%)</span>
                <input
                  type="number"
                  className="recipe-stat__input"
                  value={localHumidity}
                  onChange={(e) => setLocalHumidity(e.target.value)}
                />
              </div>
            </div>

            <button onClick={handleGenerate} className="receipe__button">
              GENERATE CALCULATION
            </button>
          </>
        )}
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        water={getAdjustedWater()}
        temp={localTemp}
      />
    </div>
  );
}

export default RecipeForm;
