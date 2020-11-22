import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    cardContainer: {
        width: '320px',
        height: '400px',
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: theme.spacing(2),
        padding: '0px',
        '& span': {
            height: '100%',
        },
    },
    cardInnerContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        width: '100%',
        height: '100%',
    },
    nameContainer: {
        width: '100%',
        height: '80px',
        backgroundColor: '#FF3E4E',
        color: 'white',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '24px',
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0 0 8px 8px',
    },
    imageContainer: {
        marginTop: 'auto',
        marginBottom: 'auto',
        '& img': {
            width: '240px',
            height: '240px',
        },
    },
}))
