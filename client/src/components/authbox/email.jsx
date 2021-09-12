import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { InputBase, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles.js';
import { forgotPass } from '../../actions/auth.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../utils/common.js';

const AuthBox = ({ type }) => {
  const classes = useStyles();
  const [email, setEmailId] = useState({ emailId: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  if (getToken()) {
    history.push('/');
  }

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleEmail = (event) => {
    event.preventDefault();
    var { name, value } = event.target;
    setEmailId((prevVal) => {
      return { ...prevVal, [name]: value }
    });
  }

  const errorHandler = () => {
    if (email.emailId.trim() === '') {
      setError('*Please fill the above field');
      return 1;
    }
    if (!re.test(email.emailId)) {
      setError('*Email Id must contain @ and .com at end');
      return 1;
    }
    return 0;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (errorHandler()) {
      return;
    }
    setLoading(true);
    const res = dispatch(forgotPass(email,history));
    res.then((message) => {setError('*'+message); setLoading(false)})
          .catch((error) => {setError('*'+error); setLoading(false)});
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Email Verification
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputBase
                className={classes.InputBase}
                autoComplete="email"
                name="emailId"
                variant="outlined"
                required
                value={email.emailId}
                onChange={handleEmail}
                fullWidth
                id="email Id"
                placeholder="Email Id"
                autoFocus
              />
            </Grid>
          </Grid>
          <p className={classes.error}>{error}</p>
          <Button
            onClick={handleLogin}
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Send Link to this Email
          </Button>
        </div>
      </div>
      {loading && <CircularProgress className={classes.Spinner} />}
    </Container>
  );
}

export default AuthBox;