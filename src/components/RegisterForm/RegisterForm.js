import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          name="name"
        />
      </label>
      <label className={css.label}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
        />
      </label>
      <label className={css.label}>
        <TextField
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          type="password"
          name="password"
        />
      </label>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};
