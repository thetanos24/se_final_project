import { useContext, useEffect } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./RecipeModal.css";

function RecipeModal({ recipe, onClose, water, temp }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  if (!recipe) return null;

  const getTempStatus = () => {
    const t = Number(temp);
    const isF = currentTemperatureUnit === "F";

    if (isF) {
      if (t < 68)
        return {
          label: "Cold",
          tip: "Cooler temps slow things down; stay patient and expect a longer rise.",
        };
      if (t <= 75)
        return {
          label: "Ideal",
          tip: "Your kitchen is in the sourdough 'sweet spot'! Fermentation should be steady.",
        };
      return {
        label: "Hot",
        tip: "High heat speeds up fermentation; check your dough early to avoid over-proofing.",
      };
    } else {
      if (t < 20)
        return {
          label: "Cold",
          tip: "Cooler temps slow things down; stay patient and expect a longer rise.",
        };
      if (t <= 24)
        return {
          label: "Ideal",
          tip: "Your kitchen is in the sourdough 'sweet spot'! Fermentation should be steady.",
        };
      return {
        label: "Hot",
        tip: "High heat speeds up fermentation; check your dough early to avoid over-proofing.",
      };
    }
  };

  const status = getTempStatus();

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} type="button">
          &times;
        </button>

        <img src={recipe.image} alt={recipe.name} className="modal__image" />

        <div className="modal__content">
          <h2 className="modal__title">{recipe.name}</h2>
          <p className="modal__description">{recipe.description}</p>

          <div className="modal__section">
            <h3 className="modal__subtitle">Ingredients:</h3>
            <ul className="modal__list">
              <li className="modal__list-item modal__list-item--highlight">
                <strong>Water:</strong> {water}g (Adjusted for your environment)
              </li>
              {recipe.ingredients?.map((item, index) => (
                <li key={index} className="modal__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__section">
            <h3 className="modal__subtitle">Preparation:</h3>
            <ol className="modal__instruction-list">
              {recipe.instructions?.map((step, index) => (
                <li key={index} className="modal__instruction-step">
                  {step
                    .replace("{water}", water)
                    .replace("{temp}", `${temp}°${currentTemperatureUnit}`)}
                </li>
              ))}
            </ol>
          </div>

          <div className="modal__section">
            <h3 className="modal__subtitle">Arid Baker Method:</h3>
            <ul className="modal__list">
              <li>
                <strong>Temperature Alert ({status.label}):</strong> Your
                kitchen is {temp}°{currentTemperatureUnit}.
                <p
                  className="modal__tip-text"
                  style={{ marginTop: "8px", fontStyle: "italic" }}
                >
                  {status.tip}
                </p>
              </li>
              <li>
                <strong>Protection:</strong> If humidity is dry/low, use a damp
                cloth cover to prevent a dry "skin" from forming on the dough.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
