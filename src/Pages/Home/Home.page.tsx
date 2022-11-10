import { Advertise } from '../../Components/Advertise';
import { Footer } from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar';
import { TopCategories } from '../../Components/TopCategories';
import { TopProducts } from '../../Components/TopProducts';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Advertise />
      <article className={styles['list']}>
        <TopCategories />
      </article>
      <hr />
      <article className={styles['list']}>
        <TopProducts />
      </article>
      <Footer />
    </>
  );
};

export default Home;
