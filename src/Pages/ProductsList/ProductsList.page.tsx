import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { ProductList } from '../../Components/ProductList';
import styles from './ProductsList.module.scss';

const Product: React.FC = () => {
  return (
    <>
      <Navbar />
      <article className={styles['product-list']}>
        <ProductList />
      </article>
      <Footer />
    </>
  );
};

export default Product;
