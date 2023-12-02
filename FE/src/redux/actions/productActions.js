export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};
export const updateProducts = (newProducts) => ({
  type: UPDATE_PRODUCTS,
  payload: newProducts,
});