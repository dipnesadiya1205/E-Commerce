import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { Order } from '../../Components/Order';
import styles from './Order.module.scss';

const OrderPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles['order-page']}>
        <Order />
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
