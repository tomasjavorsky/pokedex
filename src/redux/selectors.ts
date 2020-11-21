import { PokemonDataBasic, ReduxStoreType } from "redux/types";

export const selectPokemonDataKey = (store: ReduxStoreType): PokemonDataBasic[] | null => store.pokemonData