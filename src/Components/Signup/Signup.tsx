import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { LogoIcon } from '../../Icons';
import { Button } from '../../stories/Button/Button.component';
import styles from './Signup.module.scss';

const Signup = () => {
  return (
    <>
      <div className={styles['row']}>
        <Link to='/'>
          <LogoIcon height='50px' width='250px' color='#fff' />
        </Link>
      </div>
      <div className={styles['row']}>
        <div className={styles['signup-form']}>
          <div className={styles['flex-item']}>
            <h1>Create Account</h1>
            <Form
              onSubmit={() => {}}
              render={({ handleClick }: any) => {
                return (
                  <form onSubmit={handleClick}>
                    <div className={styles['form-control']}>
                      <label>Email</label>
                      <Field
                        component='input'
                        name='email'
                        placeholder='Enter Email Address'
                      />
                    </div>
                    <div
                      className={(styles['form-control'], styles['name-div'])}
                    >
                      <div>
                        <label>First Name</label>
                        <Field
                          component='input'
                          type='text'
                          name='firstname'
                          placeholder='Enter First Name'
                        />
                      </div>
                      <div>
                        <label>Last Name</label>
                        <Field
                          component='input'
                          type='text'
                          name='lastname'
                          placeholder='Enter Last Name'
                        />
                      </div>
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
                    <div className={styles['form-control']}>
                      <label>Confirm Password</label>
                      <Field
                        component='input'
                        type='password'
                        name='cpassword'
                        placeholder='Enter Confirm Password'
                      />
                    </div>
                    <Button
                      height='50px'
                      width='180px'
                      label='Create Account'
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
            <small className={styles['existing-user']}>Existing User?</small>
            <div className={styles['signup-div']}>
              <Link to='/login'>
                <Button
                  label='Log In'
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

export default Signup;
