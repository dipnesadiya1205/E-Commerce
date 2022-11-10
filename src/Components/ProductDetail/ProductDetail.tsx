import { useState, useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-final-form';
import { CircularProgress } from '../../stories/CircularProgress/CircularProgress.component';
import { Button } from '../../stories/Button/Button.component';
import styles from './ProductDetail.module.scss';

interface ProductProp {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
  category: string;
}

const ProductDetail: React.FC = () => {
  const location: Location = useLocation();

  const [product, setProduct] = useState<ProductProp>(Object);
  const [loading, setLoading] = useState<boolean>(true);
  const [disablePlus, setDisablePlus] = useState<boolean>(false);
  const [disableMinus, setDisableMinus] = useState<boolean>(true);
  const [qty, setQty] = useState<number>(1);

  const fetchProductDetail = async () => {
    try {
      let pathName: any = location.pathname.split('/');
      pathName = pathName[pathName.length - 1];

      const { data }: any = await axios.get(
        `https://dummyjson.com/products/${pathName}`
      );

      setProduct(data);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const handleIncreaseQty = () => {
    setQty((prevQty: number) => {
      if (prevQty >= 9) {
        setDisablePlus(true);
        return 10;
      }

      if (prevQty > -1) {
        setDisableMinus(false);
      }
      return prevQty + 1;
    });
  };

  const handleDecreaseQty = () => {
    setQty((prevQty: number) => {
      if (prevQty <= 2) {
        setDisableMinus(true);
        return 1;
      }
      if (prevQty < 11) {
        setDisablePlus(false);
      }
      return prevQty - 1;
    });
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: '1rem auto', width: '10%' }}>
        <CircularProgress height='50px' width='50px' />
      </div>
    );
  }

  const styledButton = (btn: boolean) => {
    return {
      backgroundColor: '#0080ff',
      opacity: btn ? 0.5 : 1,
      borderRadius: '50%',
    };
  };
  return (
    <div className={styles['container']}>
      <div className={styles['image']}>
        <img src={product.images[0]} />
      </div>
      <div className={styles['product-detail']}>
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <b>$ {product.price}</b>
        <p>{product.title}</p>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className={styles['qty-desc']}>
                  <label>Quantity</label>
                  <Button
                    label='-'
                    height='3rem'
                    width='1rem'
                    handleClick={handleDecreaseQty}
                    {...styledButton(disableMinus)}
                  />
                  <span>{qty}</span>
                  <Button
                    label='+'
                    height='3rem'
                    width='1rem'
                    handleClick={handleIncreaseQty}
                    {...styledButton(disablePlus)}
                  />
                </div>
                <h1>Features</h1>
                <ul>
                  <li>{product.description}</li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo
                  </li>
                  <li>
                    voluptates perspiciatis laborum doloribus deserunt, repellat
                    natus
                  </li>
                  <li>
                    quae earum eum magni corporis, eveniet rem corrupti itaque
                    nostrum
                  </li>
                  <li>dolorum qui expedita quis!</li>
                </ul>

                <Button
                  height='50px'
                  width='132px'
                  label='Add to Cart'
                  primary={true}
                  handleClick={() =>
                    window.alert(
                      `${product.title} with ${qty} quantity added to the cart.`
                    )
                  }
                />
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
