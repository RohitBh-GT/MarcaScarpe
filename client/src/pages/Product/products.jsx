import React,{useEffect, useState} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/navbar.jsx';
import Rating from '@mui/material/Rating';
import './styles.css';

const Product = () => {
    const location = useLocation();
    const { productId,productName } = queryString.parse(location.search,{
        ignoreQueryPrefix:true
    });
    const [ratingVal,setRatingVal] = useState(2);

    const allShoes = useSelector((state) => state.shoes);
    const [product,setProduct] = useState(allShoes.filter((shoe)=> shoe._id === productId));
    const [productImg,setProductImg] = useState('');

    useEffect(()=> {
        setProduct(allShoes.filter((shoe)=> shoe._id === productId))
    },[allShoes]);

    useEffect(()=> {
        if(product.length!==0){
         setProductImg(product[0].productImage);
         setRatingVal(product[0].productRating);
        } 
    },[product]);

    return (
        <div className="productPage">
        <Navbar />
        {product.length!==0 &&
        (<div className='productCard'>
            <div className='productImage'>
                <img style={{padding:'10px',border:'2px solid orange'}} src={productImg} width="80%" height="80%" />
            </div>
            <div className='productInfo'>
                <h2>{product[0].productName}</h2>
                <span>Brand: {product[0].productBrand} </span>
                <span>For {product[0].forGender} </span>
                <Rating name="read-only-rating" value={ratingVal} readOnly />
                <hr/>
                <span>Price:</span> <h3 style={{display:"inline-block"}}>{product[0].productDiscountPrice}</h3>
                <h4>Size: Select Here</h4>
                <h4>Color:</h4>
                {product[0].productColors.map((pColor) => (
                    <div key={pColor.colorName} onClick={(e)=> {
                        e.preventDefault();
                        setProductImg(pColor.colorPhoto);
                    }} style={{padding:'5px',border:'1px solid black',backgroundColor:pColor.colorName}}>{pColor.colorName}</div>
                ))}
                {/* {product[0].description.map((desc)=> (

                ))} */}
                <button>Add to Cart</button>
                <button>Add to my Wishlist</button>
            </div>
         </div>)
        }
        </div>
    )
}

export default Product;