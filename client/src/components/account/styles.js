import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
    accountBox:{
        backgroundColor:'white',
        background:'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")',
        margin:'10%',
        padding:'4% 10%',
        borderRadius:'10px'
    },
    upperAccount:{
        marginBottom:'5%',
        color:'#fe6b02'
    },
    subAccountInfo:{
        marginBottom:'2%',
        fontSize:'1.2rem',
    },
    saveButton:{
        fontSize:'1.1rem',
        color:'white',
        backgroundColor:'green',
        borderRadius:'6px',
        padding:'3px',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'#19ba19'
        }
    }
}));

export default useStyles;