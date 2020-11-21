import Axios from 'axios'
import {
    Actions,
    ActionTypes,
    GetPokemonListFailureAction,
    GetPokemonListSuccessAction,
} from 'redux/actions'

export const getPokemonListMiddleware = (Storeapi: any) => (
    next: any
) => async (action: Actions) => {
    if (action.type === ActionTypes.GET_POKEMON_LIST) {
        try {
            const result = await Axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=150'
            )
            Storeapi.dispatch(GetPokemonListSuccessAction(result.data.results))
        } catch (error) {
            Storeapi.dispatch(GetPokemonListFailureAction)
        }
    }
    return next(action)
}
