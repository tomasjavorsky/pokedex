import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        marginBottom: theme.spacing(1),
    },
    labelContainer: {
        width: '130px',
    },
    label: {
        fontWeight: 'bold',
        fontSize: '16px',
        textTransform: 'capitalize',
    },
    statContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    statNumber: {
        color: 'white',
        position: 'relative',
        left: '30px',
        zIndex: 3,
    },
    stat: {
        height: '30px',
        width: '250px',
        borderRadius: '8px',
    },
}))
