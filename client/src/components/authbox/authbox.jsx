import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { InputBase,CircularProgress } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles.js';
import { signUp, signIn, GoogleSignIn } from '../../actions/auth.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import passwordValidator from 'password-validator';
import { getToken } from '../../utils/common.js';
import { GoogleLogin } from 'react-google-login';
import Icon from './icons.js';
import logo from '../../assets/images/marcascarpe.png';

const AuthBox = ({ type,setToken }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', emailId: '', phone: '', password: ''
  });
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  if(getToken()){
    history.push('/');
  }

  var pass = new passwordValidator();
  var ph = new passwordValidator();

  ph.is().has().digits(10).has().not().spaces().has().not().uppercase().has().not().lowercase().has().not().symbols();

  pass
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .symbols()
    .has()
    .digits()
    .has()
    .not()
    .spaces()
    .is()
    .not()
    .oneOf(["Passw0rd", "Password123"]);

  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleFormChange = (event) => {
    event.preventDefault();
    var { name, value } = event.target;
    setFormData((prevVal) => {
      return { ...prevVal, [name]: value }
    });
  }

  const errorHandler = () => {
    if (type === "signup") {
      if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.emailId.trim() === '' ||
        formData.phone.trim() === '' || formData.password.trim() === '') {
        setError('*None of the Fields should be empty');
        return 1;
      }
    }
    else {
      if (formData.emailId.trim() === '' || formData.phone.trim() === '' || formData.password.trim() === '') {
        setError('*None of the Fields should be empty');
        return 1;
      }
    }
    if (!pass.validate(formData.password)) {
      setError('*Password must be strong. Must Contain min. 8 characters and ([a-z],[A-Z],[0-9] and special character');
      return 1;
    }
    if (!ph.validate(formData.phone)) {
      setError('*Phone no. should have 10 digits only.');
      return 1;
    }
    if(!re.test(formData.emailId)){
      setError('*Email Id must contain @ and .com at end');
      return 1;
    }
    return 0;
  }

  const handleLogin = (event) => {
    if (errorHandler()) {
      return;
    }
    if (type === 'signup') {
      setLoading(true);
      const res = dispatch(signUp(formData, history));
      res.then((message) => {setError('*'+message); setLoading(false)})
         .catch((error) => {setError('*'+error); setLoading(false)});
         setLoading(true);
    }
    else {
      setLoading(true);
      const res = dispatch(signIn(formData, history));
      res.then((message) => {setError('*'+message); setLoading(false)})
          .catch((error) => {setError('*'+error); setLoading(false)});
    }
  }

  const googleSuccess = async(res) => {
    setLoading(true);
    const result = res?.profileObj;
    const response = dispatch(GoogleSignIn(result, history));
    response.then((message)=> {setError('*'+message); setLoading(false)})
    .catch((err) => {setError('*'+err); setLoading(false)});
  };

  const googleFailure = () => {
    setError("*Error during google sign in");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <img className={classes.logo} src={logo} alt="Marca Scarpe" />
        <Typography component="h1" variant="h5">
          {type === 'signup' ? 'Sign Up' : 'Sign In'}
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            {type === 'signup' && <Grid item xs={12} sm={6}>
              <InputBase
                className={classes.InputBase}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={formData.firstName}
                onChange={handleFormChange}
                id="firstName"
                placeholder="First Name"
                autoFocus
              />
            </Grid>}
            {type === 'signup' && <Grid item xs={12} sm={6}>
              <InputBase
                className={classes.InputBase}
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                value={formData.lastName}
                onChange={handleFormChange}
                id="lastName"
                placeholder="Last Name"
                autoFocus
              />
            </Grid>}
            <Grid item xs={12}>
              <InputBase
                className={classes.InputBase}
                autoComplete="email"
                name="emailId"
                variant="outlined"
                required
                value={formData.emailId}
                onChange={handleFormChange}
                fullWidth
                id="email Id"
                placeholder="Email Id"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <InputBase
                className={classes.InputBase}
                name="phone"
                variant="outlined"
                required
                fullWidth
                value={formData.phone}
                onChange={handleFormChange}
                id="phone"
                placeholder="Phone No."
                autoComplete="false"
              />
            </Grid>
            <Grid item xs={12}>
              <InputBase
                className={classes.InputBase}
                name="password"
                variant="outlined"
                type="password"
                required
                value={formData.password}
                onChange={handleFormChange}
                fullWidth
                id="password"
                placeholder="Password"
                autoFocus
              />
            </Grid>
          </Grid>
          <p className={classes.error}>{error}</p>
          <GoogleLogin 
            clientId="428464167569-9kvckkd3l7oe2pkq26ro8bcf3m0opivh.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.google}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>)}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin" />
          <Button
            onClick={handleLogin}
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            {type === 'signup' ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid className={classes.linkGrid} container> 
          <Grid item>
              {type === 'signin' && <Link className={classes.link} href="/auth/forgotPassword" variant="body2">
                Forgot Password
              </Link>} 
            </Grid>
            <Grid item>
              {type === 'signup' ? <Link className={classes.link} href="/auth/signIn" variant="body2">
                Already have an account? Sign in
              </Link> : <Link className={classes.link} href="/auth/signUp" variant="body2">Don't have an Account? Sign Up</Link>}
            </Grid>
          </Grid>
        </div>
      </div>
      {loading && <CircularProgress className={classes.Spinner} />}
    </Container>
  );
}

export default AuthBox;