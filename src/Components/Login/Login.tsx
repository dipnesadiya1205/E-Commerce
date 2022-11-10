import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { LogoIcon } from '../../Icons';
import { Button } from '../../stories/Button/Button.component';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <>
      <div className={styles['row']}>
        <Link to='/'>
          <LogoIcon height='50px' width='250px' color='#fff' />
        </Link>
      </div>
      <div className={styles['row']}>
        <div className={styles['login-form']}>
          <div className={styles['flex-item']}>
            <h1>Sign In</h1>
            <Form
              onSubmit={() => {}}
              render={({ handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className={styles['form-control']}>
                      <label>Email</label>
                      <Field
                        component='input'
                        name='email'
                        placeholder='Enter Email Address'
                      />
                    </div>
                    <div className={styles['form-control']}>
                      <label>Password</label>
                      <Field
                        component='input'
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                      />
                    </div>
                    <small>
                      By continuing, you agree to Simplecoding's Conditions of
                      Use and Privacy Notice.
                    </small>
                    <Button
                      height='50px'
                      width='132px'
                      label='Continue'
                      primary
                    />
                  </form>
                );
              }}
            />
            <hr
              style={{
                margin: '1rem 0',
                borderTop: '1px solid rgba(0,0,0,0.1)',
              }}
            />
            <small className={styles['new-user']}>New User?</small>
            <div className={styles['signup-div']}>
              <Link to='/signup'>
                <Button
                  label='Create Your Account'
                  height='50px'
                  width='200px'
                  primary={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
