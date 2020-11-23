import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(2)
        },
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fce8ea',
        borderRadius: '8px',
        minWidth: '60px',
        marginBottom: theme.spacing(1),
        fontWeight: 'bold',
        padding: theme.spacing(1),
    },
    skills: {
        display: 'flex',
        flexDirection: 'column'
    },
    property: {
        textTransform: 'capitalize'
    }
}))
