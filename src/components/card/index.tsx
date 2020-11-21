import { Box, Button } from '@material-ui/core'
import { styles } from 'components/card/styles'
import React from 'react'

const Card = () => {
    const classes = styles()
    return (
        <Button className={classes.cardContainer}>
            <Box className={classes.nameContainer}>Name</Box>
        </Button>
    )
}

export default Card
