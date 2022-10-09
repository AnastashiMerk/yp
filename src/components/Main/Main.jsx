import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export default function Main({ items, orders}) {
  return (
    <div className="container pb-10">
      <h1 className="text text_type_main-large pt-10 pb-5">
        Соберите бургер
      </h1>
      <div className="row">
        <div className="col">
          <BurgerIngredients items={items} />
        </div>
        <div className="col">
          <BurgerConstructor orders={orders} />
        </div>
      </div>
    </div>
  );
}