import Axios from 'axios'
import {
    Actions,
    ActionTypes,
    getPokemonListFailureAction,
    getPokemonListSuccessAction,
} from 'redux/actions'
import { PokemonDataBasic } from './types'

export const getPokemonListMiddleware = (Storeapi: any) => (
    next: any
) => async (action: Actions) => {
    if (action.type === ActionTypes.GET_POKEMON_LIST) {
        try {
            const result = await Axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=150'
            )
            const dataWithIndex = result.data.results.map(
                (element: any, index: number) => ({
                    ...element,
                    pokemonId: index + 1,
                })
            )
            Storeapi.dispatch(getPokemonListSuccessAction(dataWithIndex))
        } catch (error) {
            Storeapi.dispatch(getPokemonListFailureAction)
        }
    }
    return next(action)
}
