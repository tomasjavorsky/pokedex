import { Box, IconButton, InputBase } from '@material-ui/core'
import React from 'react'
import { styles } from 'components/search-bar/styles'
import { Clear, Search } from '@material-ui/icons'

const inputProps = {
    placeholder: 'Zadejte jméno Pokémona'
}

const SearchBar = () => {
    const classes = styles()

    return (
        <Box className={classes.searchBox}>
            <Box className={classes.searchBar}>
                <IconButton>
                    <Search />
                </IconButton>
                <InputBase inputProps={inputProps} />
                <IconButton>
                    <Clear />
                </IconButton>
            </Box>
        </Box>
    )
}

export default SearchBar
