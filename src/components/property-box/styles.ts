import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fce8ea',
        borderRadius: '8px',
        minWidth: '60px',
        marginRight: theme.spacing(3),
        fontWeight: 'bold',
        padding: theme.spacing(1),
    },
    property: {
        textTransform: 'capitalize'
    }
}))
