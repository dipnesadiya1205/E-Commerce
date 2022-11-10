import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ItemCard } from '../../stories/Cards/Cards.component';
import { CircularProgress } from '../../stories/CircularProgress/CircularProgress.component';
import styles from './TopCategories.module.scss';

interface CategoryProps {
  id: number;
  title: string;
  url: string;
}

const TopCategories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [categoryName, setCategoryName] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const navigate: NavigateFunction = useNavigate();

  const fetchCategories = async () => {
    try {
      const { data }: any = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const categoryNames: any = await axios.get(
        'https://dummyjson.com/products/categories'
      );

      let topCategories: CategoryProps[] = [];
      for (let i = 0; i < 6; i++) {
        topCategories.push(data[Math.floor(Math.random() * 5000) * 1]);
      }
      setCategories(topCategories);
      setCategoryName(categoryNames.data.slice(0, 6));
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const timer = setInterval(() =>
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: 'auto', width: '10%' }}>
        <CircularProgress variant='determinate' value={progress} />
      </div>
    );
  }

  return (
    <div id='top-category' className={styles['top-category']}>
      <div className={styles.heading}>
        <h1>Top Categories</h1>
      </div>
      <div className={styles['cards']}>
        {categories.map(({ id, title, url }: CategoryProps, index: number) => (
          <ItemCard
            key={id}
            height='370px'
            width='345px'
            content={title}
            heading={categoryName[index]}
            image={url}
            imgHeight='210px'
            handleHeadingClick={() => {
              navigate(`/category/${categoryName[index]}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
