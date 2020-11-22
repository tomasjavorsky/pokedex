import { Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { styles } from 'components/footer/styles'
import { CARDS_ON_PAGE } from 'components/gallery'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPaginationAction } from 'redux/actions'
import { selectPokemonTotalCount, selectSearchQuerry, selectVisiblePokemonData } from 'redux/selectors'

const Footer = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const isSearching = useSelector(selectSearchQuerry)
    const visiblePokemonDataLength = useSelector(selectVisiblePokemonData)?.length
    const totalPokemonCount = useSelector(selectPokemonTotalCount)
    const totalCards = isSearching ? visiblePokemonDataLength : totalPokemonCount
    const numberOfPages = totalCards ? Math.ceil(totalCards / CARDS_ON_PAGE) : 0
    const changePage = useCallback(
        (event: object, page: number) => {
            dispatch(setPaginationAction(page))
        },
        [dispatch]
    )

    return (
        <footer className={classes.footerContaier}>
            <Box className={classes.footerTop}>
                <Pagination
                    count={numberOfPages}
                    variant="outlined"
                    shape="rounded"
                    onChange={changePage}
                />
            </Box>
            <Box className={classes.footerBottom}></Box>
        </footer>
    )
}

export default Footer
