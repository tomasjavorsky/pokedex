import { Box } from '@material-ui/core'
import React, { useMemo, useState } from 'react'
import { styles } from 'components/gallery/styles'
import Card from 'components/card'
import { useSelector } from 'react-redux'
import { selectCurrentGalleryPage, selectVisiblePokemonData } from 'redux/selectors'
import { ReduxStoreType } from 'redux/types'

export const CARDS_ON_PAGE = 12

const Gallery = () => {
    const classes = styles()
    const visiblePokemonData = useSelector((store) =>
        selectVisiblePokemonData(store as ReduxStoreType)
    )
    const pokemonCards = useMemo(() => {
        return visiblePokemonData?.map((data) => {
            return (
                <Card
                    key={data.name}
                    name={data.name}
                    url={data.url}
                    pokemonId={data.pokemonId}
                />
            )
        })
    }, [visiblePokemonData])

    return <Box className={classes.galerryContainer}>{pokemonCards}</Box>
}

export default Gallery
