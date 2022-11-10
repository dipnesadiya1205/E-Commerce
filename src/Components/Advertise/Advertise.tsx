import ECommerceImage from '../../../public/Assests/Images/e-commerce.svg';
import styles from './Advertise.module.scss';

const Advertise = () => {
  return (
    <>
      <div className={styles['background-div']}>
        <img src={ECommerceImage} />
        <div className={styles['heading-div']}>
          <a href='#top-category'>Start Shopping</a>
          <p>
            Simple Coding Market is for educational purposes only. It can be
            used by developers to learn about developing an ecommerce
            application complete with backend and frontend for Web and Android
          </p>
        </div>
      </div>
    </>
  );
};

export default Advertise;
