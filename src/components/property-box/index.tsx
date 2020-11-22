import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { styles } from 'components/property-box/styles'

interface PropertyBoxProps {
    label: string
    property?: string | number
}

const PropertyBox = ({ label, property }: PropertyBoxProps) => {
    const classes = styles()
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>{label}</Typography>
            <Typography className={classes.property}>{property}</Typography>
        </Box>
    )
}

export default PropertyBox
