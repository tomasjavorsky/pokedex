import { Box } from '@material-ui/core'
import React from 'react'
import { styles } from 'components/gallery/styles'
import Card from 'components/card'

const Gallery = () => {
    const classes = styles()

    return (
        <Box className={classes.galerryContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
        </Box>
    )
}

export default Gallery
