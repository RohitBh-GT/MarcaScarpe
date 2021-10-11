import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/navbar.jsx';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import './styles.css';
import ReactSelect from '../../components/ReactSelect/reactSelect.jsx';
import { Size } from '../../utils/constants/size.js';
import { addToCart } from '../../utils/common.js';
import ReviewDialog from '../../components/ReviewDialog/reviewDialog.jsx';

const Product = () => {
    const location = useLocation();
    const { productId, productName } = queryString.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [ratingVal, setRatingVal] = useState(2);
    const [size, setSize] = useState('');
    const [sizeAlert,setSizeAlert] = useState(false);
    const [cartAlert,setCartAlert] = useState(false);
    const [successAdd,setSuccessAdd] = useState(false);

    const [productToAdd,setProductToAdd] = useState({
        _id:'',
        description:[],
        forGender:'',
        productBrand:'',
        productName:'',
        productColor:'',
        productImage:'',
        size:'',
        productPrice:'',
        productDiscountPrice:'',
        productRating:0,
        stock:0
    });

    const allShoes = useSelector((state) => state.shoes);
    const [product, setProduct] = useState([]);
    const [productImg, setProductImg] = useState('');

    useEffect(() => {
         setProduct(allShoes.filter((shoe) => shoe._id === productId))
    }, [allShoes]);

    useEffect(() => {
        if (product.length !== 0) {
            setProductImg(product[0].productImage);
            setRatingVal(product[0].productRating);
            setProductToAdd({_id:product[0]._id,
            description:product[0].description,
            forGender:product[0].forGender,
            productBrand:product[0].productBrand,
            productName:product[0].productName,
            productColor:product[0].productColors[0].colorName,
            productImage:product[0].productImage,
            size:'',
            productPrice:product[0].productPrice,
            productDiscountPrice:product[0].productDiscountPrice,
            productRating:product[0].productRating,
            stock:product[0].stock})
        }
    }, [product]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if(size.trim() === ''){
            setSizeAlert(true);
            setTimeout(()=> {
                setSizeAlert(false);
            },[5000]);
        }
        else {
            setSizeAlert(false);
            const cart = addToCart(productToAdd);
            if(cart === 0){
                setCartAlert(true);
                setTimeout(()=> {
                    setCartAlert(false);
                },[5000]);
            }
            else{
                setSuccessAdd(true);
                setTimeout(()=> {
                    setSuccessAdd(false);
                },[5000]);
            }
        }
    }

    return (
        <div className="productPage">
            <Navbar />
            {product.length !== 0 &&
                (<div className='productCard'>
                    <div className='productImage'>
                        <img style={{ padding: '10px', border: '2px solid #fe6b02' }} src={productImg} width="80%" height="80%" />
                    </div>
                    <div className='productInfo'>
                        <h2 className='productName'>{product[0].productName}</h2>
                        <div className='productSubHead'>
                            <span className='productBrand'>Brand: {product[0].productBrand} </span>
                            <span className='productGender'>For {product[0].forGender} </span>
                        </div>
                        <Rating className='ratingBar' name="read-only-rating" value={ratingVal} readOnly />
                        <hr style={{ backgroundColor: '#fe6b02' }} />
                        <span style={{ color: '#272c48', fontWeight: '600' }}>Price:</span> <span className='productDiscountPrice'>{product[0].productDiscountPrice}</span>
                        &nbsp;&nbsp;&nbsp;<span className='productPrice'>{product[0].productPrice}</span>
                        <h4>Size:
                            <ReactSelect
                                placeholder="Select Size"
                                height='5vh'
                                width='15vw'
                                backgroundColor='#e9e9e9'
                                options={Size}
                                onChange={(e) => {
                                    setSize(e.label);
                                    productToAdd.size = e.label;
                                }}
                                textColor='black'
                            /></h4>
                        <h4>Color:</h4>
                        {product[0].productColors.map((pColor) => (
                            <div className='colors' key={pColor.colorName} onClick={(e) => {
                                e.preventDefault();
                                setProductImg(pColor.colorPhoto);
                                productToAdd.productImage = pColor.colorPhoto;
                                productToAdd.productColor = pColor.colorName;
                            }} style={{ padding: '5px', border: '1px solid black', backgroundColor: pColor.colorName }}></div>
                        ))}
                        <div><h3>Product Description:</h3>
                            {product[0].description.length === 0 ? <ul>
                                <li>Sole: Rubber</li>
                                <li>Closure: Lace-Up</li>
                                <li>Shoe Width: Medium</li>
                                <li>Material:Synthetic</li>
                                <li>Lifestyle:Casual</li>
                                <li>Heel Type:Flats</li>
                            </ul> : <ul>
                                {product[0].description.map((desc) => (
                                    <li>{desc}</li>
                                ))}
                            </ul>
                            }
                        </div>
                        <div className='buttons'>
                            <button onClick={handleAddToCart} className='cartButton'>Add to Cart</button>
                            <button className='wishlistButton'>Add to Wishlist</button>
                        </div>
                    </div>
                </div>)}
            
            {product.length !== 0 && <div>
            <ReviewDialog id={productId} name={productName} />  
            {product[0].productReviews.map((review)=> (
                <div className='reviewsBox'>
                    <span>{review.personName}</span>&nbsp;&nbsp;&nbsp;
                    <span>{review.reviewDate}</span>
                    <Rating className='ratingBar' name="read-only-rating" value={review.personRating} readOnly />
                    <h4>{review.personReview}</h4>
                </div>
            ))}
            </div>
        }
            {sizeAlert && <Alert className='alert' severity="error">Item Cannot be added - Size not selected.</Alert>}
            {cartAlert && <Alert className='alert' severity="error">Item is already added to cart.</Alert>}
            {successAdd && <Alert className='success' severity="success">Item successsfully added to cart.</Alert>}
        </div>
    )
}

export default Product;