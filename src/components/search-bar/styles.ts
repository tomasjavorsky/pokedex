import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    searchBar: {
        display: 'flex',
        justifyContent: 'space-arround',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundColor: '#fcfcfc',
        borderRadius: '8px',
        padding: '8px 16px',
        '& input': {
            width: '600px',
            height: '24px',
            padding: '0px 16px'
        }
    },
}))
