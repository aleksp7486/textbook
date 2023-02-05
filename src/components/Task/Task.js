import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { deleteTask, toggleCompleted } from 'redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handelDelete = () => dispatch(deleteTask(task.id));
  const handelToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        onChange={handelToggle}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handelDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
