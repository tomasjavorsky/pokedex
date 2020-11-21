import { ActionTypes } from './actions'
import { ReduxStoreType } from './types'

const initialState: ReduxStoreType = {
    pokemonData: null,
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
        default:
            return state
    }
}
