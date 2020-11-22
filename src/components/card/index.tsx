import { Box, Button } from '@material-ui/core'
import Axios from 'axios'
import { styles } from 'components/card/styles'
import React, { Suspense } from 'react'
import PokemonPicture from 'components/pokemon-picture'

interface CardProps {
    name: string
    url: string
    pokemonId: number
}

const Card = ({ name, url, pokemonId }: CardProps) => {
    const classes = styles()
    return (
        <Button className={classes.cardContainer}>
            <Box className={classes.cardInnerContainer}>
                <Box className={classes.nameContainer}>{name}</Box>
                <Suspense fallback={'loading'}>
                    <Box className={classes.imageContainer}>
                        <PokemonPicture pokemonId={pokemonId} />
                    </Box>
                </Suspense>
            </Box>
        </Button>
    )
}

export default Card
