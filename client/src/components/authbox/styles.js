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
      backgroundColor:'#fe6b02',
      color:'white',
      fontWeight:'700',
      '&:hover':{
        backgroundColor:'#dc6007'
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
    }
}));

export default useStyles;