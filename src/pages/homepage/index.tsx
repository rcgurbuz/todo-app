import { Grid } from '../../theme/components';
import { FC, memo, useEffect } from 'react';
import { Header, HomePageWrapper } from './home-page.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store/reducers';
import { TodosState, TODOS_TYPES } from '../../store/actions';
import { TodoItem } from './todoItem/todo-item.lazy';
import { ITodo } from './home-page';
import { GenericActionCreator } from '../../utils';
import { AddItem } from './addItem/add-item.lazy';

const HomePage: FC = memo(() => {
  const dispatch = useDispatch();

  const { todos } = useSelector<RootState, TodosState>((state) => state?.todos);

  useEffect(() => {
    dispatch(GenericActionCreator({ type: TODOS_TYPES.FETCH_TODOS_REQUEST }));
  }, []);

  const handleSelectTodo = (id: number): void => {
    dispatch(GenericActionCreator({ type: TODOS_TYPES.SET_SELECTED_TODO, payload: id }));
  };

  return (
    <HomePageWrapper>
      <Header>ToDo List</Header>
      <Grid gridTemplateColumns='1fr'>
        <AddItem />
        {todos?.map((item: ITodo) => (
          <div key={item?.id} onClick={() => handleSelectTodo(item?.id)}>
            <TodoItem id={item?.id} title={item?.title} completed={item?.completed} />
          </div>
        ))}
      </Grid>
    </HomePageWrapper>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
