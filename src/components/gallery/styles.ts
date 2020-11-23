import { makeStyles, Theme } from '@material-ui/core'

export const styles = makeStyles((theme: Theme) => ({
    galerryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1408px',
        alignContent: 'center',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '352px',
        }
    },
}))
