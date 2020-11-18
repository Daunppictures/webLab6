import { FILTER_ITEMS_BY_PRICE } from "../constants/catalogConstants";

export const filterByPrice = (products, price) => (dispatch) => {
  return dispatch({
    type: FILTER_ITEMS_BY_PRICE,
    payload: {
      price: price,
      items:
        price === ""
          ? products
          : products.filter((a) => a.price.indexOf(price.toUpperCase() >= 0)),
    },
  });
};
