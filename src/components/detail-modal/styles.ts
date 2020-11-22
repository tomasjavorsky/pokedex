import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabContainer: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '8px 8px 0 0',
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '800px',
        borderRadius: '8px',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        border: '2px solid #E8E8E8',
        borderRadius: '8px',
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        height: '350px',
        '& img': {
            width: '240px',
            height: '240px',
        },
    },
    pokemonName: {
        fontSize: '30px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#FF3E4E',
    },
    propertiesContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
}))
