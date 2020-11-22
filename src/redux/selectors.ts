import { CARDS_ON_PAGE } from 'components/gallery'
import { PokemonDataBasic, ReduxStoreType } from 'redux/types'

export const selectPokemonDataKey = (
    store: ReduxStoreType
): PokemonDataBasic[] | null =>
    store.pokemonData
        ? store.pokemonData.slice(
              (store.galleryPage - 1) * CARDS_ON_PAGE,
              store.galleryPage * CARDS_ON_PAGE
          )
        : null

export const selectCurrentGalleryPage = (store: ReduxStoreType): number =>
    store.galleryPage

export const selectPokemonTotalCount = (
    store: ReduxStoreType
): number | undefined => store.pokemonData?.length
