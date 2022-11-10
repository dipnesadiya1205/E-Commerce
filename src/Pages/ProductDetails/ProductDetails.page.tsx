import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { ProductDetail } from '../../Components/ProductDetail';
import styles from './ProductDetails.module.scss';

const ProductDetails: React.FC = () => {
  return (
    <>
      <Navbar />
      <article className={styles['product-detail']}>
        <ProductDetail />
      </article>
      <Footer />
    </>
  );
};

export default ProductDetails;
