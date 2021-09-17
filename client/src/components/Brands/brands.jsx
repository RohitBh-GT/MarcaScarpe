import React from 'react';
import useStyles from './styles.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
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
                transitionDuration={1500}
                containerClass="carousel-container"
                className={classes.brandCarousel} responsive={responsive}>
                {brands.map((brand) => (
                    <div key={brand.brandsName}>
                        <img width="50%" src={brand.brandImageSrc} alt={brand.brandName} />
                        <h4 style={{ color: 'white' }}>{brand.brandName}</h4>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Brands;