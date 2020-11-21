import { Box } from '@material-ui/core'
import React, { useCallback, useMemo } from 'react'
import { styles } from 'components/gallery/styles'
import Card from 'components/card'
import { useSelector } from 'react-redux'
import { selectPokemonDataKey } from 'redux/selectors'

const Gallery = () => {
    const classes = styles()
    const visiblePokemonData = useSelector(selectPokemonDataKey)
    const pokemonCards = useMemo(() => {
        return visiblePokemonData?.map((data) => {
            return (
                <Card key={data.name} name={data.name} url={data.detailUrl} />
            )
        })
    }, [visiblePokemonData])

    return <Box className={classes.galerryContainer}>{pokemonCards}</Box>
}

export default Gallery
