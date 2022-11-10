import { Signup } from '../../Components/Signup';
import styles from './Signup.module.scss';

const SignupPage = () => {
  return (
    <div className={styles['signup']}>
      <Signup />
    </div>
  );
};

export default SignupPage;
