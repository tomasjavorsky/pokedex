import { Box, Button } from '@material-ui/core'
import { styles } from 'components/card/styles'
import React, { Suspense, useCallback, useState } from 'react'
import PokemonPicture from 'components/pokemon-picture'
import DetailModal from 'components/detail-modal'

interface CardProps {
    name: string
    url: string
    pokemonId: number
}

const Card = ({ name, url, pokemonId }: CardProps) => {
    const classes = styles()
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = useCallback(() => {
        setModalOpen(false)
    }, [])
    return (
        <>
            <Button
                className={classes.cardContainer}
                onClick={() => setModalOpen(true)}
            >
                <Box className={classes.cardInnerContainer}>
                    <Box className={classes.nameContainer}>{name}</Box>
                    <Suspense fallback={'loading'}>
                        <Box className={classes.imageContainer}>
                            <PokemonPicture pokemonId={pokemonId} />
                        </Box>
                    </Suspense>
                </Box>
            </Button>
            {modalOpen && (
                <DetailModal
                    pokemonId={pokemonId}
                    pokemonName={name}
                    url={url}
                    closeFunc={closeModal}
                />
            )}
        </>
    )
}

export default Card
