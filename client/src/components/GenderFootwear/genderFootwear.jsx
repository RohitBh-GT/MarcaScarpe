import React from 'react';
import useStyles from './styles.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Gender from './Gender/gender.jsx';

const GenderFootwear = ({ gender, shoes, products}) => {
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

    console.log(shoes);

    return (
        <div className={classes.gender}>
            <h2 className={classes.genderHeading}>{gender} Footwears</h2>
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
                className={classes.genderCarousel} responsive={responsive}>
                {shoes.map((shoe) => (
                    <Gender key={shoe.productName} imgSrc={shoe.productImage} name={shoe.productName} 
                     discountPrice={shoe.productDiscountPrice} />
                ))}
            </Carousel>
        </div>
    );
}

export default GenderFootwear;