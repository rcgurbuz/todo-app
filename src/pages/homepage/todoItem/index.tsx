import { TODOS_TYPES } from '../../../store/actions';
import { FC, memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITodoItemProps } from './todo-item';
import { CardWrapper, Text } from './todo-item.styled';
import Checkbox from '../../../theme/Checkbox';
import { TrashIcon } from '../../../theme/components';
import { GenericActionCreator } from '../../../utils';

const TodoItem: FC<ITodoItemProps> = memo<ITodoItemProps>(({ title, completed, id }: ITodoItemProps) => {
  const dispatch = useDispatch();

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
    <CardWrapper>
      <Checkbox checked={checked} onChange={(e) => handleUpdateTodo(e)} />
      <Text $isChecked={completed}>{title}</Text>
      <TrashIcon onClick={() => handleDeleteTodo()} />
    </CardWrapper>
  );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
