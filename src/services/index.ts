import { ITodo } from '@app/pages/homepage/home-page';
import { apiRequest } from '../config';
import endpoints from '../services/endpoints';

export const getAllTodos = () => apiRequest.get(endpoints.todoEndpoint());
export const postNewTodo = (data?: ITodo) => apiRequest.post(endpoints.todoEndpoint(), data);
export const updateTodo = ({ id, ...rest }: ITodo) => apiRequest.patch(endpoints.todoEndpointSingle(id), rest);
export const deleteTodo = (id: number) => apiRequest.delete(endpoints.todoEndpointSingle(id));
