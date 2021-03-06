import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Alert, createTheme, Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Users } from 'models';
import React from 'react';
import { Link } from 'react-router-dom';
import { authActions, LoginPayload } from '../authSlice';
import LoginForm from '../components/LoginForm';

const usetheme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    textAlign: 'center',
  },
  box: {
    padding: usetheme.spacing(2),
  },
}));

export default function LoginPage() {


  const classes = useStyles();

  const dispatch = useAppDispatch();

  const message = useAppSelector((state) => state.auth.errormessage);

  const handleLoginClick = async (formValue: Users) => {
    dispatch(authActions.login(formValue));
  };

  const initialValue: LoginPayload = {
    password: '',
    username: '',
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h4">Login</Typography>
        {message && (
          <Alert style={{ marginTop: '10px' }} severity="error">
            {message}
          </Alert>
        )}
        <LoginForm initialValue={initialValue} onSubmit={handleLoginClick} />
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/regis">
            <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
              <ChevronLeft /> Back Register
            </Typography>
          </Link>
          <Link to="/forgot" style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
              Back Forgot Password
              <ChevronRight />
            </Typography>
          </Link>
        </Box>
      </Paper>
    </div>
  );
}
