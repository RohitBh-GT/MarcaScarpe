import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { InputBase, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import passwordValidator from 'password-validator';
import { getToken } from '../../utils/common.js';
import logo from '../../assets/images/marcascarpe.png';
import { useParams } from 'react-router-dom';
import { resetPass } from '../../actions/auth.js';

const NewPass = () => {
    const classes = useStyles();
    const { id, token } = useParams();
    const [formData, setFormData] = useState({
        id: id, token: token, password: '', confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    if (getToken()) {
        history.push('/');
    }
    var pass = new passwordValidator();

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

    const handleFormChange = (event) => {
        event.preventDefault();
        var { name, value } = event.target;
        setFormData((prevVal) => {
            return { ...prevVal, [name]: value }
        });
    }

    const errorHandler = () => {
        if (formData.password.trim() === '' || formData.confirmPassword.trim() === '') {
            setError('*Fields cannot be empty!');
            return 1;
        }
        if (!pass.validate(formData.password)) {
            setError('*Password must be strong. Must Contain min. 8 characters and ([a-z],[A-Z],[0-9] and special character');
            return 1;
        }
        if (!pass.validate(formData.confirmPassword)) {
            setError('*Password must be strong. Must Contain min. 8 characters and ([a-z],[A-Z],[0-9] and special character');
            return 1;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('*Password and confirm password fields should be same!');
            return 1;
        }
        return 0;
    }

    const handlePassword = (event) => {
        event.preventDefault();
        if (errorHandler()) {
            return;
        }
        setLoading(true);
        const res = dispatch(resetPass(formData,history));
        res.then((message) => {setError('*'+message);})
          .catch((error) => {setError('*'+error);});
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img className={classes.logo} src={logo} alt="Marca Scarpe" />
                <Typography component="h1" variant="h5">
                    Reset Password
                </Typography>
                <div className={classes.form}>
                    <Grid container spacing={2}>
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
                        <Grid item xs={12}>
                            <InputBase
                                className={classes.InputBase}
                                name="confirmPassword"
                                variant="outlined"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleFormChange}
                                fullWidth
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <p className={classes.error}>{error}</p>
                    <Button
                        onClick={handlePassword}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Reset Password
                    </Button>
                </div>
            </div>
            {loading && <CircularProgress className={classes.Spinner} />}
        </Container>
    );
}

export default NewPass;