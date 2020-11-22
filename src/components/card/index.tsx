import { Box, Button } from '@material-ui/core'
import Axios from 'axios'
import { styles } from 'components/card/styles'
import React, { Suspense } from 'react'
import { useQuery } from 'react-query'
import { useImage } from 'react-image'

interface CardProps {
    name: string
    url: string
    pokemonId: number
}

interface CardImageProps {
    pokemonId: number
}

const CardImage = ({ pokemonId }: CardImageProps) => {
    const { src } = useImage({
        srcList: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`,
    })
    return <img src={src} />
}

const Card = ({ name, url, pokemonId }: CardProps) => {
    const classes = styles()

    // console.log(pokemonId)
    // const { isLoading, error, data } = useQuery(`${name}-data`, () =>
    //     Axios.get(url).then((res) => res.data)
    // )
    return (
        <Button className={classes.cardContainer}>
            <Box className={classes.cardInnerContainer}>
                <Box className={classes.nameContainer}>{name}</Box>
                <Suspense fallback={'loading'}>
                    <Box className={classes.imageContainer}>
                        <CardImage pokemonId={pokemonId} />
                    </Box>
                </Suspense>
            </Box>
        </Button>
    )
}

export default Card
