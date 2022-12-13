import './Nav.component.scss';
import { Link } from 'react-router-dom';
import Context from '../../context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const context = useContext(Context);
  
  let texto = context.esDeDia ?
    (<div>Cambiar a modo nocturno <FontAwesomeIcon icon={faMoon} /></div>) :
    (<div>Cambiar a modo diurno <FontAwesomeIcon icon={faSun} /></div>);

  return (
    <header className="row align-items-center p-2">
      <div className="col-sm">
        <i className="bi bi-bootstrap" style={{ fontSize: '2rem', color: 'purple' }}></i>
      </div>
      <div className="col">
        {context.isLogged == true ? 
          <Link className="Nav-link" to='/store' style={{ color: context.esDeDia ? "#282c34" : "#ffffff" }}>Store</Link>
        : "" }
        {context.isLogged == true ? 
          <Link className="Nav-link" to='/about' style={{ color: context.esDeDia ? "#282c34" : "#ffffff" }}>About</Link>
        : "" }
      </div>
      <div className="col-sm">
        <button className="btn btn-primary" onClick={() => context.ponerDia(!context.esDeDia)}>
          {texto}
        </button>
      </div>
    </header>
  );
}