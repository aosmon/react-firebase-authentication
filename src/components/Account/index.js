import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
    <div>
        <h1>Account Page</h1>

        <div className="container">
            <h2>Reset Password</h2>
            <PasswordForgetForm />
        </div>
        <div className="container">
            <h2>Change Password</h2>
            <PasswordChangeForm />
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
