export interface ITodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onClick?: () => void;
}
