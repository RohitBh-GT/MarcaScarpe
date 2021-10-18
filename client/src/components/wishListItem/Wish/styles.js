import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wishCard:{
        textAlign:'center',
        padding:'5px',
        height:'40vh',
        margin:'0px 2vw',
        background:'white',
        cursor:'pointer',
    },
    wishBrand:{
        padding:'2%',
        backgroundColor:'red',
        color:'white',
        fontSize:'1rem',
        fontWeight:'600',
        zIndex:'10',
        transform:'rotate(-30deg)'
    },
    wishImg:{
        marginTop:'10px',
        height:'18vh',
        marginBottom:'8px'
    },
    wishProductName:{
        color:'#fe6b02',
        fontSize:'15px',
        fontWeight:'650',
        height:'8vh'
    },
    wishDiscount:{
        fontSize:'1rem',
        marginLeft:'5px',
        fontWeight:'650',
        fontSize:'1.4rem',
    },
    wishOption:{
        display:'flex',
        flex:'1',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    wishSeeMore:{
        textDecoration:'none',
        color:'#fe6b02',
        '&:hover':{
            textDecoration:'underline'
        }
    }
}));

export default useStyles;