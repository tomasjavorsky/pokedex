export interface ReduxStoreType {
    pokemonData: PokemonDataBasic[] | null
    galleryPage: number
}

export interface PokemonDataBasic {
    name: string
    url: string
}