import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    cardContainer: {
        width: '320px',
        height: '400px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column-reverse',
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: theme.spacing(2),
        padding: '0px'
    },
    nameContainer: {
        width: '100%',
        height: '80px',
        backgroundColor: '#FF3E4E',
        color: 'white',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '24px',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0 0 8px 8px'
    },
}))
