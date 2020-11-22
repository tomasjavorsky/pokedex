import React from 'react'
import { Box, Button } from '@material-ui/core'
import pokedexLogo from 'images/pokedex_logo.png'

import { styles } from 'components/header/styles'

const Header = () => {
    const classes = styles()
    return (
        <header className={classes.headerContainer}>
            <Box className={classes.logoBox}>
                <img src={pokedexLogo} alt={'logo'} />
            </Box>
            <Box className={classes.buttonBox}>
                <Button>O nás</Button>
                <Button>Pokémoni</Button>
            </Box>
        </header>
    )
}

export default Header
