import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dialogTitle:{
        fontWeight:'bold',
        color:'#fe6b02'
    },
    contHead:{
        color:'#fe6b02'
    },
    textArea:{
        padding:'8px',
        borderRadius:'5px',
        border:'1px solid white'
    },
    reviewButton:{
        color:'white',
        backgroundColor:'#fe6b02',
        fontWeight:'bold',
        margin:'8px',
        padding:'6px',
        fontSize:'1.1rem',
        borderRadius:'8px',
        border:'none',
        cursor:'pointer'
    },
    errorReview:{
        color:'#fe6b02',
    }
}));

export default useStyles;