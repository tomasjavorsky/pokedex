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
