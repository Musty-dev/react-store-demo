import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About/About.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Store/Product.page';
import Nav from './components/Nav/Nav.component';
import Login from './pages/Login/Login.view';
import Register from './pages/Login/Register.view';
import Context from './context';
import { ProtectedRoute } from './components/ProtectedRoute.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function App() {
  // Estado inicial a enviarle al contexto, creado con hooks
  // ya que estamos trabajando con componentes de función.
  const [isLogged, setLogged] = useState(false);
  const [products, setProducts] = useState([]);
  const [esDeDia, setDia] = useState(true);

  // Método 'reducer' para vaciar la lista de productos.
  let deleteProducts = () => setProducts([]);

  // Método 'reducer' para actualizar la lista de productos.
  let addProducts = (newProducts) => setProducts(newProducts);
  let loginSession = (logged) => setLogged(logged);
  let ponerDia = (esDia) => setDia(esDia);

  const context = useContext(Context);

  return (
    <Context.Provider className="App" value={{
      products: products,
      isLogged: isLogged,
      esDeDia:esDeDia,
      addProducts: addProducts,
      loginSession: loginSession,
      ponerDia:ponerDia,
      deleteProducts: deleteProducts
    }}>
        <div className="container vh-100 mw-100"
          style={{ backgroundColor: esDeDia ? "#ffffff" : "#282c34" }}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<ProtectedRoute />}>
                <Route exact path="/store" element={<Store />} />
                <Route exact path="/about" element={isLogged ? <About /> : <Navigate to='/' />} />
                <Route path="/product/:id" element={isLogged ? <Product /> : <Navigate to='/' />} />
              </Route>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />

            </Routes>
          </BrowserRouter>
        </div>
    </Context.Provider>
  );
}

export default App;
