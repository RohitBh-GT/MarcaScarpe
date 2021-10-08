import React from 'react';
import useStyles from './styles.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Brand from './Brand/brand.jsx';

const Brands = ({ brands }) => {
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
        <div className={classes.brands}>
            <h2 className={classes.brandsHeading}>Top Brands</h2>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="carousel-container"
                className={classes.brandCarousel} responsive={responsive}>
                {brands.map((brand) => (
                    <Brand key={brand.brandName} imgSrc={brand.brandImageSrc} name={brand.brandName} />
                ))}
            </Carousel>
        </div>
    );
}

export default Brands;