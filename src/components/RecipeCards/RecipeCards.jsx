import "./RecipeCards.css";

function RecipeCards({ recipe, onSelect }) {
  return (
    <article className="recipe-card">
      <img
        src={recipe.image}
        alt={`Photo of ${recipe.name} sourdough loaf`}
        className="recipe-card__image"
      />
      <div className="recipe-card__content">
        <h3 className="recipe-card__name">{recipe.name}</h3>
        <p className="recipe-card__description">{recipe.description}</p>

        <button
          type="button"
          className="recipe-card__button"
          onClick={() => onSelect(recipe)}
        >
          VIEW METHOD
        </button>
      </div>
    </article>
  );
}

export default RecipeCards;
