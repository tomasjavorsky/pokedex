export interface ReduxStoreType {
    pokemonData: PokemonDataBasic[] | undefined
    galleryPage: number
    searchQuerry: string
}

export interface PokemonDataBasic {
    name: string
    url: string
    pokemonId: number
}