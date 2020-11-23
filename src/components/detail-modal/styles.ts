import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
    offset: number
}

export const styles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    outerContainer: props => ({
        display: 'flex',
        position: 'absolute',
        top: props.offset,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        width: '100vw',
        height: '100vh',
    }),
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabContainer: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '8px 8px 0 0',
        border: '2px solid #e8e8e8',
        borderBottom: 'none',
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '800px',
        borderRadius: '8px',
        border: '2px solid #e8e8e8'
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
    },
    closeContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        marginBottom: 'auto',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: 'auto',
    },
}))
