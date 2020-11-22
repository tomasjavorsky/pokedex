import { Box, LinearProgress, Typography } from '@material-ui/core'
import { styles } from 'components/stat/styles'
import React from 'react'

interface StatProps {
    label: string
    points: number
    key: string | number
}

const Stat = ({ label, points, key }: StatProps) => {
    const classes = styles()
    return (
        <Box key={key} className={classes.container}>
            <Box className={classes.labelContainer}>
                <Typography className={classes.label}>{label}</Typography>
            </Box>
            <Box className={classes.statContainer}>
                <Typography className={classes.statNumber}>{points}</Typography>
                <LinearProgress
                    className={classes.stat}
                    variant="determinate"
                    color="secondary"
                    value={points}
                />
            </Box>
        </Box>
    )
}

export default Stat
