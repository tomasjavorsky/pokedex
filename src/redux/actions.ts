import { PokemonDataBasic } from 'redux/types'

// ---------- Action types ----------

export enum ActionTypes {
    GET_POKEMON_LIST = 'GET_POKEMON_LIST',
    GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS',
    GET_POKEMON_LIST_FAILURE = 'GET_POKEMON_LIST_FAILURE',
    SET_PAGINATION = 'SET_PAGINATION',
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

interface SetPagination {
    type: typeof ActionTypes.SET_PAGINATION
}

export type Actions =
    | GetPokemonList
    | GetPokemonListSuccess
    | GetPokemonListFailure
    | SetPagination

// ---------- Actions ----------

export const getPokemonListAction = ({
    type: ActionTypes.GET_POKEMON_LIST,
})

export const getPokemonListSuccessAction = (pokemonData: PokemonDataBasic) => ({
    type: ActionTypes.GET_POKEMON_LIST_SUCCESS,
    payload: {
        pokemonData,
    },
})

export const getPokemonListFailureAction = ({
    type: ActionTypes.GET_POKEMON_LIST_FAILURE,
})

export const setPaginationAction = (galleryPage: number) => ({
    type: ActionTypes.SET_PAGINATION,
    payload: {
        galleryPage
    }
})
