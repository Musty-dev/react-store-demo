import React, { useState } from "react";
import './Login.view.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { useNavigate } from "react-router-dom";


export default function Register() {
    const dispatch = useDispatch();
    let initialValues = { user: '', password: '' };
    const navigate = useNavigate();

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Introduce tu email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Introduce una direccion de email válida';
        }

        let lista_usuarios = localStorage.getItem('user_list');
        let decoded_users = JSON.parse(lista_usuarios);
        if (decoded_users != null) {
            //Leemos el array como si fuera una bbdd
            let usuario_existe = false;
            decoded_users.forEach(element => {
                if (value == element.user) {
                    //No es valido, salir del form tirando aviso
                    usuario_existe = true;
                }
            });
            if (usuario_existe) {
                error = "El email ya existe en la plataforma";
            }
        }
        return error;
    }

    function validatePassword(value) {
        let error;
        if (value == undefined || value.length < 5) {
            error = "El password debe tener mínimo 5 carácteres";
        }
        return error;
    }


    let manejarEnvio = (values, { setSubmitting }) => {
        let lista_usuarios = localStorage.getItem('user_list');
        let decoded_users = JSON.parse(lista_usuarios);
        if (decoded_users == null) {
            decoded_users = [];
            decoded_users.push({ user: values.user, password: values.password });
        }
        else {
            //Leemos el array como si fuera una bbdd
            let usuario_existe = false;
            decoded_users.forEach(element => {
                if (values.user == element.user) {
                    //No es valido, salir del form tirando aviso
                    usuario_existe = true;
                }
            });
            if (usuario_existe) {
                alert("El usuario ya existe");
                setSubmitting(false);
                return;
            }
            decoded_users.push({ user: values.user, password: values.password });
        }

        localStorage.setItem('user_list', JSON.stringify(decoded_users));
        setSubmitting(false);
        navigate("/");
    }

    return (
        <div id="contenedor" className="container p-4">
            <div id="login" className="m-auto">
                    <div className="titulo">
                        Nuevo usuario
                    </div>
                    <Formik initialValues={initialValues} onSubmit={manejarEnvio}>
                        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                            <form onSubmit={handleSubmit} className="loginform">
                                <div class="form-group mb-3">
                                    <Field type="text" name="user" className="form-control" placeholder="Usuario" onChange={handleChange} validate={validateEmail} value={values.user} required />
                                    {errors.user ? (<div>{errors.user}</div>) : null}
                                </div>

                                <div class="form-group mb-3">
                                <Field type="password" placeholder="Contraseña" className="form-control" name="password" onChange={handleChange} validate={validatePassword} value={values.password} required />
                                {errors.password ? (<div>{errors.password}</div>) : null}
                                </div>

                                <button type="submit" className="btn btn-primary w-50 m-auto" title="Ingresar" name="Ingresar" disabled={isSubmitting}>Login</button>
                            </form>
                        )}
                    </Formik>
                </div>
        </div>
    );
}