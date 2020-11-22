import { Box } from '@material-ui/core'
import React, { useMemo, useState } from 'react'
import { styles } from 'components/gallery/styles'
import Card from 'components/card'
import { useSelector } from 'react-redux'
import { selectPokemonDataKey } from 'redux/selectors'
import { ReduxStoreType } from 'redux/types'

const Gallery = () => {
    const classes = styles()
    const [offset, setOffset] = useState(0)
    const visiblePokemonData = useSelector((store) =>
        selectPokemonDataKey(store as ReduxStoreType, offset)
    )
    console.log(visiblePokemonData)
    const pokemonCards = useMemo(() => {
        return visiblePokemonData?.map((data, index) => {
            return (
                <Card
                    key={data.name}
                    name={data.name}
                    url={data.url}
                    pokemonId={index + offset + 1}
                />
            )
        })
    }, [visiblePokemonData])

    return <Box className={classes.galerryContainer}>{pokemonCards}</Box>
}

export default Gallery
