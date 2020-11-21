import { PokemonDataBasic } from 'redux/types'

// ---------- Action types ----------

export enum ActionTypes {
    GET_POKEMON_LIST = 'GET_POKEMON_LIST',
    GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS',
    GET_POKEMON_LIST_FAILURE = 'GET_POKEMON_LIST_FAILURE',
}

interface GetPokemonList {
    type: typeof ActionTypes.GET_POKEMON_LIST
}

interface GetPokemonListSuccess {
    type: typeof ActionTypes.GET_POKEMON_LIST_SUCCESS
    payload: {
        pokemonData: PokemonDataBasic
    }
}

interface GetPokemonListFailure {
    type: typeof ActionTypes.GET_POKEMON_LIST_SUCCESS
}

// ---------- Actions ----------

export type Actions =
    | GetPokemonList
    | GetPokemonListSuccess
    | GetPokemonListFailure

export const GetPokemonListAction = ({
    type: ActionTypes.GET_POKEMON_LIST,
})

export const GetPokemonListSuccessAction = (pokemonData: PokemonDataBasic) => ({
    type: ActionTypes.GET_POKEMON_LIST_SUCCESS,
    payload: {
        pokemonData,
    },
})

export const GetPokemonListFailureAction = ({
    type: ActionTypes.GET_POKEMON_LIST_FAILURE,
})
