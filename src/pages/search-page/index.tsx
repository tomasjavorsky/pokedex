import { Box } from '@material-ui/core'
import Header from 'components/header'
import SearchBar from 'components/search-bar'
import React, { useEffect } from 'react'
import { styles } from 'pages/search-page/styles'
import Gallery from 'components/gallery'
import { useDispatch } from 'react-redux'
import { GetPokemonListAction } from 'redux/actions'

const SearchPage = () => {
    const classes = styles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPokemonListAction)
    }, [dispatch])

    return (
        <Box className={classes.mainContainer}>
            <Header />
            <SearchBar />
            <Gallery />
        </Box>
    )
}

export default SearchPage
