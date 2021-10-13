import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    brandItemCard:{
        textAlign:'center',
        padding:'5px',
        height:'35vh',
        margin:'0px 2vw',
        background:'white',
        cursor:'pointer',
    },
    brandItemImg:{
        marginTop:'10px',
        height:'18vh',
        marginBottom:'8px'
    },
    brandItemName:{
        color:'#fe6b02',
        fontSize:'15px',
        fontWeight:'650',
        height:'8vh'
    },
    brandItemDiscount:{
        fontSize:'1rem',
        marginLeft:'5px',
        fontWeight:'650',
        fontSize:'1.4rem',
    },
    brandItemOption:{
        display:'flex',
        flex:'1',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    brandItemSeeMore:{
        textDecoration:'none',
        color:'#fe6b02',
        '&:hover':{
            textDecoration:'underline'
        }
    }
}));

export default useStyles;