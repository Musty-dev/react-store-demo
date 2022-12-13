/** Fichero context/reducers.js */
export const ADD_TAREA = 'ADD';
export const DELETE_TAREA = 'DELETE';

export const initialState = [];

// Tomaremos a las acciones como en Redux, como objetos con 
// las propiedaes 'type' y 'payload'.
export const reducerTareas = (state, action) => {
  switch (action.type) {
    case ADD_TAREA: return [...state, action.payload];
    case DELETE_TAREA: return [];
    default: return state;
  }
};

export const ADD_PRODUCTOS = 'ADD_PRODUCTOS';
export const DELETE_PRODUCTOS = 'DELETE_PRODUCTOS';

export const reducerProductos = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCTOS: return [...action.payload];
    case DELETE_PRODUCTOS: return [];
    default: return state;
  }
}