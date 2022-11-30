import { GenericActionCreator } from '../../../utils/index';
import { call, takeLatest, put } from 'redux-saga/effects';
import { CreateNewTodoRequest, UpdateTodoRequest, TODOS_TYPES, DeleteTodoRequest } from '../../actions';
import { deleteTodo, getAllTodos, postNewTodo, updateTodo } from '../../../services';
import { AxiosResponse } from 'axios';
import { ITodo } from '@app/pages/homepage/home-page';

function* fetchTodosSaga() {
  try {
    const response: AxiosResponse = yield call(getAllTodos);
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.FETCH_TODOS_SUCCESS,
        payload: response?.data,
      }),
    );
  } catch (e) {
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.FETCH_TODOS_FAILURE,
        payload: e,
      }),
    );
  }
}

function* createTodoSaga(action: CreateNewTodoRequest) {
  try {
    const response: AxiosResponse = yield call(() => postNewTodo(action?.payload));

    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.CREATE_NEW_TODO_SUCCESS,
        payload: { ...action.payload, id: response?.data?.id },
      }),
    );

    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.FETCH_TODOS_REQUEST,
      }),
    );
  } catch (e) {
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.CREATE_NEW_TODO_FAILURE,
        payload: e,
      }),
    );
  }
}

function* updateTodoSaga(action: UpdateTodoRequest) {
  try {
    yield call(() => updateTodo(action?.payload as ITodo));

    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.UPDATE_TODO_SUCCESS,
      }),
    );
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.FETCH_TODOS_REQUEST,
      }),
    );
  } catch (e) {
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.UPDATE_TODO_FAILURE,
        payload: e,
      }),
    );
  }
}

function* deleteTodoSaga(action: DeleteTodoRequest) {
  try {
    const response: AxiosResponse = yield call(() => deleteTodo(action?.payload?.id as number));

    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.DELETE_TODO_SUCCESS,
        payload: { ...action.payload, id: response?.data?.id },
      }),
    );
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.FETCH_TODOS_REQUEST,
      }),
    );
  } catch (e) {
    yield put(
      GenericActionCreator({
        type: TODOS_TYPES.DELETE_TODO_FAILURE,
        payload: e,
      }),
    );
  }
}

function* todosSaga() {
  yield takeLatest(TODOS_TYPES.FETCH_TODOS_REQUEST, fetchTodosSaga);
  yield takeLatest(TODOS_TYPES.CREATE_NEW_TODO_REQUEST, createTodoSaga);
  yield takeLatest(TODOS_TYPES.UPDATE_TODO_REQUEST, updateTodoSaga);
  yield takeLatest(TODOS_TYPES.DELETE_TODO_REQUEST, deleteTodoSaga);
}

export default todosSaga;
