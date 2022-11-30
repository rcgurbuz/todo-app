import { TodosState, TODOS_TYPES } from '../../../store/actions';
import { RootState } from '../../../store/reducers';
import { FC, memo, useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { ITodoItemProps } from './todo-item';
import { CardWrapper, Text } from './todo-item.styled';
import Checkbox from '../../../theme/Checkbox';
import { TrashIcon } from '../../../theme/components';
import { GenericActionCreator } from '../../../utils';

const TodoItem: FC<ITodoItemProps> = memo<ITodoItemProps>(({ title, completed, id }: ITodoItemProps) => {
  const dispatch = useDispatch();

  const { selectedTodoId } = useSelector<RootState, TodosState>((state) => state?.todos, shallowEqual) ?? {};
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    completed && setChecked(true);
  }, [completed]);

  const handleDeleteTodo = (): void => {
    dispatch(GenericActionCreator({ type: TODOS_TYPES.DELETE_TODO_REQUEST, payload: { id } }));
  };

  const handleUpdateTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e?.target?.checked);
    dispatch(GenericActionCreator({ type: TODOS_TYPES.UPDATE_TODO_REQUEST, payload: { id, title, completed: e?.target?.checked } }));
  };

  return (
    <CardWrapper $isSelected={id === selectedTodoId}>
      <Checkbox checked={checked} onChange={(e) => handleUpdateTodo(e)} />
      <Text $isChecked={completed}>{title}</Text>
      <TrashIcon onClick={() => handleDeleteTodo()} />
    </CardWrapper>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
