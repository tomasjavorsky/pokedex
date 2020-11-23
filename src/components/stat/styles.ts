import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        marginBottom: theme.spacing(1),
    },
    labelContainer: {
        width: '130px',
        [theme.breakpoints.down('xs')]: {
            width: '40px',
        },
    },
    label: {
        fontWeight: 'bold',
        fontSize: '16px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
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
        [theme.breakpoints.down('xs')]: {
            height: '20px',
            width: '150px',
            borderRadius: '6px',
        },
    },
}))
