import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    singleItem:{
        marginTop:'2%',
        zIndex:'1'
    },
    emptyList:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        margin:'auto',
        borderRadius:'8px',
        width:'50%',
        border:'1px solid #fe6b02'
    },
    shoppingButton:{
        margin:'2%',
        padding:'2%',
        borderRadius:'10px',
        backgroundColor:'#fe6b02',
        border:'none',
        color:'white',
        fontSize:'1.1rem',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'#fe0505'
        }
    }
}));

export default useStyles;