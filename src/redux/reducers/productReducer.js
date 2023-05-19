import { PRODUCT_TYPE } from "../actions/product";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPE.ADD_PRODUCT:
      const item = action.payload;
      const existItem = state.products.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x.id === item.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          products: [action.payload, ...state.products],
        };
      }
    case PRODUCT_TYPE.REMOVE_PRODUCT:
      let id = action.payload;
      let onlyOneItem = state.products.find((x) => x.id === id);
      if (onlyOneItem.qty === 1) {
        return {
          ...state,
          products: state.products.filter((x) => x.id !== id),
        };
      } else {
        return {
          ...state,
          products: state.products.map((x) =>
            x.id === id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }
    case PRODUCT_TYPE.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
