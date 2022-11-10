import { LogoIcon } from '../../Icons';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <ul>
              <li>Get to Know Us</li>
              <li>
                <a href='/'>About Us</a>
              </li>
              <li>
                <a href='/'>Android App</a>
              </li>
              <li>
                <a href='/'>IOS App</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <ul>
              <li>Connect With Us</li>
              <li>
                <a href='/'>Facebook</a>
              </li>
              <li>
                <a href='/'>Twitter</a>
              </li>
              <li>
                <a href='/'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <ul>
              <li>Make Money with Us</li>
              <li>
                <a href='/'>Sell with Us</a>
              </li>
              <li>
                <a href='/'>Become an Affiliate</a>
              </li>
              <li>
                <a href='/'>Advertise Your Products</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <ul>
              <li>Let Us Help You</li>
              <li>
                <a href='/'>Return Center</a>
              </li>
              <li>
                <a href='/'>100% Purchase Protection</a>
              </li>
              <li>
                <a href='/'>Help</a>
              </li>

              <li>
                <a href='/'>App Download</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <LogoIcon height='50px' width='250px' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
