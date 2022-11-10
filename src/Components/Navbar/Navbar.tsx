import { useEffect, useRef, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { LogoIcon } from '../../Icons';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [browseMenu, setBrowseMenu] = useState<boolean>(false);
  const [accountsMenu, setAccountsMenu] = useState<boolean>(false);

  const browse: any = useRef();
  const accounts: any = useRef();

  const handleClick = () => {};

  const clickBrowseOutSide = (e: any) => {
    if (['Home', 'Product', 'Category'].includes(e.path[0].textContent)) {
      return;
    }

    setBrowseMenu(false);
  };

  const clickAccountsOutSide = (e: any) => {
    // if (accounts.current.contains(e.target)) {
    if (
      ['Wishlist', 'Admin', 'Log In', 'Sign Up'].includes(e.path[0].textContent)
    ) {
      return;
    }

    setAccountsMenu(false);
  };

  const handleBrowseMenu = (e: any) => {
    e.preventDefault();
    if (accountsMenu) setAccountsMenu(false);
    setBrowseMenu(!browseMenu);
  };

  const handleAccountsMenu = (e: any) => {
    e.preventDefault();
    if (browseMenu) setBrowseMenu(false);
    setAccountsMenu(!accountsMenu);
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickBrowseOutSide);
    return () => document.removeEventListener('mousedown', clickBrowseOutSide);
  }, [browseMenu]);

  useEffect(() => {
    document.addEventListener('mousedown', clickAccountsOutSide);
    return () =>
      document.removeEventListener('mousedown', clickAccountsOutSide);
  }, [accountsMenu]);

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <LogoIcon height='50px' width='250px' />
      </Link>

      <Form
        onSubmit={() => {}}
        render={({ handleClick }: any) => {
          return (
            <form onSubmit={handleClick}>
              <Field
                component='input'
                name='searchbar'
                placeholder='Search Items'
              />
              <IconButton aria-label='search'>
                <SearchIcon
                  sx={{ height: '25px', width: '25px' }}
                  color='action'
                />
              </IconButton>
            </form>
          );
        }}
      />

      <ul>
        <li>
          <Link to='#' onClick={handleBrowseMenu} ref={browse}>
            Browse
            <ArrowDropDownIcon aria-label='dropdown' />
          </Link>
          <div className={browseMenu ? styles.menu : styles.hidden}>
            <Link to='/' onClick={() => setBrowseMenu(false)}>
              Home
            </Link>
            <Link to='/products' onClick={() => setBrowseMenu(false)}>
              Product
            </Link>
            <Link to='/categories' onClick={() => setBrowseMenu(false)}>
              Category
            </Link>
          </div>
        </li>
        <li>
          <Link to='#' onClick={handleAccountsMenu} ref={accounts}>
            Accounts
            <ArrowDropDownIcon aria-label='dropdown' />
          </Link>
          <div className={accountsMenu ? styles.menu : styles.hidden}>
            <Link to='#' onClick={() => setAccountsMenu(false)}>
              Wishlist
            </Link>
            <Link to='/login' onClick={() => setAccountsMenu(false)}>
              Admin
            </Link>
            <Link to='/login' onClick={() => setAccountsMenu(false)}>
              Log In
            </Link>
            <Link to='/signup' onClick={() => setAccountsMenu(false)}>
              Sign Up
            </Link>
          </div>
        </li>
        <li>
          <Link to='/orders'>Orders</Link>
        </li>
        <li>
          <Link to='/cart'>
            <Badge
              badgeContent={0}
              color='error'
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              showZero
            >
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
