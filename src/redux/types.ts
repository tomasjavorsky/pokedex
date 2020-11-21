export interface ReduxStoreType {
    pokemonData: PokemonDataBasic[] | null
}

export interface PokemonDataBasic {
    name: string
    detailUrl: string
}