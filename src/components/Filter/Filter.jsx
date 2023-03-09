import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = e => {
    const filterValue = e.currentTarget.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input type="text" onChange={filterHandler} />
    </label>
  );
};

export default Filter;
