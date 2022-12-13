/* Fichero redux/actions/index.js */

export const ACTIONS_PRODUCTOS = {
  CREAR_PRODUCTOS: "CREAR_PRODUCTOS",
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
}
 
export const crearProductos = (productos) => {
  return {
    type:  ACTIONS_PRODUCTOS.CREAR_PRODUCTOS,
    payload: productos
  }
}

export const loadProducts = () => {
  return {
      type: ACTIONS_PRODUCTOS.LOAD_PRODUCTS
  }
}