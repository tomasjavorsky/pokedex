import { Box, IconButton, Tab, Tabs, Typography } from '@material-ui/core'
import React, { Suspense, useCallback, useMemo, useState } from 'react'
import { styles } from 'components/detail-modal/styles'
import PokemonPicture from 'components/pokemon-picture'
import { useQuery } from 'react-query'
import Axios from 'axios'
import PropertyBox from 'components/property-box'
import SkillsBox from 'components/skills-box'
import Stat from 'components/stat'
import { Close } from '@material-ui/icons'

interface DetailModalProps {
    pokemonId: number
    pokemonName: string
    url: string
    closeFunc: () => void
}

const DetailModal = ({
    pokemonId,
    pokemonName,
    url,
    closeFunc,
}: DetailModalProps) => {
    const [selectedTab, setSelectedTab] = useState(1)
    const classes = styles({ offset: window.scrollY })
    const changeTab = useCallback((event: object, value: number) => {
        setSelectedTab(value)
    }, [])
    const { data } = useQuery(url, () => Axios.get(url).then((res) => res.data))
    const abilities = useMemo(() => {
        return data?.abilities.map((a: any) => a.ability.name)
    }, [data])
    const stats = useMemo(() => {
        return data?.stats.map((s: any) => (
            <Stat key={s.stat.name} label={s.stat.name} points={s.base_stat} />
        ))
    }, [data])

    return (
        <Box className={classes.outerContainer}>
            <Box className={classes.mainContainer}>
                <Box className={classes.tabContainer}>
                    <Tabs
                        value={selectedTab}
                        indicatorColor="secondary"
                        textColor="inherit"
                        onChange={changeTab}
                    >
                        <Tab label="Profil" />
                        <Tab label="Statistiky" />
                    </Tabs>
                </Box>
                <Box className={classes.innerContainer}>
                    <Box className={classes.contentContainer}>
                        <Box className={classes.imageContainer}>
                            <Typography className={classes.pokemonName}>
                                {pokemonName}
                            </Typography>
                            <Suspense fallback={'loading'}>
                                <PokemonPicture pokemonId={pokemonId} />
                            </Suspense>
                        </Box>
                        {selectedTab === 0 && (
                            <Box className={classes.tab0}>
                                <PropertyBox
                                    label={'Typ'}
                                    property={data?.types[0].type.name}
                                />
                                <PropertyBox
                                    label={'Výška'}
                                    property={data?.height}
                                />
                                <PropertyBox
                                    label={'Váha'}
                                    property={data?.weight}
                                />
                                <SkillsBox
                                    label={'Dovednosti'}
                                    skills={abilities}
                                />
                            </Box>
                        )}
                        {selectedTab === 1 && <Box>{stats}</Box>}
                    </Box>
                    <Box className={classes.closeContainer}>
                        <IconButton onClick={closeFunc}>
                            <Close />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailModal
