import { Box } from '@material-ui/core'
import Header from 'components/header'
import SearchBar from 'components/search-bar'
import React, { useEffect } from 'react'
import { styles } from 'pages/search-page/styles'
import Gallery from 'components/gallery'
import { useDispatch } from 'react-redux'
import { getPokemonListAction } from 'redux/actions'
import Footer from 'components/footer'

const SearchPage = () => {
    const classes = styles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonListAction)
    }, [dispatch])

    return (
        <Box className={classes.mainContainer}>
            <Header />
            <SearchBar />
            <Gallery />
            <Footer />
        </Box>
    )
}

export default SearchPage
