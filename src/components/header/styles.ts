import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#ff3e4e',
        width: '100%',
        height: '160px',
    },
    logoBox: {
        marginLeft: '140px',
    },
    buttonBox: {
        marginRight: '140px',
        '& button': {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '700',
            marginRight: theme.spacing(7),
            color: 'white',
            textTransform: 'none',
        },
        '& :last-child': {
            marginRight: '0px',
        },
    },
}))
