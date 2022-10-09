import PropTypes from "prop-types";
import {ConstructorElement,DragIcon,CurrencyIcon,Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import { typeOrder } from "../../types/types";

BurgerConstructor.propTypes = {
  orders: PropTypes.arrayOf(typeOrder).isRequired,
};

export default function BurgerConstructor({ orders }) {
  const totalPrice = orders.reduce((acc, val) => acc + val.price, 0);
  const handlerName = (name, type) => {
    if (type) {
      return type === 'top' ? `${name} (верх)` : `${name} (низ)`;
    }return name;
  };
  const totalArray = orders;
  return (
    <>
      <div className={styles.burgerCards}>
        <div>
          <div
            className={`${styles._items} pr-2 customscroll`}
          >
            {totalArray &&
              totalArray.map((item, index) => {
                return (
                  <div
                    className={styles._item}
                    key={`${item._id}_${index}`}
                  >
                    {item.type!=='bun' ?
                    (<div className={`${styles._drag} mr-2`}>
                      <DragIcon type="primary" />
                    </div>):<></>
                    }
                    <ConstructorElement
                      type={item.position}
                      isLocked={item.locker}
                      text={handlerName(item.name, item.position)}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={`${styles._total} mt-10 mr-4`}>
        <div className="text text_type_digits-medium mr-10">
          <span className="mr-2">{totalPrice}</span>
          <CurrencyIcon type="primary" className={`${styles._icon}`} />
        </div>
        <div className="button">
          <Button type="primary" size="medium">
            <p className="text text_type_main-default">Оформить заказ</p>
          </Button>
        </div>
      </div>
    </>
  );
}