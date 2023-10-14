import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( ( theme ) => ( {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'

    },
    formContainer: {
        padding: '0 6rem 4rem 6rem',
        [ "@media (max-width:780px)" ]: {
            padding: '0 2rem 3rem 2rem',
        },
    },
    paragraph: {
        fontFamily: 'IBM Plex Sans',
        fontSize: '13px',
        color: 'gray',
    },
    uploadContainer: {
        display: 'flex',
        paddingBottom: '3rem'
    },
    upload: {
        opacity: '0.7'
    },
    cvText: {
        marginRight: '.5rem',
        fontSize: '13px',
        opacity: '0.5'
    },
    sumbitButton: {
        width: '40%',
        margin: 'auto',
        padding: '12px',
        fontSize: '13px',
    },
    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing( 2 ),
        },
    },
} ) );