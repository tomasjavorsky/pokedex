import { Box, Button } from '@material-ui/core'
import { styles } from 'components/card/styles'
import React from 'react'

interface CardProps {
    name: string
    url: string
}

const Card = ({name, url}: CardProps) => {
    const classes = styles()
    //TODO get img
    return (
        <Button className={classes.cardContainer}>
            <Box className={classes.nameContainer}>{name}</Box>
        </Button>
    )
}

export default Card
