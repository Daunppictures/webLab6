import { FILTER_ITEMS_BY_PRICE } from "../constants/catalogConstants";

export const filterByPriceReducer = (
  state = { filteredItems: [], price: "" },
  action
) => {
  switch (action.type) {
    case FILTER_ITEMS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.productItems,
        price: action.payload.price,
      };

    default:
      return state;
  }
};
