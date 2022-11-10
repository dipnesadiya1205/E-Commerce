import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ItemCard } from '../../stories/Cards/Cards.component';
import styles from './TopProducts.module.scss';
import { CircularProgress } from '../../stories/CircularProgress/CircularProgress.component';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: any[];
}

const TopProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate: NavigateFunction = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data }: any = await axios.get('https://dummyjson.com/products');

      let topProducts: ProductProps[] = [];

      for (let i = 0; i < 8; i++) {
        topProducts.push(data.products[i + 5]);
      }

      setProducts(topProducts);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: 'auto', width: '10%' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles['top-product']}>
      <div className={styles.heading}>
        <h1>Top Products</h1>
      </div>
      <div className={styles['cards']}>
        {products.map(
          ({ id, title, description, images, price }: ProductProps) => (
            <ItemCard
              key={id}
              height='450px'
              width='345px'
              content={description}
              heading={title}
              image={images[0]}
              imgHeight='215px'
              price={price.toString()}
              handleHeadingClick={() => {
                navigate(`/product/show/${id}`);
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopProducts;
