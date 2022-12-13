import { useParams } from 'react-router-dom';
import './Product.page.scss';

import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GET } from '../../services/http.service';

export default function Product(props) {
  let { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    GET('https://fakestoreapi.com/products/'+id).then(response => {
    console.log(response);
    setProducto(response);
    });
  }, []);

  return (
    <div className="Product">
      <div><strong>Aquí irán los datos del producto:</strong> {producto.id}</div>
      <div><strong>Nombre:</strong> {producto.title}</div>
      <div><strong>Descripción:</strong> {producto.description}</div>
      <div><strong>Precio:</strong> {producto.price}</div>
      <div>
        <img src={producto.image}></img>
      </div>
    </div>
  );
}