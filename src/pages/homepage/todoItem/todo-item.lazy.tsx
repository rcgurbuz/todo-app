import { LazyExoticComponent, lazy, FC } from 'react';
import { ITodoItemProps } from './todo-item';

export const TodoItem: LazyExoticComponent<FC<ITodoItemProps>> = lazy(() => import(/* 'TodoItem' */ '.'));
