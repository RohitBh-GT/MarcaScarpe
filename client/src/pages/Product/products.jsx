import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/navbar.jsx';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import './styles.css';
import ReactSelect from '../../components/ReactSelect/reactSelect.jsx';
import { Size } from '../../utils/constants/size.js';
import { useHistory } from 'react-router-dom';
import { addToCart, getToken } from '../../utils/common.js';
import { updateWishList } from '../../actions/profile.js';
import ReviewDialog from '../../components/ReviewDialog/reviewDialog.jsx';
import Footer from '../../components/Footer/footer.jsx';

const Product = () => {
    const history = useHistory();
    if(getToken() === null){
        history.push('/auth/signUp');
    }

    const location = useLocation();
    const { productId, productName } = queryString.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [ratingVal, setRatingVal] = useState(2);
    const [size, setSize] = useState('');
    const [sizeAlert,setSizeAlert] = useState(false);
    const [cartAlert,setCartAlert] = useState(false);
    const [successAdd,setSuccessAdd] = useState(false);
    const [stockAlert,setStockAlert] = useState(false);
    const [wishlistAlert,setWishlistAlert] = useState(false);
    const [successAddWish,setWish] = useState(false);
    const dispatch = useDispatch();

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
        stock:0,
        quantity:0
    });

    const allShoes = useSelector((state) => state.shoes);
    const myProfile = useSelector((state)=> state.profile);
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
            stock:product[0].stock,
            quantity:1},)
        }
    }, [product]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        if(size.trim() === ''){
            setSizeAlert(true);
            setTimeout(()=> {
                setSizeAlert(false);
            },[3000]);
        }
        else if(product[0].stock === 0){
            setStockAlert(true);
            setTimeout(()=> {
                setStockAlert(false);
            },[3000]);
        }
        else {
            setSizeAlert(false);
            const cart = addToCart(productToAdd);
            if(cart === 0){
                setCartAlert(true);
                setTimeout(()=> {
                    setCartAlert(false);
                },[3000]);
            }
            else{
                setSuccessAdd(true);
                setTimeout(()=> {
                    setSuccessAdd(false);
                },[3000]);
            }
        }
    }

    const handleAddToWishlist = (e) => {
        e.preventDefault();
        if(size.trim() === ''){
            setSizeAlert(true);
            setTimeout(()=> {
                setSizeAlert(false);
            },[3000]);
        }
        else if(product[0].stock === 0){
            setStockAlert(true);
            setTimeout(()=> {
                setStockAlert(false);
            },[3000]);
        }
        else {
            setSizeAlert(false);
            if(!getToken()){
                
            }
            else{
                if(myProfile[0].wishlist.find((item) => item.productName === product[0].productName)){
                    setWishlistAlert(true);
                    setTimeout(()=> {
                        setWishlistAlert(false);
                    },[3000]);
                }
                else {
                    dispatch(updateWishList({email:getToken().result.emailId,wishListItem:product[0]}));
                    setWish(true)
                    setTimeout(()=> {
                        setWish(false);
                    },[3000]);
                }
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
                        <div><Rating className='ratingBar' name="read-only-rating" value={ratingVal} readOnly /></div>
                        {product[0].stock>0 ? <span style={{color:'white',backgroundColor:'green',padding:'4px'}}>In Stock</span> 
                        : <span style={{color:'white',backgroundColor:'red',padding:'4px'}}>Out of Stock</span>}
                        <hr style={{ backgroundColor: '#fe6b02',marginTop:'12px' }} />
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
                                    if(e){
                                    setSize(e.label);
                                    productToAdd.size = e.label;
                                    }
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
                            <button onClick={handleAddToWishlist} className='wishlistButton'>Add to Wishlist</button>
                        </div>
                    </div>
                </div>)}
            
            {product.length !== 0 && <div style={{paddingBottom:'1%'}}>
            <ReviewDialog id={productId} name={productName} page='Product' />  
            {product[0].productReviews.length === 0 ? <div className='reviewsBoxEmpty'>
                <h2 style={{margin:'auto'}}>No review Here</h2>
            </div> :
            product[0].productReviews.map((review)=> (
                <div className='reviewsBox'>
                    <div>
                    <span className='personName'>{review.personName}</span>&nbsp;&nbsp;&nbsp;
                    <span className='reviewDate'>{review.reviewDate}</span>
                    </div>
                    <div>
                    <Rating className='personRating' name="read-only-rating" value={review.personRating} readOnly />
                    </div>
                    <span className='personReview'>{review.personReview}</span>
                </div>
            ))}
            </div>
        }
            {sizeAlert && <Alert className='alert' severity="error">Item Cannot be added - Size not selected.</Alert>}
            {cartAlert && <Alert className='alert' severity="error">Item is already added to cart.</Alert>}
            {successAdd && <Alert className='success' severity="success">Item successsfully added to cart.</Alert>}
            {stockAlert && <Alert className='success' severity="error">Item is out of Stock.</Alert>}
            {wishlistAlert && <Alert className='alert' severity="error">Product Already added to wishlist.</Alert>}
            {successAddWish && <Alert className='success' severity="success">Item successsfully added to wishlist.</Alert>}
            <Footer />
        </div>
    )
}

export default Product;