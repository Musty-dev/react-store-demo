/* Fichero redux/reducers/index.js */
import { combineReducers } from 'redux';
import { ACTIONS_PRODUCTOS } from '../actions';


const initialState = {
    productos: [],
};


export const productos = (state = initialState.productos, action) => {
    switch(action.type) {
      case ACTIONS_PRODUCTOS.CREAR_PRODUCTOS:
        state = action.payload;
        return [...state];
      default:
        return [...state];
    }
  }
   
export default combineReducers({productos});