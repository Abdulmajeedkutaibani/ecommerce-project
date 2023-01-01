import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../assets/Happy Shop (2).svg';
import './navigation.styles.scss';

function Navigation() {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to={'/'}>
          <ShopLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={'/shop'}>
            SHOP
          </Link>
          <Link className='nav-link' to={'/sign-in'}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
