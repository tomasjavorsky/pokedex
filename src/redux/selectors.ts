import { PokemonDataBasic, ReduxStoreType } from 'redux/types'

export const selectPokemonDataKey = (
    store: ReduxStoreType,
    offset: number
): PokemonDataBasic[] | null =>
    store.pokemonData ? store.pokemonData.slice(offset, offset + 12) : null
