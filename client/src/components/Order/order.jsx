import React from 'react';
import { getToken } from '../../utils/common';
import useStyles from './style.js';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {ExpandMore} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import ReviewDialog from '../ReviewDialog/reviewDialog.jsx';

const Order = ({ order }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    const viewItem = (e,product) => {
        e.preventDefault();
        console.log(e,product);
        history.push(`/product?productId=${e._id}&productName=${e.productName}`)
    }

    return (
        <div className={classes.orderBox}>
            <div className={classes.orderTop}>
                <div className={classes.orderTopOptions}>
                    <div className={classes.orderTopOptionPoint}><div className={classes.upperHead}>Shipped To:</div><div className={classes.lowerHead}>#123,Chandigarh</div></div>
                    <div className={classes.orderTopOptionPoint}><div className={classes.upperHead}>Total Price:</div><div className={classes.lowerHead}>{order.totalPrice}.00</div></div>
                </div>
                <div>
                  To:- <strong style={{fontSize:'18px'}}>Mr. {getToken().result.userName} </strong>
                </div>
            </div>
            <div className={classes.products}>
            {order.products.map((product,index) => (
                <div className={classes.productAccordion}>
                <Accordion className={classes.accordion} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      {product.productName}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> x {product.quantity} =  
                    &nbsp;<strong>Rs {(product.productDiscountPrice.slice(1).replace(/,/g, '')*product.quantity).toFixed(2)}</strong> </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flex:'1'}}>
                          <div style={{width:'25%',marginRight:'2%'}}>
                              <img src={product.productImage} alt={product.productName} />
                          </div>
                          <div style={{fontSize:'1.2rem'}}>
                              <div><strong>Brand:</strong> {product.productBrand} For {product.forGender}</div>
                              <div><strong>Color:</strong> {product.productColor}</div>
                              <div><strong>Size:</strong> {product.size}</div>
                              <div><strong>Price:</strong> Rs {(product.productDiscountPrice.slice(1).replace(/,/g, '')*product.quantity).toFixed(2)}</div>
                          </div>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',flex:'1'}}>
                              <button onClick={(e)=>{
                                  e.preventDefault();
                                  history.push(`/product?productId=${product._id}&productName=${product.productName}`);
                              }} className={classes.orderPageButtons}>View Item</button>
                              <ReviewDialog id={product._id} name={product.productName} page='Order' />
                          </div>
                      </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            </div>
        </div>
    );
}

export default Order;