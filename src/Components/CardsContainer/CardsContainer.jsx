import { Box } from '@mui/material'
import React from 'react'

const CardsContainer = ({ children }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1 }}>
            {children}
        </Box>
    )
}

export default CardsContainer