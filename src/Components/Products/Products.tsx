import { useEffect, useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '../../stories/CircularProgress/CircularProgress.component';
import { ItemCard } from '../../stories/Cards/Cards.component';
import styles from './Products.module.scss';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: any[];
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate: NavigateFunction = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data }: any = await axios.get('https://dummyjson.com/products');

      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  if (loading) {
    return (
      <div style={{ margin: '1rem auto', width: '10%' }}>
        <CircularProgress height='50px' width='50px' />
      </div>
    );
  }

  return (
    <div className={styles['container']}>
      <div className={styles['heading']}>
        <h1>Our Products</h1>
      </div>
      <div className={styles['products']}>
        {products.map(
          ({ id, title, description, price, images }: ProductProps) => {
            return (
              <ItemCard
                key={id}
                height='375px'
                width='350px'
                content={description}
                heading={title}
                price={price.toString()}
                image={images[0]}
                handleHeadingClick={() => {
                  navigate(`/product/show/${id}`);
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
