import "./RecipeModal.css";

function RecipeModal({ recipe, onClose, water, temp }) {
  if (!recipe) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>

        <img src={recipe.image} alt={recipe.name} className="modal__image" />

        <div className="modal__content">
          <h2 className="modal__title">{recipe.name}</h2>
          <p className="modal__description">{recipe.description}</p>

          <div className="modal__method-section">
            <h3 className="modal__subtitle">Method Notes:</h3>
            <ul className="modal__method-list">
              <li>
                <strong>Calculated Base:</strong> 500g Flour, {water}g Water.
              </li>
              <li>
                <strong>Bulk Fermentation:</strong> Monitor for a 50% rise.
                Since your kitchen is {temp}°, watch the dough closely.
              </li>
              <li>
                <strong>Arid Tip:</strong> Surprise's dry air can cause a "skin"
                on the dough. Keep it tightly covered with a damp cloth or
                plastic lid.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
