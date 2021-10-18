import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    home:{
        width:'100%'
    },
    image:{
        width:'100%',
        height:'85%'
    },
    cardGrid:{
        margin:'0px 20px'
    },
    heading:{
        fontWeight:'700'
    },
    root:{
        boxShadow: '4px 4px 6px #fe6b02',
        height:'80%',
        backgroundImage:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")'
    },
    cardBody:{
        marginTop:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    cardOption:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    cardUpperWish:{
        fontSize:'1.2rem',
        fontWeight:'550',
        '&:hover':{textDecoration:'underline',cursor:'pointer'}
    },
    cardDown:{
        fontSize:'1.8rem',
        fontWeight:'750'
    },
    cardUpper:{
        fontSize:'1.2rem',
        fontWeight:'550'
    },
    downloadImg:{
        width:'60%',
        height:'60%',
        margin:'auto',
        marginBottom:'16px',
        cursor:'pointer'
    },
    rewardsHead:{
        display:'flex',
        alignItems:'center',
        fontWeight:'700'
    },
    rewardImg:{
        width:'15%',
        height:'15%'
    }
}));

export default useStyles;