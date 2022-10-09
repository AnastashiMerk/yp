import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import styles from "./BurgerIngredientsItems.module.css";

function BurgerIngredientItems({ title, ingredients }) {
  return (
    <div className="BurgerIngredientsItems">
    <div className={`${styles._row}`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <div className={`${styles._cards} pl-1 pr-1`}>
        {ingredients &&
          ingredients.map((ingredient, idx) => (
            <div className={`${styles._card}`}>
            <BurgerIngredient
              key={`${ingredient.id}_${idx}`}
              ingredient={ingredient}
            />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredientItems;