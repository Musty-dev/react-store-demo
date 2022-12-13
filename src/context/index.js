import React from 'react';
 
// Estado inicial de la aplicación.
const initialState = {
  products: [],
  isLogged: false,
  esDeDia:false,
  loginSession: (logged) => {},
  ponerDia: (esDia) => {},
  addProducts: (products) => {},
  deleteProducts: () => {}
}
 
export default React.createContext(initialState)
