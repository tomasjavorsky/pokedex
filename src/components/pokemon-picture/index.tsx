import React from 'react'
import { useImage } from 'react-image'

interface CardImageProps {
    pokemonId: number
}

const PokemonPicture = ({ pokemonId }: CardImageProps) => {
    const { src } = useImage({
        srcList: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`,
    })
    return <img src={src} alt={'pokemon'}/>
}

export default PokemonPicture
