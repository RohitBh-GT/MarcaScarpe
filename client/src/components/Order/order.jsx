import React from 'react';
import { getToken } from '../../utils/common';
import useStyles from './style.js';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {ExpandMore} from '@material-ui/icons';

const Order = ({ order }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    console.log(order);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.orderBox}>
            <div className={classes.orderTop}>
                <div className={classes.orderTopOptions}>
                    <div className={classes.orderTopOptionPoint}><div>Shipped To</div><div>#123,Chandigarh</div></div>
                    <div className={classes.orderTopOptionPoint}><div>Total Price</div><div>{order.totalPrice}</div></div>
                </div>
                <div>
                    <strong>To:- </strong> Mr. {getToken().result.userName}
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
                    &nbsp;Rs {(product.productDiscountPrice.slice(1).replace(/,/g, '')*product.quantity).toFixed(2)} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                          <div>
                              <img src={product.productImage} alt={product.productName} width="20%" height="20%" />
                          </div>
                          <div>
                              <div>Brand: {product.productBrand} For {product.forGender}</div>
                              <div>Color: {product.productColor}</div>
                              <div>Size: {product.size}</div>
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