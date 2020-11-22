import { CARDS_ON_PAGE } from 'components/gallery'
import { PokemonDataBasic, ReduxStoreType } from 'redux/types'

export const selectVisiblePokemonData = (
    store: ReduxStoreType
): PokemonDataBasic[] | undefined => {
    return store.searchQuerry
        ? store.pokemonData?.filter((pokemon) =>
              pokemon.name.startsWith(store.searchQuerry)
          )
        : store.pokemonData
        ? store.pokemonData.slice(
              (store.galleryPage - 1) * CARDS_ON_PAGE,
              store.galleryPage * CARDS_ON_PAGE
          )
        : undefined
}

export const selectCurrentGalleryPage = (store: ReduxStoreType): number =>
    store.galleryPage

export const selectPokemonTotalCount = (
    store: ReduxStoreType
): number | undefined => store.pokemonData?.length

export const selectSearchQuerry = (store: ReduxStoreType): string =>
    store.searchQuerry
