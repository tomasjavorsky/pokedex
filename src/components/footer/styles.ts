import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    footerContaier: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '200px',
        marginTop: theme.spacing(10)
    },
    footerTop: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edfceb',
    },
    footerBottom: {
        width: '100%',
        height: '50%',
        backgroundColor: '#e7f4e6',
    },
}))
