import { ActionTypes } from './actions'
import { ReduxStoreType } from './types'

const initialState: ReduxStoreType = {
    pokemonData: undefined,
    galleryPage: 1,
    searchQuerry: '',
}

export default function reducer(
    state = initialState,
    action: any
): ReduxStoreType {
    switch (action.type) {
        case ActionTypes.GET_POKEMON_LIST_SUCCESS: {
            const { pokemonData } = action.payload
            return {
                ...state,
                pokemonData: pokemonData,
            }
        }
        case ActionTypes.SET_PAGINATION: {
            const { galleryPage } = action.payload
            return {
                ...state,
                galleryPage: galleryPage,
            }
        }
        case ActionTypes.SET_SEARCH_QUERRY: {
            const { searchQuerry } = action.payload
            return {
                ...state,
                searchQuerry: searchQuerry,
            }
        }
        case ActionTypes.CLEAR_SEARCH_QUERRY: {
            return {
                ...state,
                searchQuerry: '',
            }
        }
        default:
            return state
    }
}
