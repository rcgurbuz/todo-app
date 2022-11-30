import { TODOS_TYPES } from '../../../store/actions';
import { FC, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Grid, Input } from '../../../theme/components';
import { GenericActionCreator } from '../../../utils';

const AddItem: FC = memo(() => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState<string>('');

  const handleAddTodo = (): void => {
    dispatch(GenericActionCreator({ type: TODOS_TYPES.CREATE_NEW_TODO_REQUEST, payload: { title: todo, completed: false, id: uuidv4() } }));
  };

  return (
    <Grid gridAutoFlow='column' gridTemplateColumns='10fr 1fr' css={{ padding: '20px 0' }}>
      <Input type='text' placeholder='New Task' onChange={(e) => setTodo(e.target.value)} />
      <Button onClick={() => handleAddTodo()}>Add</Button>
    </Grid>
  );
});

AddItem.displayName = 'AddItem';

export default AddItem;
