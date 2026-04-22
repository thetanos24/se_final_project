import { useState, useContext, useEffect } from "react";
import "./RecipeForm.css";
import RecipeCards from "../RecipeCards/RecipeCards";
import RecipeModal from "../RecipeModal/RecipeModal";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { RECIPE_VARIATIONS } from "../../utils/constants";
import { useBakeCalculator } from "../../hooks/useBakeCalculator";

function RecipeForm({ temperature, humidity }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const [localTemp, setLocalTemp] = useState(temperature || "");
  const [localHumidity, setLocalHumidity] = useState(humidity || "");

  const { adjustedWater } = useBakeCalculator(localHumidity, 70);

  useEffect(() => {
    if (temperature) setLocalTemp(temperature);
    if (humidity) setLocalHumidity(humidity);
  }, [temperature, humidity]);

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRecipe(true);
    }, 3000);
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
            <h2 className="recipe-form__title">your baking plan</h2>

            <div className="recipe-results__card">
              <ul className="recipe-results__list">
                <li>
                  <strong>Bread Flour:</strong> 500g
                </li>
                <li>
                  <strong>Water:</strong> {adjustedWater}g
                  <span className="recipe-results__note">
                    (70% hydration +{" "}
                    {Number(localHumidity) < 25
                      ? "arid adjustment"
                      : "standard"}
                    )
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

            <h3 className="recipe-list__title">choose your style</h3>
            <div className="recipe-grid">
              {RECIPE_VARIATIONS.map((recipe) => (
                <RecipeCards
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={setSelectedRecipe}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowRecipe(false)}
              className="about__button"
              style={{ marginTop: "40px" }}
            >
              RESET BAKE
            </button>
          </div>
        ) : (
          <form className="recipe-form" onSubmit={handleGenerate}>
            <h2 className="recipe-form__title">ready to bake?</h2>
            <p className="recipe-form__subtitle">
              We've detected your environment, but feel free to adjust these
              manually.
            </p>

            <div className="recipe-stats-display">
              <div className="recipe-stat">
                <label className="recipe-stat__label" htmlFor="temp-select">
                  KITCHEN TEMP
                </label>
                <select
                  id="temp-select"
                  className="recipe-stat__input"
                  value={localTemp}
                  onChange={(e) => setLocalTemp(e.target.value)}
                >
                  <option value="">Select Range</option>
                  {temperature && (
                    <option value={temperature}>
                      {temperature}°{currentTemperatureUnit} (Current Local)
                    </option>
                  )}
                  <option value={currentTemperatureUnit === "F" ? "65" : "18"}>
                    Cold (Below{" "}
                    {currentTemperatureUnit === "F" ? "68°F" : "20°C"})
                  </option>
                  <option value={currentTemperatureUnit === "F" ? "72" : "22"}>
                    Ideal (
                    {currentTemperatureUnit === "F"
                      ? "68°F - 75°F"
                      : "20°C - 24°C"}
                    )
                  </option>
                  <option value={currentTemperatureUnit === "F" ? "80" : "27"}>
                    Warm (Above{" "}
                    {currentTemperatureUnit === "F" ? "75°F" : "24°C"})
                  </option>
                </select>
              </div>

              <div className="recipe-stat">
                <label className="recipe-stat__label" htmlFor="humidity-select">
                  KITCHEN FEELS
                </label>
                <select
                  id="humidity-select"
                  className="recipe-stat__input"
                  value={localHumidity}
                  onChange={(e) => setLocalHumidity(e.target.value)}
                >
                  <option value="">Select RH Range</option>
                  {humidity && (
                    <option value={humidity}>
                      {humidity}% (Current Local)
                    </option>
                  )}
                  <option value="15">Dry (Below 30%)</option>
                  <option value="40">Perfect (30% - 60%)</option>
                  <option value="70">Humid (Above 60%)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="recipe__button"
              disabled={!localTemp || !localHumidity}
            >
              SHOW ME MY PLAN!
            </button>
          </form>
        )}
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        water={adjustedWater}
        temp={localTemp}
      />
    </div>
  );
}

export default RecipeForm;
