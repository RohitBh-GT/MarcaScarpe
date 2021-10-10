import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputBase } from '@material-ui/core';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import { Star } from '@material-ui/icons';
import useStyles from './style.js';
import { getToken } from '../../utils/common.js';
import { addReview } from '../../actions/shoes.js';
import { useDispatch } from 'react-redux';

const ReviewDialog = ({ id,name }) => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [review,setReview] = React.useState('');
    const [error,setError] = React.useState('');
    const userName = getToken().result.userName;
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const writeReview = (e) => {
        setOpen(true);
    }
    
    const publishReview = (e) => {
        e.preventDefault();
        if(review.trim() === ''){
            setError('*Review should not be empty');
        }
        else if(value === 0){
            setError('*Please give some rating');
        }
        else{
            const productRev = {personName:userName,personReview:review,personRating:value,
                reviewDate:new Date().toString()};
            dispatch(addReview(id,productRev));    
        }
    }

    const changeRev = (e) => {
        setReview(e.target.value);
    }

    return (
        <div>
            <InputBase
                variant="outlined"
                onClick={writeReview}
                placeholder="Add Product Review ..."
                style={{
                    padding: '6px',
                    color: '#fe6b02',
                    border: '1px solid #fe6b02',
                    borderRadius: '10px',
                    margin: '2% 5%',
                    width: '90%'
                }}
            />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={classes.dialogTitle} >Write Review for {name}</DialogTitle>
                <DialogContent>
                    <h4>Your point about this product:</h4>
                    <TextareaAutosize
                        aria-label="description"
                        minRows={4}
                        value={review}
                        onChange={changeRev}
                        placeholder="Your Description"
                        style={{ width: '80%' }}
                    />
                    <h4>Rate this Product:</h4>
                    <Rating
                        name="product-feedback"
                        value={value}
                        precision={1}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <span>{error}</span>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={publishReview}>Publish</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ReviewDialog;