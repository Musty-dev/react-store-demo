import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Descripcion(props) {
  return (
    <div className='col'>
      <div className='card'>
        <img src={props.producto.image} className="card-img-top" alt=""></img>
        <div className='card-body'>
          <h2 className='card-title'>id: {props.producto.id}</h2>
          <p className='card-text'>{props.producto.title}</p>
          <button className="btn btn-primary" onClick={() => {props.handleAction();}}>Ver producto</button>
        </div>
      </div>
    </div>
  );
}

export default memo(Descripcion);
