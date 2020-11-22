import Axios from 'axios'
import {
    Actions,
    ActionTypes,
    getPokemonListFailureAction,
    getPokemonListSuccessAction,
} from 'redux/actions'

export const getPokemonListMiddleware = (Storeapi: any) => (
    next: any
) => async (action: Actions) => {
    if (action.type === ActionTypes.GET_POKEMON_LIST) {
        try {
            const result = await Axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=150'
            )
            Storeapi.dispatch(getPokemonListSuccessAction(result.data.results))
        } catch (error) {
            Storeapi.dispatch(getPokemonListFailureAction)
        }
    }
    return next(action)
}
