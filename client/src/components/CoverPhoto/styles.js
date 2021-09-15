import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    home:{
        width:'100%'
    },
    image:{
        width:'100%',
        height:'80%'
    },
    cardGrid:{
        margin:'0px 20px'
    },
    heading:{
        fontWeight:'700'
    },
    root:{
        boxShadow: '4px 4px 6px #fe6b02',
        height:'80%'
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
        marginBottom:'16px'
    }

}));

export default useStyles;