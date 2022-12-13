import { useReducer,useState } from 'react';
import { reducerTareas, initialState,ADD_TAREA,DELETE_TAREA } from '../../context/reducers';

export default function About() {
  const [tareas, dispatch] = useReducer(reducerTareas, initialState);
  const [mensaje, setMensaje] = useState('');


  return (
    <div className="About">
      <div>
        <strong>Crear nueva tarea</strong>
        <input onChange={(ev) => setMensaje(ev.target.value)}></input>
        <button onClick={() =>
          dispatch({type: ADD_TAREA, payload: {id: tareas.length + 1, mensaje}})
        }>Crear tarea</button>
      </div>
      
      <button onClick={() => dispatch({type: DELETE_TAREA})}>Borrar tareas</button>

      <h1>Explicando el hook useReducer</h1>

      <ul>
        {tareas.map(tarea => {
          return <li key={tarea.id}>{tarea.mensaje}</li>
        })}
      </ul>
    </div>
  );
}