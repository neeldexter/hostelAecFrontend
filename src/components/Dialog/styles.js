import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    dialog: {
        borderRadius: '20px',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: '20px',
    },
    topBar: {
        backgroundColor: '#FF9800',
        width: '100%',
        borderRadius: '20px 20px 0px 0px',
        height: '4rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    close: {
        color: 'white',
        padding: '1.5rem',
        cursor: 'pointer',
    },
    form: {
        padding: '2rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    logoContainer: {
        height: '85px',
        width: '85px',
        borderRadius: '50%',
        background: 'white',
        position: 'absolute',
        marginTop: '-2.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25 )',
    },
    logo: {
        width: '60px',
        height: '50px',
    },
    heading: {
        fontSize: '.8rem',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '3rem 3rem 0 3rem',
    }
}));