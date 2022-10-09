import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {typeIngridient} from '../../types/types'
import styles from "./BurgerIngredient.module.css";

BurgerIngredient.propTypes = {
  ingredient: typeIngridient,
};

export default function BurgerIngredient({ingredient}){
    return (
      <div className={`${styles._item} mb-8`}>
          {ingredient.__v > 0 && (
            <Counter
              count={ingredient.__v}
              size="default"
            />
          )}
          <img src={ingredient.image} alt="" className={`${styles._image} mb-1`} />
          <div className={`${styles._price} mb-1`}>
            <span className={`${styles._num} text text_type_main-medium`}>{ingredient.price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <div className="text text_type_main-default">
            {ingredient.name}
          </div>
      </div>
    )
}