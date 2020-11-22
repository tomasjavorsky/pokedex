import { Box, Typography } from '@material-ui/core'
import React, { useMemo } from 'react'
import { styles } from 'components/skills-box/styles'

interface PropertyBoxProps {
    label: string
    skills?: string[]
}

const SkillsBox = ({ label, skills }: PropertyBoxProps) => {
    const classes = styles()
    const skillsList = useMemo(() => {
        return skills?.map((skill, index) => (
            <Box key={index}>
                <Typography className={classes.property}>{skill}</Typography>
            </Box>
        ))
    }, [skills])
    return (
        <Box className={classes.container}>
            <Typography className={classes.label}>{label}</Typography>
            <Box className={classes.skills}> {skillsList}</Box>
        </Box>
    )
}

export default SkillsBox
