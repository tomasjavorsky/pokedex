import { PokemonDataBasic } from 'redux/types'

// ---------- Action types ----------

export enum ActionTypes {
    GET_POKEMON_LIST = 'GET_POKEMON_LIST',
    GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS',
    GET_POKEMON_LIST_FAILURE = 'GET_POKEMON_LIST_FAILURE',
    SET_PAGINATION = 'SET_PAGINATION',
    SET_SEARCH_QUERRY = 'SET_SEARCH_QUERRY',
    CLEAR_SEARCH_QUERRY = 'CLEAR_SEARCH_QUERRY',
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

interface SetSearchQuerry {
    type: typeof ActionTypes.SET_SEARCH_QUERRY
    payload: {
        searchQuerry: string
    }
}

interface ClearSearchQuerry {
    type: typeof ActionTypes.CLEAR_SEARCH_QUERRY
}

export type Actions =
    | GetPokemonList
    | GetPokemonListSuccess
    | GetPokemonListFailure
    | SetPagination
    | SetSearchQuerry
    | ClearSearchQuerry

// ---------- Actions ----------

export const getPokemonListAction = {
    type: ActionTypes.GET_POKEMON_LIST,
}

export const getPokemonListSuccessAction = (pokemonData: PokemonDataBasic) => ({
    type: ActionTypes.GET_POKEMON_LIST_SUCCESS,
    payload: {
        pokemonData,
    },
})

export const getPokemonListFailureAction = {
    type: ActionTypes.GET_POKEMON_LIST_FAILURE,
}

export const setPaginationAction = (galleryPage: number) => ({
    type: ActionTypes.SET_PAGINATION,
    payload: {
        galleryPage,
    },
})

export const setSearchQuerryAction = (searchQuerry: string) => ({
    type: ActionTypes.SET_SEARCH_QUERRY,
    payload: {
        searchQuerry,
    },
})

export const clearSearchQuerryAction = ({
    type: ActionTypes.CLEAR_SEARCH_QUERRY,
})
