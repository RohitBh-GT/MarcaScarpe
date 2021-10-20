import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    orderBox:{
        color:'#fe6b02',
        paddingBottom:'1%',
        margin:'2% 2% 0% 2%',
        borderRadius:'12px',
        background:'white',
    },
    orderTop:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f0f0f0',
        borderRadius:'10px',
        padding:'1%'
    },
    orderTopOptions:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'20%',
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
        backgroundColor:'#dad9d9 !important'
    }
}));

export default useStyles;