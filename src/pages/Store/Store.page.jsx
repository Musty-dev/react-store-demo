import './Store.page.scss';
import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GET } from '../../services/http.service';
import { useSelector, useDispatch } from 'react-redux';
import { crearProductos } from '../../redux/actions';
import Context from '../../context';
import Descripcion from './Descripcion';

export default function Store(props) {

  const context = useContext(Context);

  //const productos = useSelector(state => state.productos); 
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  let abrirProducto = (id) => {
    navigate('/product/' + id);
  }

  useEffect(() => {
    if (context.products.length === 0) {
      console.log("no hay productos en memoria, leemos");
      GET('https://fakestoreapi.com/products').then(response => {
        context.addProducts(response);
      });
    }
    else {
      console.log("Hay productos en memoria, no leemos");
    }
  }, []);

  return (
    <Context.Consumer>
      {context => (
        <div className="Store">
          <h1>Bienvenido a mi tienda</h1>
          <div className="row row-cols-4 g-4">
            {context.products.map((producto, index) => <Descripcion producto={producto} handleAction={event => abrirProducto(producto.id)}></Descripcion>)}
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

