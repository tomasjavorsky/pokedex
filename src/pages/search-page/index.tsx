import { Box } from '@material-ui/core'
import Header from 'components/header'
import SearchBar from 'components/search-bar'
import React from 'react'
import { styles } from 'pages/search-page/styles'
import Gallery from 'components/gallery'

const SearchPage = () => {
    const classes = styles()
    return (
        <Box className={classes.mainContainer}>
            <Header />
            <SearchBar />
            <Gallery />
        </Box>
    )
}

export default SearchPage
