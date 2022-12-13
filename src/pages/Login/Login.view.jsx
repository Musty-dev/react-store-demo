import React, { useState, useContext } from "react";
import './Login.view.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useNavigate, Link } from "react-router-dom";
import Context from '../../context';


export default function Login() {
    const context = useContext(Context);

    let initialValues = { user: '', password: '' };
    const navigate = useNavigate();


    let manejarEnvio = (values, { setSubmitting }) => {
        let lista_usuarios = localStorage.getItem('user_list');
        let decoded_users = JSON.parse(lista_usuarios);
        let ok_login = false;
        if (decoded_users == null) {
            //No tenemos usuarios, no puede loggear
        }
        else {
            //Leemos el array como si fuera una bbdd
            decoded_users.forEach(element => {
                if (values.user == element.user && values.password == element.password) {
                    //Login correcto
                    ok_login = true;
                }
            });
        }
        setSubmitting(false);
        if (ok_login) {
            context.loginSession(true);
            navigate("/store");
        }
        else {
            alert("login ko");
        }
    }

    return (
        <div id="contenedor" className="container p-4">
            <div id="login" className="m-auto">
                <div className="titulo">
                    Bienvenido
                </div>
                <Formik initialValues={initialValues} onSubmit={manejarEnvio}>
                    {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                        <form onSubmit={handleSubmit} className="loginform">
                            <div class="form-group mb-3">
                                <input type="text" className="form-control" name="user" placeholder="Usuario" onChange={handleChange} value={values.user} required />
                            </div>
                            <div class="form-group mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" name="password" onChange={handleChange} value={values.password} required />
                            </div>

                            <button type="submit" className="btn btn-primary w-50 m-auto" title="Ingresar" name="Ingresar" disabled={isSubmitting}>Login</button>

                        </form>
                    )}
                </Formik>
                <div className="pie-form">
                    <Link to="/register">
                        ¿No tienes Cuenta? Registrate
                    </Link>
                </div>
            </div>
        </div>
    );
}