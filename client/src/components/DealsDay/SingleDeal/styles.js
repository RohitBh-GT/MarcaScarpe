import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dealCard:{
        width:'20vw',
        textAlign:'center',
        padding:'5px',
        height:'30vh',
        margin:'0px 2vw',
        background:'white',
        backgroundImage:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")',
        cursor:'pointer'
    },
    dealImg:{
        marginTop:'10px',
        height:'18vh'
    },
    dealName:{
        color:'#fe6b02',
        fontWeight:'650'
    }
}));

export default useStyles;