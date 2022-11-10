import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '../../stories/CircularProgress/CircularProgress.component';
import { ItemCard } from '../../stories/Cards/Cards.component';
import styles from './Categories.module.scss';

interface CategoryProps {
  id: number;
  title: string;
  description: string;
  images: any[];
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCategories = async () => {
    try {
      const { data }: any = await axios.get('https://dummyjson.com/products');

      setCategories(data.products);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [categories]);

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
        <h1>Our Categories</h1>
      </div>
      <div className={styles['categories']}>
        {categories.map(({ id, title, description, images }: CategoryProps) => {
          return (
            <ItemCard
              key={id}
              height='360px'
              width='350px'
              content={description}
              heading={title}
              image={images[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
