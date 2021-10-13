import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dealCard:{
        textAlign:'center',
        padding:'5px',
        height:'34vh',
        margin:'0px 2vw',
        background:'white',
        // backgroundImage:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")',
        cursor:'pointer'
    },
    dealImg:{
        marginTop:'10px',
        height:'18vh'
    },
    dealName:{
        color:'#fe6b02',
        fontWeight:'650',
        fontSize:'15px',
        height:'8vh'
    },
    dealPrice:{
        color:'grey',
        fontSize:'1rem',
        marginLeft:'5px',
        textDecoration:'line-through',
    },
    dealDiscount:{
        fontSize:'1rem',
        marginLeft:'5px',
        fontWeight:'650',
        fontSize:'1.4rem',
    },
    dealOption:{
        display:'flex',
        flex:'1',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    seeMore:{
        textDecoration:'none',
        color:'#fe6b02',
        '&:hover':{
            textDecoration:'underline'
        }
    }
}));

export default useStyles;