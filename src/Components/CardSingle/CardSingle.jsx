import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'

const CardSingle = ({ name, status, img, gender }) => {
    const statusState = () => {
        if (status === 'unknown') {
            return 'disabled'
        } else if (status === 'Alive') {
            return 'success'
        } else {
            return 'error'
        }
    }
    return (
        <Card sx={{ display: 'flex', flexGrow: 1, maxHeight: 166 }}>
            <CardActionArea sx={{ display: 'flex', p: 1, positiov: 'relative' }}>
                <CardMedia component='img' image={img} sx={{ width: 150 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ml: 2 }} >
                    <Typography variant='h5' >{name}</Typography>
                    <CircleIcon color={statusState()} sx={{ width: 12, position: 'absolute', top: 10, right: 10 }} />
                    <Typography>{gender}</Typography>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default CardSingle