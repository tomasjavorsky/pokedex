import { ActionTypes } from './actions'
import { ReduxStoreType } from './types'

const initialState: ReduxStoreType = {
    pokemonData: null,
    galleryPage: 1,
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
        default:
            return state
    }
}
