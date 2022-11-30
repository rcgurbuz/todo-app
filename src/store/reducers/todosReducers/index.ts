import { TodosActions, TodosState, TODOS_TYPES } from '../../actions';

const initialState: TodosState = {
  loading: false,
  todos: [],
  error: null,
  selectedTodoId: undefined,
};

export default (state = initialState, action: TodosActions) => {
  switch (action.type) {
    case TODOS_TYPES.FETCH_TODOS_REQUEST:
    case TODOS_TYPES.CREATE_NEW_TODO_REQUEST:
    case TODOS_TYPES.UPDATE_TODO_REQUEST:
    case TODOS_TYPES.DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TODOS_TYPES.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: null,
      };
    case TODOS_TYPES.FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };
    case TODOS_TYPES.CREATE_NEW_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case TODOS_TYPES.CREATE_NEW_TODO_FAILURE:
    case TODOS_TYPES.UPDATE_TODO_FAILURE:
    case TODOS_TYPES.DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TODOS_TYPES.UPDATE_TODO_SUCCESS:
    case TODOS_TYPES.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case TODOS_TYPES.SET_SELECTED_TODO:
      return {
        ...state,
        selectedTodoId: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
