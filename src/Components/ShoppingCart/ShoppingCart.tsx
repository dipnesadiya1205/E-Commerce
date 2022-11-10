import { Button } from '../../stories/Button/Button.component';
import styles from './ShoppingCart.module.scss';

const ShoppingCart = () => {
  return (
    <>
      <h1 className={styles['heading']}>Shopping Cart</h1>
      <div className={styles['total-cart']}>
        <h3>Total: $ 0.00</h3>
        <Button
          label='Confirm Order'
          height='50px'
          width='150px'
          {...{ backgroundColor: '#007bff', color: '#fff' }}
        />
      </div>
    </>
  );
};

export default ShoppingCart;
