import { Login } from '../../Components/Login';
import styles from './Login.module.scss';

const LoginPage = () => {
  return (
    <div className={styles['login']}>
      <Login />
    </div>
  );
};

export default LoginPage;
