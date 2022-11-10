import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { Products } from '../../Components/Products';
import styles from './Product.module.scss';

const Product: React.FC = () => {
  return (
    <>
      <Navbar />
      <article className={styles['product-list']}>
        <Products />
      </article>
      <Footer />
    </>
  );
};

export default Product;
