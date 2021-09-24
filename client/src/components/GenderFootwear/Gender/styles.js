import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    genderCard:{
        width:'20vw',
        textAlign:'center',
        padding:'5px',
        height:'35vh',
        margin:'0px 2vw',
        background:'white',
        // backgroundImage:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")',
        cursor:'pointer',
    },
    genderImg:{
        marginTop:'10px',
        height:'18vh',
        marginBottom:'8px'
    },
    genderName:{
        color:'#fe6b02',
        fontSize:'15px',
        fontWeight:'650',
        height:'8vh'
    },
    genderDiscount:{
        fontSize:'1rem',
        marginLeft:'5px',
        fontWeight:'650',
        fontSize:'1.4rem',
    },
    genderOption:{
        display:'flex',
        flex:'1',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    genderSeeMore:{
        textDecoration:'none',
        color:'#fe6b02',
        '&:hover':{
            textDecoration:'underline'
        }
    }
}));

export default useStyles;