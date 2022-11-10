import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCart } from '../../Components/ShoppingCart';
import styles from './ShoppingCart.module.scss';

const ShoppingCartPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles['shopping-cart-page']}>
        <ShoppingCart />
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
