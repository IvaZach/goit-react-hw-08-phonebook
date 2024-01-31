import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/index';
import css from './AppBarToolbar.module.css';

import Toolbar from '@mui/material/Toolbar';

export const AppBarToolbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Toolbar>
  );
};
