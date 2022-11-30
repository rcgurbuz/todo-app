import { ITodo } from '@app/pages/homepage/home-page';

export enum TODOS_TYPES {
  FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  CREATE_NEW_TODO_REQUEST = 'CREATE_NEW_TODO_REQUEST',
  CREATE_NEW_TODO_SUCCESS = 'CREATE_NEW_TODO_SUCCESS',
  CREATE_NEW_TODO_FAILURE = 'CREATE_NEW_TODO_FAILURE',
  UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST',
  UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
  UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE',
  DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE',
}

export interface TodosState {
  loading: boolean;
  todos: ITodo[];
  error: string | null;
}

export interface FetchTodosRequest {
  type: TODOS_TYPES.FETCH_TODOS_REQUEST;
}

export type FetchTodosSuccess = {
  type: TODOS_TYPES.FETCH_TODOS_SUCCESS;
  payload: ITodo[];
};

export type FetchTodosFailure = {
  type: TODOS_TYPES.FETCH_TODOS_FAILURE;
  payload?: string;
};

export interface CreateNewTodoRequest {
  type: TODOS_TYPES.CREATE_NEW_TODO_REQUEST;
  payload?: ITodo;
}

export type CreateNewTodoSuccess = {
  type: TODOS_TYPES.CREATE_NEW_TODO_SUCCESS;
  payload?: ITodo;
};

export type CreateNewTodoFailure = {
  type: TODOS_TYPES.CREATE_NEW_TODO_FAILURE;
  payload?: string;
};

export interface UpdateTodoRequest {
  type: TODOS_TYPES.UPDATE_TODO_REQUEST;
  payload?: ITodo;
}

export type UpdateTodoSuccess = {
  type: TODOS_TYPES.UPDATE_TODO_SUCCESS;
  payload?: ITodo;
};

export type UpdateTodoFailure = {
  type: TODOS_TYPES.UPDATE_TODO_FAILURE;
  payload?: string;
};

export interface DeleteTodoRequest {
  type: TODOS_TYPES.DELETE_TODO_REQUEST;
  payload?: ITodo;
}

export type DeleteTodoSuccess = {
  type: TODOS_TYPES.DELETE_TODO_SUCCESS;
  payload?: ITodo;
};

export type DeleteTodoFailure = {
  type: TODOS_TYPES.DELETE_TODO_FAILURE;
  payload?: string;
};

export type TodosActions =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure
  | CreateNewTodoSuccess
  | CreateNewTodoRequest
  | CreateNewTodoFailure
  | UpdateTodoSuccess
  | UpdateTodoRequest
  | UpdateTodoFailure
  | DeleteTodoSuccess
  | DeleteTodoRequest
  | DeleteTodoFailure;
