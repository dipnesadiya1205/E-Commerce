import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { Categories } from '../../Components/Categories';
import styles from './Category.module.scss';

const Category: React.FC = () => {
  return (
    <>
      <Navbar />
      <article className={styles['category-list']}>
        <Categories />
      </article>
      <Footer />
    </>
  );
};

export default Category;
