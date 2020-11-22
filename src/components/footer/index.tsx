import { Box } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { styles } from 'components/footer/styles'
import { CARDS_ON_PAGE } from 'components/gallery'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPaginationAction } from 'redux/actions'
import { selectPokemonTotalCount } from 'redux/selectors'

const Footer = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const totalPokemonCount = useSelector(selectPokemonTotalCount)
    const numberOfPages = totalPokemonCount ? Math.ceil(totalPokemonCount / CARDS_ON_PAGE) : 0
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
