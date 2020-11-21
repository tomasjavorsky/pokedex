import { Box } from '@material-ui/core'
import Header from 'components/header'
import SearchBar from 'components/search-bar'
import React from 'react'
import { styles } from 'pages/search-page/styles'

const SearchPage = () => {
    const classes = styles()
    return (
        <Box className={classes.mainContainer}>
            <Header />
            <SearchBar />
        </Box>
    )
}

export default SearchPage
