import { Box, IconButton, InputBase } from '@material-ui/core'
import React, { useCallback } from 'react'
import { styles } from 'components/search-bar/styles'
import { Clear, Search } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearchQuerryAction, setSearchQuerryAction } from 'redux/actions'
import { selectSearchQuerry } from 'redux/selectors'

const inputProps = {
    placeholder: 'Zadejte jméno Pokémona',
}

const SearchBar = () => {
    const classes = styles()
    const dispatch = useDispatch()
    const searchQuerry = useSelector(selectSearchQuerry)

    const clearSearchField = useCallback(() => {
        dispatch(clearSearchQuerryAction)
    }, [dispatch])

    const setSearchQuerry = useCallback(
        (querry) => {
            dispatch(setSearchQuerryAction(querry))
        },
        [dispatch]
    )

    return (
        <Box className={classes.searchBox}>
            <Box className={classes.searchBar}>
                <IconButton>
                    <Search />
                </IconButton>
                <InputBase
                    inputProps={inputProps}
                    value={searchQuerry}
                    onChange={(e) => setSearchQuerry(e.target.value)}
                />
                <IconButton onClick={clearSearchField}>
                    <Clear />
                </IconButton>
            </Box>
        </Box>
    )
}

export default SearchBar
