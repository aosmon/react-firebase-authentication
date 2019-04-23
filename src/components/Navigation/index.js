import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

import styles from './Navigation.module.scss';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            { authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <div className={styles['navigation']}>
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    </div>
);

const NavigationNonAuth = () => (
    <div className={styles['navigation']}>
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li className={styles['navigation-sign']}>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
        </ul>
    </div>
)

export default Navigation;
