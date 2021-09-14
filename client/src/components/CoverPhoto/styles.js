import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    home_photo:{
        width:'100%',
        zIndex:'-1',
        marginBottom:'-100px',
        maskImage:'linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0)'
    },
    home:{
        width:'100%'
    },
    image:{
        width:'100%',
    }
}));

export default useStyles;