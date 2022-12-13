import { fork, takeLatest, call, put } from "@redux-saga/core/effects"
import { crearProductos } from "../redux/actions";
import { ACTIONS_PRODUCTOS } from "../redux/actions";
import {GET} from '../services/http.service.jsx';

// El saga quedará a la escucha de la ultima acción ejecutada
// del tipo LOAD_PROODUCTS, gracias al método takeLatest, y ejecutará
// la función indicada como segundo argumento cuando detecte esa acción.
function* productSaga() {
    yield takeLatest(ACTIONS_PRODUCTOS.CREAR_PRODUCTOS, loadProducts);
}
 
// También como generadora, esta función obtendrá el listado de productos
// utilizando axios, y luego lanzará una nueva acción para actualizar el
// listado, en lugar de con dispatch, utilizando el método propio put.
function* loadProducts() {
    const products = yield call(() => GET('products/'));
    yield put(crearProductos(products));
}

export function* rootSaga() {
    yield fork(productSaga);
}