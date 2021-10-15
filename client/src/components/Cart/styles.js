import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cartHead:{
        marginLeft:'3%',
        fontSize:'1.5rem',
        color:'#fe6b02'
    },
    emptyCart:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        borderRadius:'8px',
        border:'1px solid #fe6b02'
    }
}));

export default useStyles;