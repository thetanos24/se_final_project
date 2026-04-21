import "./RecipeCards.css";

function RecipeCards({ recipe, onSelect }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-card__image"
      />
      <div className="recipe-card__content">
        <h4 className="recipe-card__name">{recipe.name}</h4>
        <p className="recipe-card__description">{recipe.description}</p>

        <button
          className="recipe-card__button"
          onClick={() => onSelect(recipe)}
        >
          VIEW METHOD
        </button>
      </div>
    </div>
  );
}

export default RecipeCards;
