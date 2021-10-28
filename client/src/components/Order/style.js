import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    orderBox:{
        color:'#fe6b02',
        paddingBottom:'1%',
        margin:'2% 2% 0% 2%',
        borderRadius:'12px',
        backgroundColor:'white',
        background:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")'
    },
    orderTop:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f0f0f0',
        borderRadius:'10px',
        padding:'1%',
        background:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")'
    },
    orderTopOptions:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'40%',
        textAlign:'center'
    },
    orderTopOptionPoint:{
        display:'flex',
        flexDirection:'column',
    },
    products:{
        marginTop:'1.5%',
        marginBottom:'1%'
    },
    productAccordion:{
        marginLeft:'2%',
        marginRight:'2%'
    },
    accordion:{
        backgroundColor:'#dad9d9 !important',
        background:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")',
    },
    orderPageButtons:{
        width:'12vw',
        borderRadius:'6px',
        backgroundColor:'#fe6b02',
        color:'white',
        padding:'2%',
        margin:'1%',
        fontSize:'1.1rem',
        border:'none',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'#f97c22'
        }
    },
    upperHead:{
        fontSize: '16px',
        marginBottom:'5px'
    },
    lowerHead:{
        fontSize:'18px',
        fontWeight:'700'
    }
}));

export default useStyles;