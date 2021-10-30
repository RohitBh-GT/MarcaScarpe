import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        backgroundColor: 'black',
        zIndex: '10000',
        maxWidth: '100vw',
        height: '12vh',
        position:'sticky',
        top:'0',
        fontFamily:'Helvetica'
    },
    logoContainer: {
        maxWidth: '90px',
        margin: '0px 20px'
    },
    logo: {
        cursor: 'pointer',
    },
    search: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        margin: '0px 20px',
    },
    search_input: {
        padding: '10px',
        border: 'none',
        outline: 'none',
        width: '100%'
    },
    search_logo_navbar: {
        marginTop: '0.5px',
        padding: '6px',
        backgroundColor: '#fe6b02',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#dc6007'
        }
    },
    rightNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '20px'
    },
    option: {
        margin: '0px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    upper: {
        fontSize: '16px',
        color: '#fe6b02'
    },
    down: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#fe6b02',
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default useStyles;