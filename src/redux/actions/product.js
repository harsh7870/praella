export const PRODUCT_TYPE = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export const addProduct = (product) => (dispatch) => {
  dispatch({ type: PRODUCT_TYPE.ADD_PRODUCT, payload: product });
};

export const removeProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_TYPE.REMOVE_PRODUCT, payload: id });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_TYPE.DELETE_PRODUCT, payload: id });
};
