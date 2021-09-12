import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
      paddingTop:theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'#fe6b02'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      color:'#fe6b02',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'#dc6007',
      color:'white',
      fontWeight:'700',
      '&:hover':{
        backgroundColor:'#fe6b02'
      }
    },
    InputBase:{
      padding:'6px',
      color:'#fe6b02',
      border:'1px solid #fe6b02',
      borderRadius:'10px'
    },
    link:{
      color:'#fe6b02'
    },
    error:{
      color:'#fe6b02'
    },
    Spinner:{
      position:'absolute',
      left:'48%',
      top:'45%',
      color:'#fe6b02'
    },
    google:{
      backgroundColor:'#dc6007',
      color:'white',
      fontWeight:'700',
      '&:hover':{
        backgroundColor:'#fe6b02'
      }
    },
    linkGrid:{
      display:'flex',
      justifyContent:'space-between'
    }
}));

export default useStyles;