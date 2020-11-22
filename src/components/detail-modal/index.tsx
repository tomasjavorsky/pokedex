import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import React, { Suspense, useCallback, useMemo, useState } from 'react'
import { styles } from 'components/detail-modal/styles'
import PokemonPicture from 'components/pokemon-picture'
import { useQuery } from 'react-query'
import Axios from 'axios'
import PropertyBox from 'components/property-box'
import SkillsBox from 'components/skills-box'
import Stat from 'components/stat'

interface DetailModalProps {
    pokemonId: number
    pokemonName: string
    url: string
}

const DetailModal = ({ pokemonId, pokemonName, url }: DetailModalProps) => {
    const [selectedTab, setSelectedTab] = useState(1)
    const classes = styles()
    const changeTab = useCallback((event: object, value: number) => {
        setSelectedTab(value)
    }, [])
    const { isLoading, error, data } = useQuery(url, () =>
        Axios.get(url).then((res) => res.data)
    )
    const abilities = useMemo(() => {
        return data?.abilities.map((a: any) => a.ability.name)
    }, [data])
    const stats = useMemo(() => {
        return data?.stats.map((s: any) => (
            <Stat key={s.stat.name} label={s.stat.name} points={s.base_stat} />
        ))
    }, [data])
    console.log(data)

    return (
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
                <Box className={classes.imageContainer}>
                    <Typography className={classes.pokemonName}>
                        {pokemonName}
                    </Typography>
                    <Suspense fallback={'loading'}>
                        <PokemonPicture pokemonId={pokemonId} />
                    </Suspense>
                </Box>
                {selectedTab === 0 && (
                    <Box>
                        <PropertyBox
                            label={'Typ'}
                            property={data?.types[0].type.name}
                        />
                        <PropertyBox label={'Výška'} property={data?.height} />
                        <PropertyBox label={'Váha'} property={data?.weight} />
                        <SkillsBox label={'Dovednosti'} skills={abilities} />
                    </Box>
                )}
                {selectedTab === 1 && (
                    <Box>
                        {stats}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default DetailModal