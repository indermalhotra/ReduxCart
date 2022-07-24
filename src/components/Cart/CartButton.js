import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import {useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  let totalQuantity = useSelector(state => (state.cart.totalQuantity));
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={buttonClickHandler }>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
