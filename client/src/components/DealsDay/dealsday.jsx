import React from 'react';
import useStyles from './styles.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleDeal from './SingleDeal/singleDeal.jsx';

const DealsDay = ({ deals }) => {
    const classes = useStyles();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <div className={classes.deals}>
            <h2 className={classes.dealsHeading}>Deals of the Day</h2>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={1500}
                containerClass="carousel-container"
                className={classes.dealsCarousel} responsive={responsive}>
                {deals.map((deal) => (
                    <SingleDeal key={deal.productName} productId={deal._id} imgSrc={deal.productImage} name={deal.productName} 
                     price={deal.productPrice} discountPrice={deal.productDiscountPrice} />
                ))}
            </Carousel>
        </div>
    );
}

export default DealsDay;