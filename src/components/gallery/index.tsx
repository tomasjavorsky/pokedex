import { Box } from '@material-ui/core'
import React, { useMemo, useState } from 'react'
import { styles } from 'components/gallery/styles'
import Card from 'components/card'
import { useSelector } from 'react-redux'
import { selectCurrentGalleryPage, selectPokemonDataKey } from 'redux/selectors'
import { ReduxStoreType } from 'redux/types'

export const CARDS_ON_PAGE = 12

const Gallery = () => {
    const classes = styles()
    const visiblePokemonData = useSelector((store) =>
        selectPokemonDataKey(store as ReduxStoreType)
    )
    const currentGalleryPage = useSelector(selectCurrentGalleryPage)
    const pokemonCards = useMemo(() => {
        return visiblePokemonData?.map((data, index) => {
            return (
                <Card
                    key={data.name}
                    name={data.name}
                    url={data.url}
                    pokemonId={index + (currentGalleryPage - 1) * 12 + 1}
                />
            )
        })
    }, [visiblePokemonData, currentGalleryPage])

    return <Box className={classes.galerryContainer}>{pokemonCards}</Box>
}

export default Gallery
